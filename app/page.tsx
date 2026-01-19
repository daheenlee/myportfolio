'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { X, ChevronDown, Mail, Github, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

// 1. 비디오 슬라이더 컴포넌트
function VideoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const videos = [
    {
      id: 1,
      title: '아티스트 인터뷰 영상(1)',
      description: `아티스트의 인터뷰 시리즈 기획 및 제작. 2인 제작 시스템으로 운영하며, 기획 단계의 질문지 구성부터 촬영 현장 총괄, 최종 편집까지 제작 전 프로세스를 경험하며 효율적인 콘텐츠 생산 구조를 확립했습니다.`,
      videoUrl: 'https://www.youtube.com/embed/LMDnt3sv0kw',
      thumbnail: '/images/videosum.png',
      tags: ['Premiere Pro', 'After Effects'],
      year: '2024'
    },
    {
      id: 2,
      title: '아티스트 인터뷰 영상(2)',
      description: '아티스트의 인터뷰 시리즈 기획 및 제작. 2인 제작 시스템으로 운영하며 제작 전 프로세스를 경험하며 효율적인 콘텐츠 생산 구조를 확립했습니다.',
      thumbnail: '/images/maxresdefault.jpg',
      videoUrl: 'https://www.youtube.com/embed/dX1yy4OF3s',
      tags: ['Premiere Pro', 'After Effects'],
      year: '2024'
    },
    {
      id: 3,
      title: '아티스트 연주 영상',
      description: '아티스트의 연주 영상을 작업했습니다.',
      thumbnail: '/images/music_02.png',
      videoUrl: 'https://www.youtube.com/embed/bO6s7UBhJd0',
      tags: ['Premiere Pro', 'After Effects'],
      year: '2024'
    },
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % videos.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  const currentVideo = videos[currentSlide];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* 왼쪽: 슬라이더 이미지 영역 */}
      <div className="relative">
        <div 
          onClick={() => setShowModal(true)} 
          className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-lg group cursor-pointer"
        >
          <img src={currentVideo.thumbnail} alt={currentVideo.title} className="w-full h-full object-cover transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
            <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-l-[24px] border-l-black border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent ml-2"></div>
            </div>
          </div>

          <button onClick={(e) => { e.stopPropagation(); prevSlide(); }} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white z-10 shadow-md">
            <ChevronLeft size={20} className="text-black" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); nextSlide(); }} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white z-10 shadow-md">
            <ChevronRight size={20} className="text-black" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {videos.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`h-2 rounded-full transition-all ${index === currentSlide ? 'w-8 bg-black' : 'w-2 bg-gray-300'}`} />
          ))}
        </div>
      </div>

      {/* 오른쪽: 텍스트 설명 영역 */}
      <div className="space-y-6">
        <div className="text-sm text-gray-500 font-medium">{currentVideo.year} · Video {currentSlide + 1}/{videos.length}</div>
        <h3 className="text-3xl md:text-4xl font-bold">{currentVideo.title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed">{currentVideo.description}</p>
        <div className="flex flex-wrap gap-3 mb-6">
          {currentVideo.tags.map((tag, i) => (
            <span key={i} className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm">{tag}</span>
          ))}
        </div>
        <Link href="/video">
          <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105 font-semibold inline-flex items-center gap-2">
            영상 자세히 보기 <ArrowRight size={20} />
          </button>
        </Link>
      </div>

      {/* 영상 팝업 모달 */}
      {showModal && (
        <div className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="relative w-full max-w-5xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShowModal(false)} className="absolute -top-10 right-0 text-white font-bold text-lg">CLOSE ✕</button>
            <iframe src={`${currentVideo.videoUrl}?autoplay=1`} className="w-full h-full rounded-xl shadow-2xl" allow="autoplay; encrypted-media" allowFullScreen />
          </div>
        </div>
      )}
    </div>
  );
}

// 2. 마우스 효과 컴포넌트
function MouseEffect() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{ background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)` }}
    />
  );
}

// 3. 메인 포트폴리오 페이지 컴포넌트
export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: any) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-black overflow-x-hidden">
      <MouseEffect />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2 group">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <h1 className="text-xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">DAHEEN</h1>
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {[{ name: '홈', href: '/' }, { name: '자기소개', href: '/profile' }, { name: '웹디자인', href: '/webdesign' }, { name: '영상편집', href: '/video' }].map((item) => (
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

            {/* 모바일 토글 */}
            <button className="md:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <div className="space-y-1"><div className="w-6 h-0.5 bg-black"></div><div className="w-6 h-0.5 bg-black"></div><div className="w-6 h-0.5 bg-black"></div></div>}
            </button>
          </div>
        </div>
        
        {/* 모바일 메뉴 드롭다운 */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 pb-6 pt-4 px-4 space-y-2">
            {[{ name: '홈', href: '/' }, { name: '자기소개', href: '/profile' }, { name: '웹디자인', href: '/webdesign' }, { name: '영상편집', href: '/video' }].map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                <div className="block py-3 px-4 text-gray-600 font-bold hover:bg-gray-50 rounded-lg">{item.name}</div>
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="intro" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-8 tracking-tight">
            WEB DESIGNER <br />
            <span className="bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 bg-clip-text text-transparent">Daheen Lee</span>
          </h1>
            <div className="bg-blue-50 py-2 px-4 text-center md:hidden mb-12">
            <p className="text-xs font-bold text-blue-600 tracking-tight">
              📢 현재 모바일 최적화 작업 중입니다. <br />
              더 디테일한 디자인 확인을 위해 <span className="underline uppercase italic">PC 환경</span>을 권장드려요!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => scrollToSection('web')} className="px-8 py-4 bg-black text-white rounded-full hover:scale-110 transition-all font-semibold">프로젝트 보기</button>
            <Link href="/profile"><button className="px-8 py-4 border-2 border-black rounded-full hover:bg-black hover:text-white transition-all font-semibold">자기소개</button></Link>
          </div>
        </div>
        <button onClick={() => scrollToSection('web')} className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-black"><ChevronDown size={40} /></button>
      </section>

      {/* Web Design Section */}
      <section id="web" className="min-h-screen py-32 px-4 md:px-16 relative bg-gray-50/50">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl md:text-7xl font-black mb-20 italic">
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">01.</span> Web Design
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100">
              <img src="https://static.wixstatic.com/media/5dcbb6_59d55c825f284fceb5e351c87884bf1c~mv2.png/v1/fill/w_953,h_743,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dcbb6_59d55c825f284fceb5e351c87884bf1c~mv2.png" alt="Web Design" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">Professional Works</h3>
              <p className="text-lg text-gray-600">기업 재직 중 수행한 실무 프로젝트 모음입니다.</p>
              <div className="flex gap-3">
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm">Photoshop</span>
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm">Illustrator</span>
              </div>
              <Link href="/webdesign">
                <button className="px-8 py-4 bg-black text-white rounded-full hover:scale-105 transition-all font-semibold flex items-center gap-2">자세히 보기 <ArrowRight size={20}/></button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="min-h-screen py-32 px-4 md:px-16 relative">
        <div className="max-w-7xl mx-auto w-full">
       <h2 className="text-5xl md:text-7xl font-black mb-20 italic">
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">02.</span> Video Editing
          </h2>
          <VideoSlider />
        </div>
      </section>

      {/* Contact Section */}
<section id="contact" className="min-h-[70vh] flex flex-col items-center justify-center bg-black text-white px-4 pt-20 pb-10">
  <h2 className="text-6xl md:text-9xl font-black mb-8 text-center tracking-tighter">
    LET'S WORK<br/>
    <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">TOGETHER</span>
  </h2>
  
  <div className="flex gap-6 mb-6"> {/* mb-12에서 mb-6으로 줄임 */}
    <a 
      href="mailto:daheen0823@gmail.com" 
      className="p-4 bg-white rounded-full hover:scale-125 transition-all text-black"
    >
      <Mail size={32} />
    </a>

    <a 
      href="https://github.com/daheenlee" 
      target="_blank" 
      className="p-4 bg-white rounded-full hover:scale-125 transition-all text-black"
    >
      <Github size={32} />
    </a>
  </div>
</section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-400 bg-black border-t border-white/10">
        <p>© 2026 Daheen Lee. All rights reserved.</p>
      </footer>
    </div>
  );
}
