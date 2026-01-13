'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Mail, 
  Github, 
  Linkedin, 
  Award, 
  Briefcase, 
  GraduationCap 
} from 'lucide-react';

export default function About() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const skillsRef = useRef<HTMLElement>(null);

  // 1. 하이드레이션 오류 방지: 마운트 확인
  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    { name: 'Photoshop', level: 95 },
    { name: 'Illustrator', level: 90 },
    { name: 'InDesign', level: 85 },
    { name: 'HTML/CSS', level: 80 },
    { name: 'Premiere Pro', level: 50 },
    { name: 'Figma', level: 20 },
  ];

  const experience = [
    {
      year: '2023 - Present',
      title: '시니어 웹 디자이너',
      company: '회사명',
      description: '웹사이트 및 모바일 앱 UI/UX 디자인 담당'
    },
    {
      year: '2021 - 2023',
      title: '웹 디자이너',
      company: '이전 회사명',
      description: '브랜드 아이덴티티 및 웹 디자인 프로젝트 수행'
    },
    {
      year: '2019 - 2021',
      title: '주니어 디자이너',
      company: '스타트업',
      description: '다양한 디자인 업무 경험'
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, [mounted]);

  // 마운트 전에는 아무것도 렌더링하지 않음 (Hydration Error 방지 핵심)
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white text-black relative overflow-x-hidden">
      {/* Mouse Effect */}
      <div 
        className="fixed w-8 h-8 rounded-full bg-blue-500 opacity-30 pointer-events-none z-50 mix-blend-multiply blur-sm transition-transform duration-100"
        style={{ 
          left: `${mousePosition.x}px`, 
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
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
      <section className="pt-48 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-10"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <img 
              src="https://avatars.githubusercontent.com/u/213527878?v=4"
              alt="Profile"
              className="w-48 h-48 rounded-full object-cover flex-shrink-0 shadow-2xl border-4 border-white"
            />
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Daheen Lee
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-6 font-medium">
                Web Designer & UI/UX Specialist
              </p>
              <p className="text-gray-700 leading-relaxed mb-8 text-lg">
                안녕하세요! 5년 차 웹 디자이너 이다힌입니다. 
                사용자 중심의 디자인으로 더 나은 디지털 경험을 만들어가고 있습니다.
              </p>
              
              <div className="flex justify-center md:justify-start gap-4">
                <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-full transition-all hover:scale-110 border border-gray-100">
                  <Mail size={22} className="text-gray-700" />
                </button>
                <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-full transition-all hover:scale-110 border border-gray-100">
                  <Github size={22} className="text-gray-700" />
                </button>
                <button className="p-3 bg-gray-50 hover:bg-gray-100 rounded-full transition-all hover:scale-110 border border-gray-100">
                  <Linkedin size={22} className="text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-16">
            <Award size={32} className="text-blue-600" />
            <h3 className="text-3xl font-bold tracking-tight">Technical Skills</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <div key={i} className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between mb-4">
                  <span className="font-bold text-gray-800">{skill.name}</span>
                  <span className="text-blue-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-green-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-16">
            <Briefcase size={32} className="text-green-600" />
            <h3 className="text-3xl font-bold tracking-tight">Work Experience</h3>
          </div>
          
          <div className="space-y-10">
            {experience.map((exp, i) => (
              <div key={i} className="relative pl-10 border-l-2 border-gray-100 pb-2 last:pb-0">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-green-500"></div>
                <div className="bg-gray-50/50 p-8 rounded-2xl border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <span className="text-sm text-blue-600 font-bold uppercase tracking-wider">{exp.year}</span>
                  <h4 className="text-2xl font-bold mt-2 mb-1">{exp.title}</h4>
                  <p className="text-gray-500 font-medium mb-4">{exp.company}</p>
                  <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 text-center bg-black text-white rounded-t-[3rem]">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Let's create something <br />
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">extraordinary.</span>
          </h3>
          <p className="text-xl text-gray-400 mb-12">
            새로운 프로젝트나 협업 기회에 대해 언제든 환영합니다.
          </p>
          <button className="px-12 py-5 bg-white text-black rounded-full hover:bg-gray-200 transition-all hover:scale-110 font-black text-lg shadow-2xl">
            GET IN TOUCH
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 bg-black border-t border-gray-900">
        <p className="text-sm tracking-widest font-medium">© 2026 DAHEEN LEE. DESIGNED WITH PASSION.</p>
      </footer>
    </div>
  );
}