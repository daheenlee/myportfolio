'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowLeft, Play, Monitor } from 'lucide-react';

export default function VideoPortfolio() {
  const [selectedVideo, setSelectedVideo] = useState<any>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
      description: '아티스트의 숨겨진 매력을 이끌어내는 인터뷰 시리즈 기획 및 제작. 2인 제작 시스템으로 운영하며 전 프로세스를 경험했습니다.',
      thumbnail: '/images/videosum.png',
      videoUrl: 'https://www.youtube.com/embed/LMDnt3sv0kw',
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
        { id: 31, title: '숏폼 #1', thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=800&fit=crop', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { id: 32, title: '숏폼 #2', thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=800&fit=crop', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { id: 33, title: '숏폼 #3', thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=600&h=800&fit=crop', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
        { id: 34, title: '숏폼 #4', thumbnail: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=600&h=800&fit=crop', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black relative overflow-x-hidden">
      {/* Mouse Effect */}
      <div 
        className="fixed w-8 h-8 rounded-full bg-blue-500 opacity-20 pointer-events-none z-[100] mix-blend-multiply blur-md hidden md:block"
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px`, transform: 'translate(-50%, -50%)' }}
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 h-20">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <h1 className="text-xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">DAHEEN</h1>
          </Link>
          <div className="hidden md:flex items-center gap-10 text-sm font-bold text-gray-500">
            {['홈', '자기소개', '웹디자인', '영상편집'].map((name) => (
              <Link key={name} href={name === '홈' ? '/' : `/${name === '자기소개' ? 'profile' : name === '웹디자인' ? 'webdesign' : 'video'}`}>
                <span className="hover:text-black transition-colors cursor-pointer">{name}</span>
              </Link>
            ))}
          </div>
          <button className="hidden md:block px-6 py-2.5 bg-black text-white text-sm font-bold rounded-full">Contact Me</button>
        </div>
      </nav>

      {/* Hero Header */}
      <header className="max-w-7xl mx-auto px-6 pt-52 pb-20">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 uppercase leading-none">
          VIDEO<br/><span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Editing</span>
        </h2>
        <p className="text-gray-500 text-xl font-medium">영상편집 작업물입니다.</p>
      </header>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-6 pb-40">
        <div className="flex flex-col gap-60">
          
          {/* [섹션 1] 메인 영상 카테고리 */}
          <div className="space-y-24">
            {/* 섹션 1 상단: 전체 카테고리 설명 (숏폼 상단과 통일) */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-4xl font-black text-gray-100 italic">01-02</span>
                <span className="h-px flex-1 bg-gray-100"></span>
              </div>
              <h3 className="text-4xl font-black tracking-tight uppercase italic">Main Video Projects</h3>
              <p className="text-lg text-gray-600 max-w-2xl">상업 광고 및 아티스트 인터뷰 등 기획력이 돋보이는 메인 영상 리스트입니다.</p>
            </div>

            {/* [섹션 1-1] 영상 1, 2 (가로 정렬: 영상 좌 / 설명 우) */}
            <div className="space-y-40 pt-10">
              {videoProjects.filter(v => v.id !== 3).map((video, index) => (
                <div key={video.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group">
                  {/* 왼쪽: 영상 카드 */}
                  <div className="lg:col-span-7 relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl cursor-pointer bg-gray-100" onClick={() => setSelectedVideo(video)}>
                    <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                        <Play size={32} fill="black" className="ml-1" />
                      </div>
                    </div>
                  </div>
                  {/* 오른쪽: 개별 설명 */}
                  <div className="lg:col-span-5 space-y-6">
                    <h4 className="text-3xl font-black tracking-tight uppercase italic">{video.title}</h4>
                    <p className="text-lg text-gray-600 leading-relaxed">{video.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {video.tags.map((tag, i) => (
                        <span key={i} className="px-4 py-1.5 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-black text-gray-400 uppercase">{tag}</span>
                      ))}
                    </div>
                    <button onClick={() => setSelectedVideo(video)} className="flex items-center gap-3 text-sm font-black hover:text-blue-600 uppercase tracking-widest pt-4">
                      Watch Project <Monitor size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* [섹션 2] 숏폼 카테고리 (상하 배치) */}
          <div className="space-y-16 pt-20 border-t border-gray-100">
            {videoProjects.filter(v => v.id === 3).map((video) => (
              <div key={video.id} className="space-y-12">
                {/* 섹션 2 상단: 전체 카테고리 설명 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-black text-gray-100 italic">03</span>
                    <span className="h-px flex-1 bg-gray-100"></span>
                  </div>
                  <h3 className="text-4xl font-black tracking-tight uppercase italic">{video.title}</h3>
                  <p className="text-lg text-gray-600 max-w-2xl">{video.description}</p>
                </div>
                {/* 하단: 숏폼 4개 가로 배열 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {video.shorts?.map((short) => (
                    <div key={short.id} onClick={() => setSelectedVideo(short)} className="group relative aspect-[9/16] rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-gray-100">
                      <img src={short.thumbnail} alt={short.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex flex-col items-center justify-center">
                        <Play size={24} fill="white" className="text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="text-white text-[10px] font-black tracking-[0.2em] uppercase">숏폼이미지</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4 md:p-12" onClick={() => setSelectedVideo(null)}>
          <div className="w-full max-w-6xl aspect-video bg-black rounded-3xl overflow-hidden relative shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedVideo(null)} className="absolute -top-12 right-0 text-white flex items-center gap-2 font-bold hover:text-gray-300 transition-colors">CLOSE <X size={24} /></button>
            <iframe src={selectedVideo.videoUrl} className="w-full h-full" allow="autoplay; fullscreen" allowFullScreen></iframe>
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