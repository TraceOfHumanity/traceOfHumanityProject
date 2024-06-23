import React, { useEffect, useRef } from "react";

export const StarsAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const n_stars = 50;
  const colors = ["#ff0000", "#00b7ff"];

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const randomInt = (max: number, min: number) =>
      Math.floor(Math.random() * (max - min) + min);

    const bg = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height * 3,
      canvas.height,
      canvas.width / 2,
      canvas.height,
      canvas.height * 4
    );

    class Star {
      x: number;
      y: number;
      radius: number;
      color: string;
      dy: number;
      canvasWidth: number;
      canvasHeight: number;

      constructor(
        x: number | false,
        y: number | false,
        canvasWidth: number,
        canvasHeight: number,
        radius?: number,
        color?: string
      ) {
        this.x = x !== false ? x : randomInt(0, canvasWidth);
        this.y = y !== false ? y : randomInt(0, canvasHeight);
        this.radius = radius ?? Math.random() * 4;
        this.color = color ?? colors[randomInt(0, colors.length)];
        this.dy = -Math.random() * 0.3;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
      }

      draw() {
        if (!ctx) return; 
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.shadowBlur = randomInt(3, 15);
        ctx.shadowColor = this.color;
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
      }

      update(arrayStars: Star[] = []) {
        if (this.y - this.radius < 0) this.createNewStar(arrayStars);

        this.y += this.dy;
        this.draw();
      }

      createNewStar(arrayStars: Star[] = []) {
        const i = arrayStars.indexOf(this);
        if (i !== -1) arrayStars.splice(i, 1);
        arrayStars.push(new Star(false, this.canvasHeight + 5, this.canvasWidth, this.canvasHeight));
      }
    }

    let stars: Star[] = [];

    const init = () => {
      for (let i = 0; i < n_stars; i++) {
        stars.push(new Star(false, false, canvas.width, canvas.height));
      }
    };

    init();

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      stars.forEach((s) => s.update(stars));
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
      stars = [];
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 -z-10 h-screen w-screen" />;
};
