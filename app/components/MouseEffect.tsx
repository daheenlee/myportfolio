'use client';

import { useState, useEffect } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  rotation: number;
}

export default function MouseEffect() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // 더 자주 생성 (반짝반짝!)
      if (Math.random() > 0.7) {
        const newParticle: Particle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 8 + 4,
          duration: Math.random() * 1.5 + 0.5,
          rotation: Math.random() * 360
        };
        
        setParticles(prev => [...prev.slice(-15), newParticle]);
        
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== newParticle.id));
        }, newParticle.duration * 1000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* 반짝이는 별 파티클 */}
      {particles.map(particle => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: particle.x - particle.size / 2,
            top: particle.y - particle.size / 2,
            width: particle.size,
            height: particle.size,
            animation: `sparkle ${particle.duration}s ease-out forwards`,
            transform: `rotate(${particle.rotation}deg)`
          }}
        >
          {/* 별 모양 */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </div>
      ))}

      {/* 마우스 주변 빛나는 효과 */}
      <div 
        className="fixed w-64 h-64 rounded-full pointer-events-none transition-all duration-300 ease-out z-40"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(34,197,94,0.2) 50%, transparent 70%)',
          left: mousePos.x - 128,
          top: mousePos.y - 128,
          filter: 'blur(40px)',
          animation: 'glow 2s ease-in-out infinite'
        }}
      />

      <style jsx>{`
        @keyframes sparkle {
          0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.5) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: scale(0.5) rotate(360deg);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </>
  );
}