import React, { useEffect, useRef, useState } from 'react';
import $ from 'jquery';

const ParticleCanvas = () => {
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const maxParticles = 2500;
  const frequency = 10;
  const maxTime = frequency * maxParticles;
  const [timeToRecreate, setTimeToRecreate] = useState(false);

  useEffect(() => {
    // Set up canvas dimensions
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = $(window).width();
    canvas.height = $(window).height();

    // Enable repopulate after max time
    const timeoutId = setTimeout(() => {
      setTimeToRecreate(true);
    }, maxTime);

    // Populate initial particles
    populate(maxParticles, ctx);

    // Start the update loop
    const animationId = requestAnimationFrame(() => update(ctx));

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationId);
    };
  }, []);

  class Particle {
    constructor(canvas) {
      let random = Math.random();
      this.progress = 0;
      this.canvas = canvas;
      this.center = {
        x: $(window).width() / 2,
        y: $(window).height() / 2,
      };

      this.pointOfAttraction = {
        x: $(window).width() / 2,
        y: $(window).height() / 2,
      };

      if (Math.random() > 0.5) {
        this.x = $(window).width() * Math.random();
        this.y = Math.random() > 0.5 ? -Math.random() - 100 : $(window).height() + Math.random() + 100;
      } else {
        this.x = Math.random() > 0.5 ? -Math.random() - 100 : $(window).width() + Math.random() + 100;
        this.y = $(window).height() * Math.random();
      }

      this.s = Math.random() * 2;
      this.a = 0;
      this.radius = random > 0.2 ? Math.random() * 1 : Math.random() * 3;
      this.color = random > 0.2 ? '#694FB9' : '#9B0127';
      this.radius = random > 0.8 ? Math.random() * 2.2 : this.radius;
      this.color = random > 0.8 ? '#3CFBFF' : this.color;
    }

    calculateDistance(v1, v2) {
      let x = Math.abs(v1.x - v2.x);
      let y = Math.abs(v1.y - v2.y);
      return Math.sqrt(x * x + y * y);
    }

    render() {
      this.canvas.beginPath();
      this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      this.canvas.lineWidth = 2;
      this.canvas.fillStyle = this.color;
      this.canvas.fill();
      this.canvas.closePath();
    }

    move() {
      let p1 = {
        x: this.x,
        y: this.y,
      };

      let distance = this.calculateDistance(p1, this.pointOfAttraction);
      let force = Math.max(100, 1 + distance);

      let attrX = (this.pointOfAttraction.x - this.x) / force;
      let attrY = (this.pointOfAttraction.y - this.y) / force;

      this.x += Math.cos(this.a) * this.s + attrX;
      this.y += Math.sin(this.a) * this.s + attrY;
      this.a += Math.random() > 0.5 ? Math.random() * 0.9 - 0.45 : Math.random() * 0.4 - 0.2;

      if (distance < 30 + Math.random() * 100) {
        return false;
      }

      this.render();
      this.progress++;
      return true;
    }
  }

  function populate(num, ctx) {
    let newParticles = [];
    for (let i = 0; i < num; i++) {
      newParticles.push(new Particle(ctx));
    }
    setParticles(newParticles);
  }

  function clear(ctx) {
    ctx.globalAlpha = 0.08;
    ctx.fillStyle = '#110031';
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    ctx.globalAlpha = 1;
  }

  function update(ctx) {
    let filteredParticles = particles.filter((p) => p.move());
    setParticles(filteredParticles);

    // Recreate particles if needed
    if (timeToRecreate && filteredParticles.length < maxParticles) {
      populate(1, ctx);
    }

    clear(ctx);
    requestAnimationFrame(() => update(ctx));
  }

  return <canvas ref={canvasRef} />;
};

export default ParticleCanvas;
