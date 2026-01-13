// app/webdesign/projectsData.tsx

export interface Project {
  id: number;
  title: string;
  description: string;
  year: string;
  company: string;
  role: string;
  image: string; // 카드에 보이는 대표 이미지
  tags: string[];
  thumbnailImages: string[]; // '썸네일' 탭에서 보여줄 이미지들
  detailImages: string[];    // '상세페이지' 탭에서 보여줄 이미지들
}

export const companyAProjects: Project[] = [
  {
    id: 1,
    title: '강화유리 상세페이지',
    description: '핸드폰 강화유리 제품의 특장점을 강조한 상세페이지 및 썸네일 제작.',
    year: '2021',
    company: '핸드폰용품 제작회사',
    role: 'Web Design',
    image: 'https://static.wixstatic.com/media/5dcbb6_be3cd8817d39405387e66012fb561f96~mv2.png/v1/fill/w_350,h_349,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EA%B0%95%ED%99%94%EC%9C%A0%EB%A6%AC%EC%8D%B8%EB%84%A4%EC%9D%BC(10%EB%A7%A4)%20copy10_PNG.png',
    tags: ['Product Page', 'Mobile Accessory'],
    thumbnailImages: [
      'https://static.wixstatic.com/media/5dcbb6_8a73378483bf4feea60b31b10d0c3764~mv2.png/v1/fill/w_352,h_349,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EA%B0%95%ED%99%94%EC%9C%A0%EB%A6%AC%EC%8D%B8%EB%84%A4%EC%9D%BC(5%EB%A7%A4).png',
      'https://static.wixstatic.com/media/5dcbb6_be3cd8817d39405387e66012fb561f96~mv2.png/v1/fill/w_350,h_349,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EA%B0%95%ED%99%94%EC%9C%A0%EB%A6%AC%EC%8D%B8%EB%84%A4%EC%9D%BC(10%EB%A7%A4)%20copy10_PNG.png'
    ],
    detailImages: [
      'https://static.wixstatic.com/media/5dcbb6_82d6706abe8b4409add0232416e15429~mv2.jpg/v1/fill/w_759,h_7586,al_c,q_90,enc_avif,quality_auto/%EA%B0%95%ED%99%94%EC%9C%A0%EB%A6%AC-%EC%83%81%EC%84%B810%EB%A7%A4%EC%9E%85_800.jpg'
    ]
  },
   {
    id: 2,
    title: '강화유리 상세페이지',
    description: '핸드폰 강화유리 제품의 특장점을 강조한 상세페이지 및 썸네일 제작.',
    year: '2021',
    company: '핸드폰용품 제작회사',
    role: 'Web Design',
    image: 'https://static.wixstatic.com/media/5dcbb6_be3cd8817d39405387e66012fb561f96~mv2.png/v1/fill/w_350,h_349,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EA%B0%95%ED%99%94%EC%9C%A0%EB%A6%AC%EC%8D%B8%EB%84%A4%EC%9D%BC(10%EB%A7%A4)%20copy10_PNG.png',
    tags: ['Product Page', 'Mobile Accessory'],
    thumbnailImages: [
      'https://static.wixstatic.com/media/5dcbb6_8a73378483bf4feea60b31b10d0c3764~mv2.png/v1/fill/w_352,h_349,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EA%B0%95%ED%99%94%EC%9C%A0%EB%A6%AC%EC%8D%B8%EB%84%A4%EC%9D%BC(5%EB%A7%A4).png',
      'https://static.wixstatic.com/media/5dcbb6_be3cd8817d39405387e66012fb561f96~mv2.png/v1/fill/w_350,h_349,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/%EA%B0%95%ED%99%94%EC%9C%A0%EB%A6%AC%EC%8D%B8%EB%84%A4%EC%9D%BC(10%EB%A7%A4)%20copy10_PNG.png'
    ],
    detailImages: [
      'https://static.wixstatic.com/media/5dcbb6_82d6706abe8b4409add0232416e15429~mv2.jpg/v1/fill/w_759,h_7586,al_c,q_90,enc_avif,quality_auto/%EA%B0%95%ED%99%94%EC%9C%A0%EB%A6%AC-%EC%83%81%EC%84%B810%EB%A7%A4%EC%9E%85_800.jpg'
    ]
  },
  // 프로젝트 2, 3... 같은 형식으로 추가
];

export const companyBProjects: Project[] = Array.from({ length: 15 }, (_, i) => ({
  id: i + 10,
  title: `B회사 프로젝트 ${i + 1}`,
  description: '프로모션 페이지, 배너, 썸네일, 인스타그램 콘텐츠 제작.',
  year: '2022-2025',
  company: 'B Company',
  role: 'UI/UX Design',
  image: `public/images/23홈레코딩프로모션_sum.png`,
  tags: ['Promotion', 'Social Media'],
  thumbnailImages: [
    `https://images.unsplash.com/photo-${1467232004584 + i * 3000}?w=800&h=800&fit=crop`
  ],
  detailImages: [
    `https://images.unsplash.com/photo-${1467232004584 + i * 1000}?w=1200&h=800&fit=crop`
  ]
}));