'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDown, Mail, Github, Linkedin, ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

function VideoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const videos = [
    {
      id: 1,
      title: '아티스트 인터뷰 영상(1)',
      description: `아티스트의 숨겨진 매력을 이끌어내는 인터뷰 시리즈 기획 및 제작.
2인 제작 시스템으로 운영하며, 기획 단계의 질문지 구성부터 촬영 현장 총괄,
최종 편집까지 제작 전 프로세스를 경험하며 효율적인 콘텐츠 생산 구조를 확립했습니다.`,
      thumbnail: '/images/videosum.png',
      tags: [ 'Premiere Pro', 'After Effects'],
      year: '2024'
    },
    {
      id: 2,
      title: '제품 소개 영상',
      description: '신제품의 특징과 장점을 효과적으로 전달하는 소개 영상입니다. 클린하고 모던한 편집 스타일로 제작했습니다.',
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=800&fit=crop',
      tags: ['Product Video', 'Color Grading', 'Sound Design'],
      year: '2024'
    },
    {
      id: 3,
      title: '기업 홍보 영상',
      description: '회사의 비전과 가치를 담은 홍보 영상입니다. 감성적인 스토리텔링과 고퀄리티 영상미를 추구했습니다.',
      thumbnail: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1200&h=800&fit=crop',
      tags: ['Corporate', 'Storytelling', 'Cinematography'],
      year: '2023'
    },
    {
      id: 4,
      title: 'SNS 숏폼 콘텐츠',
      description: '소셜 미디어를 위한 15초 숏폼 영상 시리즈입니다. 빠른 템포와 임팩트 있는 편집이 특징입니다.',
      thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&h=800&fit=crop',
      tags: ['Short Form', 'Social Media', 'Viral Content'],
      year: '2023'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const currentVideo = videos[currentSlide];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-lg group">
          <img 
            src={currentVideo.thumbnail}
            alt={currentVideo.title}
            className="w-full h-full object-cover transition-transform duration-500"
          />
          
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
            <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-l-[24px] border-l-black border-t-[16px] border-t-transparent border-b-[16px] border-b-transparent ml-2"></div>
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
          >
            <ChevronLeft size={24} className="text-black" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg"
          >
            <ChevronRight size={24} className="text-black" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'w-8 bg-black' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="text-sm text-gray-500 font-medium">
          {currentVideo.year} · Video {currentSlide + 1}/{videos.length}
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold">
          {currentVideo.title}
        </h3>
        
        <p className="text-lg text-gray-600 leading-relaxed">
          {currentVideo.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mb-6">
          {currentVideo.tags.map((tag, i) => (
            <span 
              key={i}
              className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <a href="/video" className="inline-block">
          <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105 font-semibold inline-flex items-center gap-2">
            영상 자세히 보기
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
}

function MouseEffect() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      }}
    />
  );
}

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id:string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white text-black overflow-x-hidden">
      <MouseEffect />

      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent cursor-pointer">
                Daheen Lee
              </h1>
            </a>

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

            {/* 모바일 메뉴 버튼 */}
            <button 
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* 모바일 메뉴 드롭다운 */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 pt-2 border-t border-gray-700">
              <div className="flex flex-col gap-3">
                <a href="/" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-colors">
                    홈
                  </button>
                </a>
                <a href="/profile" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-colors">
                    자기소개
                  </button>
                </a>
                <a href="/webdesign" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-colors">
                    웹디자인
                  </button>
                </a>
                <a href="/video" onClick={() => setMobileMenuOpen(false)}>
                  <button className="w-full text-left px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg font-medium transition-colors">
                    영상편집
                  </button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="intro" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div 
            className="absolute w-96 h-96 rounded-full blur-3xl opacity-40 animate-float"
            style={{
              background: 'radial-gradient(circle, rgba(59,130,246,0.8) 0%, rgba(59,130,246,0.3) 50%, transparent 70%)',
              top: '10%',
              left: '10%',
              animationDelay: '0s'
            }}
          />
          <div 
            className="absolute w-80 h-80 rounded-full blur-3xl opacity-35 animate-float"
            style={{
              background: 'radial-gradient(circle, rgba(34,197,94,0.8) 0%, rgba(34,197,94,0.3) 50%, transparent 70%)',
              top: '60%',
              right: '15%',
              animationDelay: '2s'
            }}
          />
          <div 
            className="absolute w-72 h-72 rounded-full blur-3xl opacity-30 animate-float"
            style={{
              background: 'radial-gradient(circle, rgba(14,165,233,0.8) 0%, rgba(14,165,233,0.3) 50%, transparent 70%)',
              bottom: '15%',
              left: '20%',
              animationDelay: '4s'
            }}
          />
          <div 
            className="absolute w-64 h-64 rounded-full blur-3xl opacity-35 animate-float"
            style={{
              background: 'radial-gradient(circle, rgba(16,185,129,0.8) 0%, rgba(16,185,129,0.3) 50%, transparent 70%)',
              top: '40%',
              right: '40%',
              animationDelay: '1s'
            }}
          />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-8 tracking-tight">
            WEB DESIGNER
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 bg-clip-text text-transparent">
              Daheen Lee
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            본 포트폴리오는 고해상도 데스크탑 환경에 최적화되어 있습니다.<br/>더 깊이 있는 시각적 경험을 위해 PC 방문을 권장하며, 모바일 최적화는 현재 진행 중입니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/webdesign">
              <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-110 font-semibold">
                프로젝트 보기
              </button>
            </a>
            <a href="/profile">
              <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-110 font-semibold">
                자기소개
              </button>
            </a>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all hover:scale-110 font-semibold"
            >
              연락하기
            </button>
          </div>
        </div>

        <button 
          onClick={() => scrollToSection('web')}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-black"
        >
          <ChevronDown size={40} />
        </button>
      </section>

      {/* Web Design Section */}
      <section id="web" className="min-h-screen py-32 px-4 md:px-16 relative flex items-center">
        <div 
          className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>

        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl md:text-7xl font-bold mb-20">
            <span className="text-green-700">01.</span> Web Design
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
              <img 
                src="https://static.wixstatic.com/media/5dcbb6_59d55c825f284fceb5e351c87884bf1c~mv2.png/v1/fill/w_953,h_743,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/5dcbb6_59d55c825f284fceb5e351c87884bf1c~mv2.png"
                alt="제품 상세이미지/프로모션 이미지"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">
                Professional Works
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                기업 재직 중 수행한 실무 프로젝트 모음.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm">
                  Photoshop
                </span>
                <span className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm">
                  Illustrator
                </span>
              </div>

              <a href="/webdesign">
                <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-105 font-semibold inline-flex items-center gap-2">
                  자세히 보기
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="min-h-screen py-32 px-4 md:px-16 relative flex items-center">
        <div 
          className="absolute top-1/2 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-20"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        ></div>

        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-5xl md:text-7xl font-bold mb-20">
            <span className="text-green-700">02.</span> Video Editing
          </h2>

          <VideoSlider />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 relative bg-gradient-to-b from-white to-gray-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="text-center relative z-10">
          <h2 className="text-6xl md:text-8xl font-bold mb-8">
            Let's Work
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            프로젝트 의뢰나 협업 제안을 기다립니다
          </p>

          <div className="flex gap-6 justify-center mb-12">
            <a href="mailto:your-email@example.com" className="p-4 bg-black/10 hover:bg-black/20 rounded-full transition-all hover:scale-110">
              <Mail size={32} className="text-black" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="p-4 bg-black/10 hover:bg-black/20 rounded-full transition-all hover:scale-110">
              <Github size={32} className="text-black" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="p-4 bg-black/10 hover:bg-black/20 rounded-full transition-all hover:scale-110">
              <Linkedin size={32} className="text-black" />
            </a>
          </div>

          <a href="mailto:your-email@example.com" className="px-12 py-5 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-110 font-bold text-lg flex items-center gap-2 mx-auto w-fit">
            이메일 보내기
            <ArrowRight size={24} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 border-t border-gray-200 bg-white">
        <p>© 2026 Daheen Lee. All rights reserved.</p>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(40px, 10px) scale(1.05); }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}