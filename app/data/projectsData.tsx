// app/webdesign/projectsData.tsx

export interface Project {
  id: number;
  title: string;
  description: string;
  year: number;
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
    description: '핸드폰 강화유리 상세페이지 및 썸네일 제작.',
    year: 2021,
    company: '핸드폰용품 제작회사',
    role: 'Web Design',
    image: '/images/21_02x5_sum.png',
    tags: ['Product Page', 'Mobile Accessory'],
    thumbnailImages: [
      '/images/21_02x5_sum.png', '/images/21_02x10_sum.png',
    ],
    detailImages: ['/images/hanaglass.png'
      
    ]
  },
   {
    id: 2,
    title: '더블 카드포켓 젤리케이스',
    description: '핸드폰 케이스 상세페이지 및 썸네일 제작.',
    year: 2021,
    company: '핸드폰용품 제작회사',
    role: 'Web Design',
    image: '/images/21_03_sum.jpg',
    tags: ['Product Page', 'Mobile Accessory'],
    thumbnailImages: [
      '/images/21_03_sum.jpg'
    ],
    detailImages: [
      '/images/21_03.jpg'
    ]
  },
  // 프로젝트 2, 3... 같은 형식으로 추가
];

export const companyBProjects: Project[] = [
 
     {
    id: 10,
    title: '2022 블랙세일',
    description: '프로모션 상세페이지 및 썸네일 제작.',
    year: 2022,
    company: '피아노 회사',
    role: 'Web Design',
    image: '/images/22_01_sum.png',
    tags: ['Promotion page'],
    thumbnailImages: [
      '/images/22_01_sum.png'
    ],
    detailImages: [
      '/images/22_01.png'
    ]
  },

       {
    id: 11,
    title: '홈 레코딩',
    description: '프로모션 상세페이지 및 썸네일 제작.',
    year: 2023,
    company: '피아노 회사',
    role: 'Web Design',
    image: '/images/23_01sum.png',
    tags: ['Promotion page'],
    thumbnailImages: [
      '/images/23_01sum.png'
    ],
    detailImages: [
      '/images/23_01.png'
    ]
  },

         {
    id: 12,
    title: '폼 미쳤다',
    description: '프로모션 상세페이지 및 썸네일 제작.',
    year: 2023,
    company: '피아노 회사',
    role: 'Web Design',
    image: '/images/23_02sum.png',
    tags: ['Promotion page'],
    thumbnailImages: [
      '/images/23_02sum.png'
    ],
    detailImages: [
      '/images/23_02.png'
    ]
  },

           {
    id: 13,
    title: '그랜드 리뉴얼 오픈',
    description: '프로모션 상세페이지 및 썸네일 제작.',
    year: 2023,
    company: '피아노 회사',
    role: 'Web Design',
    image: '/images/23_04sum.png',
    tags: ['Promotion page'],
    thumbnailImages: [
      '/images/23_04sum.png'
    ],
    detailImages: [
      '/images/23_04.png'
    ]
  },

             {
    id: 14,
    title: '6월의 선물',
    description: '프로모션 상세페이지 및 썸네일 제작.',
    year: 2023,
    company: '피아노 회사',
    role: 'Web Design',
    image: '/images/23_05sum.png',
    tags: ['Promotion page'],
    thumbnailImages: [
      '/images/23_05sum.png'
    ],
    detailImages: [
      '/images/23_05.png'
    ]
  },

             {
    id: 15,
    title: '신제품 론칭 프로모션',
    description: '프로모션 상세페이지 및 썸네일 제작.',
    year: 2023,
    company: '피아노 회사',
    role: 'Web Design',
    image: '/images/23_06_sum.png',
    tags: ['Promotion page'],
    thumbnailImages: [
      '/images/23_06_sum.png'
    ],
    detailImages: [
      '/images/23_06.png'
    ]

    
  },

             {
    id: 16,
    title: '2024 아카데미',
    description: '프로모션 상세페이지 및 썸네일 제작.',
    year: 2024,
    company: '피아노 회사',
    role: 'Web Design',
    image: '/images/24_01_sum.png',
    tags: ['Promotion page'],
    thumbnailImages: [
     '/images/24_01_sum.png'
    ],
    detailImages: [
      '/images/23_05.png'
    ]
  },
             {
    id: 17,
    title: '감사 프로모션',
    description: '프로모션 상세페이지 및 썸네일 제작.',
    year: 2024,
    company: '피아노 회사',
    role: 'Web Design',
    image: '/images/24_02_sum.png',
    tags: ['Promotion page'],
    thumbnailImages: [
      '/images/24_02_sum.png'
    ],
    detailImages: [
      '/images/24_02.jpg'
    ]
  },

              {
    id: 18,
    title: '감사프로모션.ver2',
    description: '프로모션 상세페이지 및 썸네일 제작.',
    year: 2024,
    company: '피아노 회사',
    role: 'Web Design',
    image: '/images/24_03_sum.png',
    tags: ['Promotion page'],
    thumbnailImages: [
      '/images/24_03_sum.png'
    ],
    detailImages: [
      '/images/24_03.png'
    ]
  },

             {
    id: 19,
    title: '2024 아카데미',
    description: '프로모션 상세페이지 및 썸네일 제작.',
    year: 2024,
    company: '피아노 회사',
    role: 'Web Design',
    image: '/images/24_05_sum.png',
    tags: ['Promotion page'],
    thumbnailImages: [
      '/images/24_05_sum.png'
    ],
    detailImages: [
      '/images/24_05.png'
    ]
  },
              {
    id: 20,
    title: '2024 아카데미',
    description: '프로모션 상세페이지 및 썸네일 제작.',
    year: 2024,
    company: '피아노 회사',
    role: 'Web Design',
    image: '/images/24_05_sum.png',
    tags: ['Promotion page'],
    thumbnailImages: [
      '/images/24_05_sum.png'
    ],
    detailImages: [
      '/images/24_05.png'
    ]
  },
              {
    id: 21,
    title: '2024 아카데미',
    description: '프로모션 상세페이지 및 썸네일 제작.',
    year: 2024,
    company: '피아노 회사',
    role: 'Web Design',
    image: '/images/24_05_sum.png',
    tags: ['Promotion page'],
    thumbnailImages: [
      '/images/24_05_sum.png'
    ],
    detailImages: [
      '/images/24_05.png'
    ]
  },

]
