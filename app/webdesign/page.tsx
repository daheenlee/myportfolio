'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { ExternalLink, X, ArrowLeft } from 'lucide-react';

import { companyAProjects, companyBProjects, Project } from '../data/projectsData';

export default function WebDesign() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<'thumbnail' | 'detail'>('thumbnail');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // 마우스 및 스크롤 이벤트
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getTabImages = () => {
    if (!selectedProject) return [];
    return activeTab === 'thumbnail' 
      ? selectedProject.thumbnailImages 
      : selectedProject.detailImages;
  };

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
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white text-black relative overflow-x-hidden">
      {/* 마우스 효과 */}
      <div 
        className="fixed w-8 h-8 rounded-full bg-blue-500 opacity-20 pointer-events-none z-[100] mix-blend-multiply blur-md transition-transform duration-100 hidden md:block"
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px`, transform: 'translate(-50%, -50%)' }}
      />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-2 group text-black decoration-0 no-underline">
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <h1 className="text-xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                DAHEEN
              </h1>
            </Link>

            <div className="hidden md:flex items-center gap-10">
              {['홈', '자기소개', '웹디자인', '영상편집'].map((name, i) => (
                <Link key={name} href={['/', '/profile', '/webdesign', '/video'][i]}>
                  <span className="text-sm font-bold text-gray-500 hover:text-black transition-colors relative group cursor-pointer">
                    {name}
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
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-52">
        <header className="pb-20 flex flex-col items-start">
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-6  uppercase leading-none text-left">
            WEB <br/><span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">DESIGN</span>
          </h2>
          <p className="text-gray-500 text-xl font-medium max-w-2xl leading-relaxed">
            기업 재직 중 수행한 상품 상세페이지, 프로모션 디자인 프로젝트 결과물입니다.
          </p>
        </header>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* 섹션 1: 핸드폰 용품 */}
      <section className="mb-40">
  {/* 큰 섹션 제목 */}
  <div className="flex items-baseline gap-4 mb-20 border-b border-gray-100 pb-6">
    <span className="text-4xl bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent font-black">01</span>
    <h3 className="text-2xl font-bold tracking-tight">
      핸드폰용품 제작회사 <span className="text-black-400 font-light ml-2">| 제품 상세페이지</span>
    </h3>
  </div>
  <div className="mb-32">
    <h4 className="text-xl font-black text-blue-500 mb-8 tracking-tighter">2021 PROJECTS</h4>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
      {/* 2021년 프로젝트만 출력 */}
      {companyAProjects.filter(p => p.year === 2021).map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  </div>
</section>

        {/* 섹션 2: B Company - 연도별 섹션 */}
        <section className="mb-40">
          <div className="flex items-baseline gap-4 mb-20 border-b border-gray-100 pb-6">
<span className="text-4xl bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent font-black">02</span>
            <h3 className="text-2xl font-bold tracking-tight">
              B Company <span className="text-black-400 font-light ml-2">| 프로모션 & 디자인</span>
            </h3>
          </div>

          {/* 연도별 렌더링 */}
          {[2022, 2023, 2024, 2025].map((year) => {
            const projects = companyBProjects.filter(p => p.year === year);
            if (projects.length === 0) return null;
            return (
              <div key={year} className="mb-32">
                <h4 className="text-xl font-black text-blue-500 mb-8 tracking-tighter">{year} PROJECTS</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
                  {projects.map((p) => (
                    <ProjectCard key={p.id} project={p} />
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </div>

      {/* 모달 창 */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100] flex items-center justify-center p-4 md:p-8" onClick={() => setSelectedProject(null)}>
          <div className="max-w-6xl w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl h-full max-h-[92vh] flex flex-col relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-20 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <X size={24} />
            </button>

            <div className="p-10 border-b border-gray-100 bg-white">
              <div className="flex justify-between items-end">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 bg-blue-50 text-blue-600 font-bold text-[10px] uppercase tracking-widest rounded-md">
                      {selectedProject.company}
                    </span>
                  </div>
                  <h3 className="text-4xl font-black tracking-tight italic uppercase">{selectedProject.title}</h3>
                </div>
                <div className="flex gap-4 mb-1">
                  {(['thumbnail', 'detail'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest transition-all ${
                        activeTab === tab ? 'bg-black text-white shadow-2xl scale-105' : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                      }`}
                    >
                      {tab === 'thumbnail' ? '썸네일' : '상세페이지'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-10 bg-gray-50/50">
              <div className="max-w-4xl mx-auto space-y-8 flex flex-col items-center">
                {getTabImages().map((img: string, idx: number) => (
                  <img 
                    key={idx} 
                    src={img} 
                    alt="content" 
                    className={`rounded-2xl shadow-lg border border-gray-200 object-cover ${
                      activeTab === 'thumbnail' ? 'w-[600px] h-[600px]' : 'w-full h-auto'
                    }`} 
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="py-20 text-center border-t border-gray-100 bg-white">
        <p className="text-gray-400 text-[10px] font-black tracking-[0.3em] uppercase">
          © 2026 DAHEEN LEE. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </div>
  );
}
