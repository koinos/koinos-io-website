import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const BlockchainBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    let scene, camera, renderer, mainBlocks, transactionBlocks;
    let animationFrameId;

    const init = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      mountRef.current.appendChild(renderer.domElement);

      mainBlocks = [];
      transactionBlocks = [];

      camera.position.z = 50;

      // Create initial main blocks
      for (let i = 0; i < 5; i++) {
        createMainBlock();
      }
    };

    const createMainBlock = () => {
      const geometry = new THREE.BoxGeometry(8, 8, 8);
      const material = new THREE.MeshBasicMaterial({
        color: 0x00ff88,
        transparent: true,
        opacity: 0.6,
        wireframe: true
      });
      const block = new THREE.Mesh(geometry, material);
      
      block.position.set(
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60,
        (Math.random() - 0.5) * 60
      );
      
      scene.add(block);
      mainBlocks.push(block);
    };

    const createTransactionBlock = () => {
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        transparent: true,
        opacity: 0.8
      });
      const block = new THREE.Mesh(geometry, material);
      
      block.position.set(
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100,
        (Math.random() - 0.5) * 100
      );
      
      block.targetBlock = mainBlocks[Math.floor(Math.random() * mainBlocks.length)];
      
      scene.add(block);
      transactionBlocks.push(block);
    };

    const animateBlocks = () => {
      // Animate main blocks
      mainBlocks.forEach(block => {
        block.rotation.x += 0.005;
        block.rotation.y += 0.005;
      });

      // Animate transaction blocks
      transactionBlocks.forEach((block, index) => {
        block.position.lerp(block.targetBlock.position, 0.02);
        
        // If transaction block is close to its target, merge it
        if (block.position.distanceTo(block.targetBlock.position) < 0.5) {
          scene.remove(block);
          transactionBlocks.splice(index, 1);
          
          // Slightly increase the size of the main block
          block.targetBlock.scale.addScalar(0.05);
          if (block.targetBlock.scale.x > 1.5) {
            block.targetBlock.scale.setScalar(1);
          }
        }
      });

      // Create new transaction blocks
      if (Math.random() < 0.1 && transactionBlocks.length < 50) {
        createTransactionBlock();
      }

      // Slowly rotate the entire scene
      scene.rotation.y += 0.001;
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      animateBlocks();
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    init();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />;
};

export default BlockchainBackground;