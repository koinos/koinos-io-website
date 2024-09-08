import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

class BlockVisualizer {
  constructor(mountElement) {
    this.mountElement = mountElement;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.blocks = [];
    this.smallBlocks = [];
  }

  init() {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setClearColor(0x14151a, 1);
    this.mountElement.appendChild(this.renderer.domElement);

    this.camera.position.z = 10;

    this.createBlocks();
    this.animate();

    window.addEventListener('click', this.onMouseClick.bind(this), false);
  }

  createBlocks() {
    const geometry = new THREE.BoxGeometry(4, 4, 4);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x444444,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });

    for (let i = 0; i < 10; i++) {
      const block = new THREE.Mesh(geometry, material);
      block.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      this.blocks.push(block);
      this.scene.add(block);
    }
  }

  createSmallBlocks(position) {
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0xFFCF21,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });

    for (let i = 0; i < 20; i++) {
      const block = new THREE.Mesh(geometry, material);
      block.position.set(
        position.x + (Math.random() - 0.5) * 3,
        position.y + (Math.random() - 0.5) * 3,
        position.z + (Math.random() - 0.5) * 3
      );
      block.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.05,
        (Math.random() - 0.5) * 0.05,
        (Math.random() - 0.5) * 0.05
      );
      this.smallBlocks.push(block);
      this.scene.add(block);
    }
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    this.blocks.forEach(block => {
      block.rotation.x += 0.001;
      block.rotation.y += 0.001;
    });

    this.smallBlocks.forEach(block => {
      block.position.add(block.velocity);
      block.rotation.x += 0.02;
      block.rotation.y += 0.02;

      // Remove small blocks that have moved too far away
      if (block.position.length() > 50) {
        this.scene.remove(block);
        this.smallBlocks = this.smallBlocks.filter(b => b !== block);
      }
    });

    this.renderer.render(this.scene, this.camera);
  }

  onMouseClick(event) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);

    const intersects = this.raycaster.intersectObjects(this.blocks);

    if (intersects.length > 0) {
      this.createSmallBlocks(intersects[0].object.position);
    }
  }

  handleResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  clean() {
    if (this.mountElement && this.renderer) {
      this.mountElement.removeChild(this.renderer.domElement);
    }
    window.removeEventListener('click', this.onMouseClick);
  }
}

const InteractiveBlocksBackground = () => {
  const mountRef = useRef(null);
  const visualizerRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    visualizerRef.current = new BlockVisualizer(mountRef.current);
    visualizerRef.current.init();

    const handleResize = () => visualizerRef.current.handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (visualizerRef.current) {
        visualizerRef.current.clean();
      }
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default InteractiveBlocksBackground;