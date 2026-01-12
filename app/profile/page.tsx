'use client';

import { ArrowLeft, Mail, Github, Linkedin, Award, Briefcase, GraduationCap } from 'lucide-react';
import Link from 'next/link';
import MouseEffect from '../components/MouseEffect';

export default function About() {
  const skills = [
    { name: 'Figma', level: 95 },
    { name: 'Adobe XD', level: 90 },
    { name: 'Photoshop', level: 85 },
    { name: 'Illustrator', level: 80 },
    { name: 'HTML/CSS', level: 88 },
    { name: 'React', level: 75 }
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

  return (
    <div className="min-h-screen bg-white text-black">
      <MouseEffect />
      
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/">
            <button className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors">
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </button>
          </Link>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <div className="w-32"></div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        {/* 배경 구체 */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            {/* 프로필 이미지 */}
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-green-500 flex-shrink-0 shadow-2xl"></div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-green-600 bg-clip-text text-transparent">
                  Daheen Lee
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Web Designer & UI/UX Specialist
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                안녕하세요! 5년 차 웹 디자이너 이다힌입니다. 
                사용자 중심의 디자인으로 더 나은 디지털 경험을 만들어가고 있습니다.
                창의적이고 직관적인 인터페이스 디자인을 통해 
                비즈니스 목표와 사용자 니즈를 연결하는 것을 즐깁니다.
              </p>
              
              {/* SNS 아이콘 */}
              <div className="flex justify-center md:justify-start gap-4">
                <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all hover:scale-110">
                  <Mail size={24} className="text-gray-700" />
                </button>
                <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all hover:scale-110">
                  <Github size={24} className="text-gray-700" />
                </button>
                <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-all hover:scale-110">
                  <Linkedin size={24} className="text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Award size={32} className="text-blue-500" />
            <h3 className="text-3xl font-bold">Skills</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-gray-800">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-green-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase size={32} className="text-green-600" />
            <h3 className="text-3xl font-bold">Experience</h3>
          </div>
          
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-gray-200 pb-8 last:pb-0">
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-green-500"></div>
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <span className="text-sm text-gray-500 font-medium">{exp.year}</span>
                  <h4 className="text-xl font-bold mt-2 mb-1">{exp.title}</h4>
                  <p className="text-blue-600 font-semibold mb-3">{exp.company}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap size={32} className="text-blue-500" />
            <h3 className="text-3xl font-bold">Education</h3>
          </div>
          
          <div className="bg-white p-8 rounded-xl border border-gray-200">
            <h4 className="text-2xl font-bold mb-2">디자인 전공</h4>
            <p className="text-blue-600 font-semibold mb-2">대학교명</p>
            <span className="text-gray-500">2015 - 2019</span>
            <p className="text-gray-700 mt-4">
              시각 디자인 및 인터랙션 디자인을 전공하며 
              디지털 미디어에 대한 깊은 이해를 쌓았습니다.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-4xl font-bold mb-6">
            함께 작업하고 싶으신가요?
          </h3>
          <p className="text-xl text-gray-600 mb-8">
            새로운 프로젝트나 협업 기회에 대해 이야기 나눠요!
          </p>
          <Link href="/">
            <button className="px-12 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:scale-110 font-bold text-lg">
              연락하기
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-500 border-t border-gray-200 bg-white">
        <p>© 2026 Daheen Lee. All rights reserved.</p>
      </footer>
    </div>
  );
}