'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowLeft, Play, ChevronDown, Monitor, Film, Share2 } from 'lucide-react';

export default function VideoPortfolio() {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 마우스 효과 로직 (메인과 동일)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

const videoProjects = [
  {
    id: 1,
    title: '아티스트 인터뷰 영상(1)',
    category: 'Motion Graphics',
  
    videoUrl:  'https://www.youtube.com/embed/LMDnt3sv0kw ',
    thumbnail: '/images/videosum.png',
      videourl: 'https://www.youtube.com/embed/LMDnt3sv0kw ', // 실제 영상 임베드 주소
      tags: ['After Effects', 'Premiere Pro', 'Cinema 4D'],
      year: '2024'
    },
    {
      id: 2,
      title: '제품 소개 영상',
      category: 'Product Film',
      description: '신제품의 특징과 장점을 효과적으로 전달하는 소개 영상입니다. 클린하고 모던한 편집 스타일로 제작했습니다.',
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=800&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      tags: ['Color Grading', 'Sound Design'],
      year: '2024'
    },
 {
      id: 3,
      title: 'SNS 숏폼 콘텐츠',
      category: 'Viral Video',
      description: '소셜 미디어를 위한 15초 숏폼 영상 시리즈입니다. 빠른 템포와 임팩트 있는 편집이 특징입니다.',
      thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&h=800&fit=crop',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      tags: ['TikTok', 'Instagram Reels', 'Fast Cut'],
      year: '2023',
      shorts: [
        {
          id: 31,
          title: '숏폼 #1',
          thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=800&fit=crop',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        {
          id: 32,
          title: '숏폼 #2',
          thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=800&fit=crop',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        {
          id: 33,
          title: '숏폼 #3',
          thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=800&fit=crop',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        },
        {
          id: 34,
          title: '숏폼 #4',
          thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=800&fit=crop',
          videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black relative overflow-x-hidden">
      {/* Mouse Effect */}
      <div 
        className="fixed w-8 h-8 rounded-full bg-blue-500 opacity-20 pointer-events-none z-[100] mix-blend-multiply blur-md transition-transform duration-100 hidden md:block"
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px`, transform: 'translate(-50%, -50%)' }}
      />
      
      {/* Navigation (하나로 통일 및 디자인 개선) */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                  <Link href="/" className="flex items-center gap-2 group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    <h1 className="text-xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                      DAHEEN
                    </h1>
                  </Link>
      
                  <div className="hidden md:flex items-center gap-10">
                    {[
                      { name: '홈', href: '/' },
                      { name: '자기소개', href: '/profile' },
                      { name: '웹디자인', href: '/webdesign' },
                      { name: '영상편집', href: '/video' }
                    ].map((item) => (
                      <Link key={item.name} href={item.href}>
                        <span className="text-sm font-bold text-gray-500 hover:text-black transition-colors relative group cursor-pointer">
                          {item.name}
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full"></span>
                        </span>
                      </Link>
                    ))}
                  </div>
      
                  <button className="hidden md:block px-6 py-2.5 bg-black text-white text-sm font-bold rounded-full hover:bg-gray-800 transition-all hover:scale-105">
                    Contact Me
                  </button>
                </div>
              </div>
            </nav>
      
      {/* Hero Section */}
       <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-52 pb-20">
       <header className="max-w-7xl mx-auto px-6 pt-10 pb-20 flex flex-col items-start">
         <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6  uppercase leading-none text-left">
    VIDEO<br/>
    <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent text-left">
      Editing
    </span>
  </h2>
          <p className="text-gray-500 text-xl font-medium max-w-2xl leading-relaxed">
            영상편집 작업물입니다.
          </p>
        </header>
      </div>

      {/* Video Grid Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-40">
        <div className="grid grid-cols-1 gap-24">
          {videoProjects.map((video, index) => (
            <div key={video.id} className="group grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* 왼쪽: 영상 썸네일 카드 */}
              <div 
                className="lg:col-span-7 relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer bg-gray-100"
                onClick={() => setSelectedVideo(video)}
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                    <Play size={32} fill="black" className="ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8 text-white">
                  <span className="text-xs font-black tracking-[0.2em] uppercase opacity-80">{video.category}</span>
                </div>
              </div>

              {/* 오른쪽: 영상 설명 */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black text-gray-100 italic">{(index + 1).toString().padStart(2, '0')}</span>
                  <span className="h-px flex-1 bg-gray-100"></span>
                </div>
                <h3 className="text-4xl font-black tracking-tight uppercase italic">{video.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {video.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {video.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-black text-gray-400 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => setSelectedVideo(video)}
                  className="flex items-center gap-3 text-sm font-black hover:text-blue-600 transition-colors pt-4 uppercase tracking-widest"
                >
                  Watch Project <Monitor size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl relative"
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-16 right-0 text-white flex items-center gap-2 font-bold hover:text-gray-400 transition-colors"
            >
              CLOSE <X size={24} />
            </button>
            
            <iframe 
              src={selectedVideo.videoUrl}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-20 text-center border-t border-gray-100 bg-white">
        <p className="text-gray-400 text-[10px] font-black tracking-[0.3em] uppercase">
          © 2026 DAHEEN LEE. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}