import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

class SceneManager {
  constructor(mountElement) {
    this.mountElement = mountElement;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.globe = null;
    this.nodes = [];
    this.connections = null;
    this.globeRadius = 5;
    this.globePosition = new THREE.Vector3(0, 0, 0);
    this.isInitialized = false;
    this.clock = new THREE.Clock();
  }

  init() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x000000, 0);
    this.mountElement.appendChild(this.renderer.domElement);

    this.createGlobe();
    this.generateNodes();
    this.createConnections();
    this.positionCamera();

    window.addEventListener('resize', this.handleResize.bind(this));
    this.isInitialized = true;
  }

  createGlobe() {
    const geometry = new THREE.SphereGeometry(this.globeRadius, 20, 20);
    
    const material = new THREE.ShaderMaterial({
        uniforms: {
          color1: { value: new THREE.Color("#5d00b3") }, // Purple
          color2: { value: new THREE.Color("#9966FF") }, // Lighter purple
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec3 color1;
          uniform vec3 color2;
          varying vec2 vUv;
          void main() {
            gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
          }
        `,
        wireframe: true
      });

    this.globe = new THREE.Mesh(geometry, material);
    this.globe.position.copy(this.globePosition);
    this.scene.add(this.globe);
  }

  generateNodes() {
    for (let i = 0; i < 200; i++) {
      const phi = Math.acos(-1 + (2 * i) / 200);
      const theta = Math.sqrt(200 * Math.PI) * phi;

      const x = this.globeRadius * Math.cos(theta) * Math.sin(phi);
      const y = this.globeRadius * Math.sin(theta) * Math.sin(phi);
      const z = this.globeRadius * Math.cos(phi);

      const geometry = new THREE.SphereGeometry(0.02, 16, 16);
      const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const node = new THREE.Mesh(geometry, material);
      node.position.set(x, y, z);
      
      this.nodes.push(node);
      this.globe.add(node);
    }
  }

  createConnections() {
    const geometry = new THREE.BufferGeometry();
    const material = new THREE.LineBasicMaterial({ color: 0x5d00b3, opacity: 0.5, transparent: true });
    const positions = [];

    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        if (this.nodes[i].position.distanceTo(this.nodes[j].position) < 2) {
          positions.push(this.nodes[i].position.x, this.nodes[i].position.y, this.nodes[i].position.z);
          positions.push(this.nodes[j].position.x, this.nodes[j].position.y, this.nodes[j].position.z);
        }
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    this.connections = new THREE.LineSegments(geometry, material);
    this.globe.add(this.connections);
  }

  positionCamera() {
    this.camera.position.set(0, 0, 5);
    this.camera.lookAt(this.globePosition);
  }

  handleResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  animate() {
    if (this.isInitialized) {
      const time = this.clock.getElapsedTime();
      
      // Move the globe from left to right
      const xPosition = Math.sin(time * 0.1) * 4; // Adjust the multiplier (0.2) to change speed, and 3 to change the range of movement
      this.globe.position.x = xPosition;

      // Slowly rotate the globe
      this.globe.rotation.y += 0.0002;

      this.renderer.render(this.scene, this.camera);
    }
    requestAnimationFrame(this.animate.bind(this));
  }

  clean() {
    if (this.mountElement && this.renderer) {
      this.mountElement.removeChild(this.renderer.domElement);
    }
    window.removeEventListener('resize', this.handleResize.bind(this));
    this.isInitialized = false;
  }
}

const GlobeBackground = () => {
  const mountRef = useRef(null);
  const sceneManagerRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    sceneManagerRef.current = new SceneManager(mountRef.current);
    sceneManagerRef.current.init();
    sceneManagerRef.current.animate();

    return () => {
      if (sceneManagerRef.current) {
        sceneManagerRef.current.clean();
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0,
        width: '100%',
        height: '100%', 
        zIndex: 0,
      }} 
    />
  );
};

export default GlobeBackground;