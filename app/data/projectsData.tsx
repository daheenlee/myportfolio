// app/webdesign/projectsData.tsx

export interface Project {
  id: number;
  title: string;
  description: string;
  year: number;
  company: string;
  role: string;
  image: string; 
  tags: string[];
  thumbnailImages: string[]; 
  detailImages: string[];   
}

export const companyAProjects: Project[] = [
  {
    id: 1,
    title: '강화유리 상세페이지',
    description: '핸드폰 강화유리 상세페이지 및 썸네일 제작',
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
    title: '더블 카드포켓 젤리케이스 상세페이지',
    description: '핸드폰 케이스 상세페이지 및 썸네일 제작',
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

];

export const companyBProjects: Project[] = [
 
     {
    id: 10,
    title: '2022 블랙세일 프로모션',
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
    title: '홈 레코딩 프로모션',
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
    title: '폼 미쳤다 프로모션',
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
    title: '그랜드 리뉴얼 오픈 프로모션',
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
    title: '6월의 선물 프로모션',
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
    title: '신제품 론칭 프로모션 프로모션',
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
    title: '2024 아카데미 프로모션',
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
    title: '가정의달 신제품 체험단 프로모션',
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
    title: '장마를 부탁해',
    description: '프로모션 상세페이지 및 썸네일 제작.',
    year: 2024,
    company: '피아노 회사',
    role: 'Web Design',
    image: '/images/24_06_sum.png',
    tags: ['Promotion page'],
    thumbnailImages: [
      '/images/24_06_sum.png'
    ],
    detailImages: [
      '/images/24_06.jpg'
    ]
  },
              {
    id: 21,
    title: '추석 프로모션',
    description: '프로모션 상세페이지 및 썸네일 제작.',
    year: 2024,
    company: '피아노 회사',
    role: 'Web Design',
    image: '/images/24_07_sum.png',
    tags: ['Promotion page'],
    thumbnailImages: [
      '/images/24_07_sum.png'
    ],
    detailImages: [
      '/images/24_07.jpg'
    ]
  },
               {
    id: 22,
    title: '여름 페스티벌',
    description: '프로모션 상세페이지 및 썸네일 제작.',
    year: 2025,
    company: '피아노 회사',
    role: 'Web Design',
    image: '/images/25_02_sum.png',
    tags: ['Promotion page'],
    thumbnailImages: [
      '/images/25_02_sum.png'
    ],
    detailImages: [
      '/images/25_02.jpg'
    ]
  },

               {
    id: 23,
    title: '신제품 론칭 프로모션',
    description: '프로모션 상세페이지 및 썸네일 제작.',
    year: 2025,
    company: '피아노 회사',
    role: 'Web Design',
     image: '/images/25_03_sum.png',
    tags: ['Promotion page'],
    thumbnailImages: [
      '/images/25_03.png'
    ],
    detailImages: [
      '/images/25_03.png'
    ]
  },

              {
    id: 24,
    title: '크리스마스 프로모션',
    description: '프로모션 상세페이지 및 썸네일 제작.',
    year: 2025,
    company: '피아노 회사',
    role: 'Web Design',
    image: '/images/25_04_sum.png',
    tags: ['Promotion page'],
    thumbnailImages: [
      '/images/25_04_sum.png'
    ],
    detailImages: [
      '/images/25_04.jpg'
    ]
  },

]
