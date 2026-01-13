'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, X, ArrowLeft, ChevronDown } from 'lucide-react';
// 데이터 경로 확인 필수!
import { companyAProjects, companyBProjects, Project } from '../data/projectsData';

export default function WebDesign() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'thumbnail' | 'detail'>('thumbnail');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 마우스 효과 로직
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 탭에 따른 이미지 가져오기 함수
  const getTabImages = () => {
    if (!selectedProject) return [];
    return activeTab === 'thumbnail' 
      ? selectedProject.thumbnailImages 
      : selectedProject.detailImages;
  };

  // 프로젝트 카드 컴포넌트
  const ProjectCard = ({ project }: { project: Project }) => (
    <div 
      className="group cursor-pointer"
      onClick={() => {
        setSelectedProject(project);
        setActiveTab('thumbnail');
      }}
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-gray-100 border border-gray-200 shadow-sm">
        <img 
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xl">
            <ExternalLink size={20} className="text-black" />
          </div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-gray-400 font-bold uppercase tracking-wider">
          <span>{project.year}</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span>{project.role}</span>
        </div>
        <h4 className="text-xl font-bold group-hover:text-blue-600 transition-colors tracking-tight">
          {project.title}
        </h4>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-bold text-gray-500 uppercase">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-black relative overflow-x-hidden">
      {/* Mouse Effect - 메인과 동일한 스타일 */}
      <div 
        className="fixed w-8 h-8 rounded-full bg-blue-500 opacity-20 pointer-events-none z-[100] mix-blend-multiply blur-md transition-transform duration-100 hidden md:block"
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px`, transform: 'translate(-50%, -50%)' }}
      />
      
      {/* Navigation - 메인 페이지 블랙 헤더와 100% 일치시킴 */}
      <nav className="fixed top-0 left-0 right-0 z-[60] bg-black/95 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          <Link href="/">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">
              Daheen Lee
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
                <span className={`text-xs font-bold transition-colors cursor-pointer uppercase tracking-widest ${item.href === '/webdesign' ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
          <button className="md:hidden text-white"><ChevronDown size={20} /></button>
        </div>
      </nav>

      {/* Hero Section - 메인 페이지의 타이틀 느낌 반영 */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-52 pb-20">
        <header className="max-w-4xl">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 italic uppercase leading-none">
            WEB <br />
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">DESIGN</span>
          </h2>
          <p className="text-gray-500 text-xl font-medium max-w-2xl leading-relaxed">
            기업 재직 중 수행한 상품 상세페이지, 프로모션 디자인 및 브랜드 경험 프로젝트 결과물입니다.
          </p>
        </header>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* 섹션 1: 핸드폰 용품 */}
        <section className="mb-40">
          <div className="flex items-baseline gap-4 mb-12 border-b border-gray-100 pb-6">
            <span className="text-4xl font-black text-gray-100 italic">01</span>
            <h3 className="text-2xl font-bold tracking-tight">
              핸드폰용품 제작회사 <span className="text-gray-400 font-light ml-2">| 제품 상세페이지</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {companyAProjects.map((p: Project) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </section>

        {/* 섹션 2: B Company */}
        <section className="mb-40">
          <div className="flex items-baseline gap-4 mb-12 border-b border-gray-100 pb-6">
            <span className="text-4xl font-black text-gray-100 italic">02</span>
            <h3 className="text-2xl font-bold tracking-tight">
              B Company <span className="text-gray-400 font-light ml-2">| 프로모션 & 디자인</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {companyBProjects.map((p: Project) => <ProjectCard key={p.id} project={p} />)}
          </div>
        </section>
      </div>

      {/* 모달 창 - 디자인 고급화 */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100] flex items-center justify-center p-4 md:p-8" onClick={() => setSelectedProject(null)}>
          <div className="max-w-6xl w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl h-full max-h-[92vh] flex flex-col relative animate-in fade-in zoom-in duration-300" onClick={e => e.stopPropagation()}>
            
            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-20 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-2xl">
              <X size={24} />
            </button>

            {/* 모달 헤더 & 탭 */}
            <div className="p-10 border-b border-gray-100 bg-white">
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-widest rounded-md">{selectedProject.company}</span>
              </div>
              <h3 className="text-4xl font-black mt-2 mb-8 tracking-tight italic uppercase">{selectedProject.title}</h3>
              
              <div className="flex gap-4">
                {(['thumbnail', 'detail'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all ${
                      activeTab === tab 
                      ? 'bg-black text-white shadow-2xl scale-105' 
                      : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                    }`}
                  >
                    {tab === 'thumbnail' ? '썸네일' : '상세페이지'}
                  </button>
                ))}
              </div>
            </div>

            {/* 이미지 영역 */}
            <div className="flex-1 overflow-y-auto p-10 bg-gray-50/50">
              <div className="max-w-4xl mx-auto space-y-8">
                {getTabImages().map((img: string, idx: number) => (
                  <img key={idx} src={img} alt="content" className="w-full h-auto rounded-2xl shadow-lg border border-gray-200" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer - 메인과 동일 */}
      <footer className="py-20 text-center border-t border-gray-100 bg-white">
        <p className="text-gray-400 text-[10px] font-black tracking-[0.3em] uppercase">
          © 2026 DAHEEN LEE. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}