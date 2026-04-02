import { useEffect, useRef } from 'react';

export default function SolarHeroScene() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e) => {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });

    // Solar panels
    const drawPanels = (w, h, t) => {
      const mobile = w < 768;
      const mx = mouse.current.x - 0.5;
      const my = mouse.current.y - 0.5;

      const panels = mobile
        ? [
            { x: w * 0.18, y: h * 0.72, w: 55, h: 38, angle: -12 },
            { x: w * 0.5, y: h * 0.68, w: 65, h: 44, angle: 0 },
            { x: w * 0.82, y: h * 0.74, w: 50, h: 35, angle: 10 },
          ]
        : [
            { x: w * 0.08, y: h * 0.72, w: 80, h: 55, angle: -18 },
            { x: w * 0.22, y: h * 0.66, w: 95, h: 65, angle: -10 },
            { x: w * 0.38, y: h * 0.7, w: 85, h: 58, angle: -4 },
            { x: w * 0.55, y: h * 0.64, w: 100, h: 68, angle: 2 },
            { x: w * 0.72, y: h * 0.68, w: 90, h: 62, angle: 8 },
            { x: w * 0.88, y: h * 0.73, w: 75, h: 52, angle: 15 },
          ];

      panels.forEach((panel, idx) => {
        const tiltX = mx * 6;
        const tiltY = my * 4;
        const floatY = Math.sin(t * 0.012 + idx * 0.8) * 4;
        const px = panel.x - panel.w / 2 + tiltX * (idx - panels.length / 2) * 0.4;
        const py = panel.y - panel.h / 2 + floatY + tiltY * 2;
        const glow = Math.sin(t * 0.02 + idx * 0.6) * 0.12 + 0.88;

        ctx.save();
        ctx.translate(px + panel.w / 2, py + panel.h / 2);
        ctx.rotate((panel.angle + tiltX * 2) * Math.PI / 180);
        ctx.translate(-panel.w / 2, -panel.h / 2);

        // Panel shadow
        ctx.globalAlpha = 0.08;
        ctx.fillStyle = '#000';
        ctx.fillRect(4, 6, panel.w, panel.h);

        // Panel frame (silver border)
        ctx.globalAlpha = 0.35 * glow;
        ctx.fillStyle = '#64748B';
        ctx.fillRect(-2, -2, panel.w + 4, panel.h + 4);

        // Panel surface
        const panelGrad = ctx.createLinearGradient(0, 0, panel.w, panel.h);
        panelGrad.addColorStop(0, '#0c2d48');
        panelGrad.addColorStop(0.3, '#1a4a6e');
        panelGrad.addColorStop(0.5, '#0f3a5c');
        panelGrad.addColorStop(0.7, '#1a4a6e');
        panelGrad.addColorStop(1, '#0c2d48');
        ctx.fillStyle = panelGrad;
        ctx.globalAlpha = 0.4 * glow;
        ctx.fillRect(0, 0, panel.w, panel.h);

        // Cell grid lines
        ctx.strokeStyle = '#a1d65c';
        ctx.globalAlpha = 0.12 * glow;
        ctx.lineWidth = 0.5;

        const cellCols = 4;
        const cellRows = 3;
        for (let c = 1; c < cellCols; c++) {
          const lx = (panel.w / cellCols) * c;
          ctx.beginPath();
          ctx.moveTo(lx, 0);
          ctx.lineTo(lx, panel.h);
          ctx.stroke();
        }
        for (let r = 1; r < cellRows; r++) {
          const ly = (panel.h / cellRows) * r;
          ctx.beginPath();
          ctx.moveTo(0, ly);
          ctx.lineTo(panel.w, ly);
          ctx.stroke();
        }

        // Subtle panel reflection
        ctx.globalAlpha = 0.06 * glow;
        const reflectGrad = ctx.createLinearGradient(0, 0, panel.w * 0.6, panel.h * 0.6);
        reflectGrad.addColorStop(0, '#D1EB8C');
        reflectGrad.addColorStop(0.5, 'rgba(161,214,92,0.28)');
        reflectGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = reflectGrad;
        ctx.fillRect(0, 0, panel.w, panel.h);

        ctx.restore();
      });
    };

    // Floating energy sparks
    class Spark {
      constructor(w, h) { this.reset(w, h); }
      reset(w, h) {
        this.x = Math.random() * w;
        this.y = h * 0.5 + Math.random() * h * 0.5;
        this.size = Math.random() * 2 + 0.5;
        this.speed = Math.random() * 0.8 + 0.3;
        this.opacity = 0;
        this.maxOpacity = Math.random() * 0.5 + 0.15;
        this.life = 0;
        this.maxLife = Math.random() * 180 + 80;
        this.drift = (Math.random() - 0.5) * 0.3;
        this.color = Math.random() > 0.55 ? '#a1d65c' : '#4C6971';
      }
      update(w, h) {
        this.life++;
        this.y -= this.speed;
        this.x += this.drift + Math.sin(this.life * 0.03) * 0.3;
        const ratio = this.life / this.maxLife;
        this.opacity = ratio < 0.2
          ? (ratio / 0.2) * this.maxOpacity
          : ratio > 0.7
            ? ((1 - ratio) / 0.3) * this.maxOpacity
            : this.maxOpacity;
        if (this.life >= this.maxLife) this.reset(w, h);
      }
      draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const mobile = canvas.width < 768;
    const sparkCount = mobile ? 12 : 25;
    const sparks = [];
    for (let i = 0; i < sparkCount; i++) {
      sparks.push(new Spark(canvas.width, canvas.height));
    }

    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const animate = (timestamp) => {
      animationId = requestAnimationFrame(animate);
      const delta = timestamp - lastTime;
      if (delta < interval) return;
      lastTime = timestamp - (delta % interval);
      time++;

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      drawPanels(w, h, time);
      sparks.forEach((s) => { s.update(w, h); s.draw(ctx); });
    };

    animate(0);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
