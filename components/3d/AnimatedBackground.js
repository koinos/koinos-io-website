import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

class SceneManager {
  constructor(mountElement) {
    this.mountElement = mountElement;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.particlesGroup = new THREE.Group();
    this.lines = null;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.isInitialized = false;
    this.bounds = new THREE.Box3();
  }

  init() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x14151a, 1);
    this.mountElement.appendChild(this.renderer.domElement);

    const positions = [];

    for (let i = 0; i < 200; i++) { // Reduced number of particles for better performance
      const x = Math.random() * 180 - 90;
      const y = Math.random() * 180 - 90;
      const z = Math.random() * 180 - 90;

      positions.push(new THREE.Vector3(x, y, z));

      const hexagon = this.createHexagon();
      hexagon.position.set(x, y, z);
      hexagon.lookAt(this.camera.position);
      hexagon.userData.velocity = new THREE.Vector3(0, -0.02, 0);
      hexagon.userData.isLarge = true;
      this.particlesGroup.add(hexagon);
    }

    this.scene.add(this.particlesGroup);

    this.createLines(positions);

    this.camera.position.z = 10;
    this.isInitialized = true;

    // Add click event listener
    this.renderer.domElement.addEventListener('click', this.onMouseClick.bind(this), false);

    // Set bounds
    this.bounds.setFromCenterAndSize(new THREE.Vector3(1, 1, 1), new THREE.Vector3(180, 180, 180));
  }

  createLines(positions) {
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x444444,
      transparent: true,
      opacity: 0.3
    });
    const linesGeometry = new THREE.BufferGeometry();
    const linePositions = [];

    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (positions[i].distanceTo(positions[j]) < 40) {
          linePositions.push(positions[i].x, positions[i].y, positions[i].z);
          linePositions.push(positions[j].x, positions[j].y, positions[j].z);
        }
      }
    }

    linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    this.lines = new THREE.LineSegments(linesGeometry, linesMaterial);
    this.scene.add(this.lines);
  }

  createHexagon(size = 0.5, color = 0x888888, opacity = 0.7) {
    const hexagonShape = new THREE.Shape();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const x = size * Math.cos(angle);
      const y = size * Math.sin(angle);
      if (i === 0) hexagonShape.moveTo(x, y);
      else hexagonShape.lineTo(x, y);
    }
    const hexagonGeometry = new THREE.ShapeGeometry(hexagonShape);
    const material = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: opacity,
      side: THREE.DoubleSide
    });
    return new THREE.Mesh(hexagonGeometry, material);
  }

  spawnSmallBlocks(position, count = 20) {
    for (let i = 0; i < count; i++) {
      const smallHexagon = this.createHexagon(0.2, 0xffffff, 0.9);
      smallHexagon.position.copy(position);
      smallHexagon.userData.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5
      );
      smallHexagon.userData.isLarge = false;
      this.particlesGroup.add(smallHexagon);
    }
  }

  onMouseClick(event) {
    event.preventDefault();
    const rect = this.renderer.domElement.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.particlesGroup.children, true);

    if (intersects.length > 0) {
      const clickedObject = intersects[0].object;
      if (clickedObject.userData.isLarge) {
        this.spawnSmallBlocks(clickedObject.position);
      }
    }
  }

  animateParticles() {
    if (!this.isInitialized || !this.particlesGroup || !this.particlesGroup.children) return;

    this.particlesGroup.children.forEach((hexagon) => {
      if (hexagon && hexagon.position && hexagon.userData.velocity) {
        if (hexagon.userData.isLarge) {
          hexagon.position.y += hexagon.userData.velocity.y;
          if (hexagon.position.y < this.bounds.min.y) hexagon.position.y = this.bounds.max.y;
          hexagon.position.x += Math.sin(Date.now() * 0.001 + hexagon.position.z) * 0.05;
        } else {
          hexagon.position.add(hexagon.userData.velocity);
          
          // Bounce off the edges
          if (hexagon.position.x <= this.bounds.min.x || hexagon.position.x >= this.bounds.max.x) {
            hexagon.userData.velocity.x *= -1;
          }
          if (hexagon.position.y <= this.bounds.min.y || hexagon.position.y >= this.bounds.max.y) {
            hexagon.userData.velocity.y *= -1;
          }
          if (hexagon.position.z <= this.bounds.min.z || hexagon.position.z >= this.bounds.max.z) {
            hexagon.userData.velocity.z *= -1;
          }

          hexagon.scale.multiplyScalar(0.995); // Slower shrinking
          if (hexagon.scale.x < 0.01) {
            this.particlesGroup.remove(hexagon);
          }
        }
        hexagon.lookAt(this.camera.position);
      }
    });

    this.updateLines();
  }

  updateLines() {
    if (this.lines && this.lines.geometry && this.lines.geometry.attributes.position) {
      const positions = this.lines.geometry.attributes.position.array;
      let index = 0;
      const hexagons = this.particlesGroup.children.filter(h => h.userData.isLarge);
      
      for (let i = 0; i < hexagons.length; i++) {
        for (let j = i + 1; j < hexagons.length; j++) {
          const hexagon1 = hexagons[i];
          const hexagon2 = hexagons[j];
          if (hexagon1.position.distanceTo(hexagon2.position) < 40) {
            positions[index++] = hexagon1.position.x;
            positions[index++] = hexagon1.position.y;
            positions[index++] = hexagon1.position.z;
            positions[index++] = hexagon2.position.x;
            positions[index++] = hexagon2.position.y;
            positions[index++] = hexagon2.position.z;
          }
        }
      }
      
      this.lines.geometry.setDrawRange(0, index / 3);
      this.lines.geometry.attributes.position.needsUpdate = true;
    }
  }

  animate() {
    if (this.isInitialized) {
      this.animateParticles();
      this.renderer.render(this.scene, this.camera);
    }
    requestAnimationFrame(this.animate.bind(this));
  }

  handleResize() {
    if (this.camera && this.renderer) {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }

  clean() {
    if (this.mountElement && this.renderer) {
      this.mountElement.removeChild(this.renderer.domElement);
    }
    this.isInitialized = false;
  }
}

const FuturisticBlockchainBackground = () => {
  const mountRef = useRef(null);
  const sceneManagerRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    sceneManagerRef.current = new SceneManager(mountRef.current);
    sceneManagerRef.current.init();
    sceneManagerRef.current.animate();

    const handleResize = () => sceneManagerRef.current.handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneManagerRef.current) {
        sceneManagerRef.current.clean();
      }
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default FuturisticBlockchainBackground;