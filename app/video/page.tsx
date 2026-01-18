'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { X, ArrowLeft, Play, Monitor } from 'lucide-react';

export default function VideoPortfolio() {
  
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 영상 3개 데이터 정리
  const videoProjects = [
    {
      id: 1,
      title: '아티스트 인터뷰 영상(1)',
      description: '아티스트의 숨겨진 매력을 이끌어내는 인터뷰 시리즈 기획 및 제작. 2인 제작 시스템으로 운영하며 전 프로세스를 경험했습니다.',
      thumbnail: '/images/videosum.png',
      videoUrl: 'https://www.youtube.com/embed/LMDnt3sv0kw',
      tags: ['After Effects', 'Premiere Pro'],
      year: '2024'
    },
    {
      id: 2,
      title: '아티스트 인터뷰 영상(2)',
      description: '아티스트의 숨겨진 매력을 이끌어내는 인터뷰 시리즈 기획 및 제작. 2인 제작 시스템으로 운영하며 전 프로세스를 경험했습니다.',
      thumbnail: '/images/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/-dX1yy4OF3s',
      tags: ['After Effects', 'Premiere Pro'],
      year: '2024'
    },
    {
      id: 3,
      title: '아티스트 연주 영상',
      description: '아티스트의 연주 퍼포먼스 영상입니다.',
      thumbnail: '/images/music_02.png',
      videoUrl: 'https://www.youtube.com/embed/bO6s7UBhJd0',
      tags: ['After Effects', 'Premiere Pro'],
      year: '2024'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black relative overflow-x-hidden">
      {/* 마우스 효과 */}
      <div 
        className="fixed w-8 h-8 rounded-full bg-blue-500 opacity-20 pointer-events-none z-[100] mix-blend-multiply blur-md hidden md:block"
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px`, transform: 'translate(-50%, -50%)' }}
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer no-underline">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform text-black" />
            <h1 className="text-xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent ">DAHEEN</h1>
          </Link>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-bold text-gray-500">
            {['홈', '자기소개', '웹디자인', '영상편집'].map((name, i) => (
              <Link key={name} href={['/', '/profile', '/webdesign', '/video'][i]}>
                <span className="hover:text-black transition-colors cursor-pointer">{name}</span>
              </Link>
            ))}
          </div>

          <button className="md:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : (
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
                <div className="w-6 h-0.5 bg-black"></div>
              </div>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 pb-6 pt-4 px-4 space-y-2">
            {['홈', '자기소개', '웹디자인', '영상편집'].map((name, i) => (
              <Link key={name} href={['/', '/profile', '/webdesign', '/video'][i]} onClick={() => setMobileMenuOpen(false)}>
                <div className="block py-3 px-4 text-gray-600 font-bold hover:bg-gray-50 rounded-lg cursor-pointer">{name}</div>
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-6 pt-52 pb-20">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase leading-none">
          VIDEO<br/><span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Editing</span>
        </h2>
        <p className="text-gray-500 text-xl font-medium">영상편집 작업물입니다.</p>
      </header>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <div className="flex flex-col gap-40">
          {videoProjects.map((video, index) => (
            <div key={video.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group">
              <div className="lg:col-span-7 relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer bg-gray-100" onClick={() => setSelectedVideo(video)}>
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                    <Play size={32} fill="black" className="ml-1" />
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">0{index + 1}</span>
                  <span className="h-px flex-1 bg-gray-100"></span>
                </div>
                <h3 className="text-3xl font-black tracking-tight uppercase italic">{video.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{video.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {video.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-black text-gray-400 uppercase tracking-widest">{tag}</span>
                  ))}
                </div>
                <button onClick={() => setSelectedVideo(video)} className="flex items-center gap-3 text-sm font-black hover:text-blue-600 uppercase tracking-widest pt-4 transition-colors">
                  Watch Project <Monitor size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4 md:p-12" onClick={() => setSelectedVideo(null)}>
          <div className="w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-visible relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedVideo(null)} className="absolute -top-12 right-0 text-white flex items-center gap-2 font-bold hover:text-gray-300">
              CLOSE <X size={24} />
            </button>
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <iframe 
                src={`${selectedVideo.videoUrl}?autoplay=1`} 
                className="w-full h-full border-none" 
                allow="autoplay; fullscreen" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-20 text-center border-t border-gray-100 bg-white">
        <p className="text-gray-400 text-[10px] font-black tracking-[0.3em] uppercase">© 2026 DAHEEN LEE. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}