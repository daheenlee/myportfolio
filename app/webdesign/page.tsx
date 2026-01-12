'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import MouseEffect from '../components/MouseEffect';

export default function WebDesign() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // A회사 프로젝트 (3개)
  const companyAProjects = [
    {
      id: 1,
      title: 'A회사 프로젝트 1',
      description: '프로젝트 설명을 여기에',
      year: '2024',
      company: 'A Company',
      role: 'UI/UX Design, Web Design',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      tags: ['Responsive', 'Landing Page']
    },
    {
      id: 2,
      title: 'A회사 프로젝트 2',
      description: '프로젝트 설명을 여기에',
      year: '2024',
      company: 'A Company',
      role: 'Web Design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['Corporate', 'Modern']
    },
    {
      id: 3,
      title: 'A회사 프로젝트 3',
      description: '프로젝트 설명을 여기에',
      year: '2024',
      company: 'A Company',
      role: 'Brand Design',
      image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&h=600&fit=crop',
      tags: ['Branding', 'Web']
    }
  ];

  // B회사 프로젝트 (15개)
  const companyBProjects = Array.from({ length: 15 }, (_, i) => ({
    id: i + 10,
    title: `B회사 프로젝트 ${i + 1}`,
    description: '프로젝트 설명을 여기에 적어주세요',
    year: '2023-2024',
    company: 'B Company',
    role: 'UI/UX Design',
    image: `https://images.unsplash.com/photo-${1467232004584 + i * 1000}?w=800&h=600&fit=crop`,
    tags: ['Design', 'Web']
  }));

  return (
    <div className="min-h-screen bg-white text-black">
      <MouseEffect />
      
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent cursor-pointer">
                Daheen Lee
              </h1>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/">
                <button className="text-gray-700 hover:text-black font-medium transition-colors">
                  홈
                </button>
              </Link>
              <Link href="/about">
                <button className="text-gray-700 hover:text-black font-medium transition-colors">
                  자기소개
                </button>
              </Link>
              <Link href="/webdesign">
                <button className="text-black font-semibold">
                  웹디자인
                </button>
              </Link>
              <Link href="/video">
                <button className="text-gray-700 hover:text-black font-medium transition-colors">
                  영상편집
                </button>
              </Link>
            </div>

            <button className="md:hidden text-black">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Web Design
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mb-4">
            기업 재직 중 수행한 상품 상세페이지 / 프로모션 페이지 입니다.
        
          </p>
        </div>
      </section>

      {/* A회사 섹션 (3개) */}
      <section className="px-4 sm:px-6 lg:px-8 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl md:text-4xl font-bold">
              <span className="text-green-700">핸드폰용품 회사 </span> 제품 상세페이지
            </h3>
            <span className="text-gray-500">3 Projects / 2021년도 작업</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyAProjects.map((project) => (
              <div 
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100 border border-gray-200">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <ExternalLink size={18} className="text-black" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-gray-500">{project.year}</span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">{project.role}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B회사 섹션 (15개) */}
      <section className="px-4 sm:px-6 lg:px-8 pb-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto pt-20">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl md:text-4xl font-bold">
              <span className="text-blue-600">B Company</span> Projects
            </h3>
            <span className="text-gray-500">15 Projects</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyBProjects.map((project) => (
              <div 
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100 border border-gray-200">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <ExternalLink size={18} className="text-black" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-gray-500">{project.year}</span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-500">{project.role}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full aspect-video object-cover"
            />
            <div className="p-8">
              <div className="text-sm text-blue-600 font-semibold mb-2">{selectedProject.company}</div>
              <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
              <div className="flex items-center gap-4 mb-6 text-gray-600">
                <span>{selectedProject.year}</span>
                <span>•</span>
                <span>{selectedProject.role}</span>
              </div>
              <p className="text-gray-700 text-lg mb-6">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag: string, i: number) => (
                  <span 
                    key={i}
                    className="px-4 py-2 bg-gray-100 border border-gray-200 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all font-semibold"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 border-t border-gray-200 bg-white">
        <p>© 2026 Daheen Lee. All rights reserved.</p>
      </footer>
    </div>
  );
}