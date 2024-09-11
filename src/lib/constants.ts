import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/brillianodhiya',
  linkedin: 'https://www.linkedin.com/in/brilliano-dhiya-ulhaq-44b196194',
  mail: 'mailto:brillidhiya@gmail.com',
  instagram: 'https://www.instagram.com/brilliano_d/',
  // medium: 'https://ladvace.medium.com/',
  discord: 'https://discordapp.com/users/248357529048842241',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Bachelor Management Information System',
    institution: 'Binus Online Learning',
    link: 'https://online.binus.ac.id/',
    date: '2022 - 2026',
  },
  {
    title: '...',
    institution: 'Arkademy Tech Education Platform',
    link: 'https://arkademy.com/',
    date: '2019 - 2019',
  },
  {
    title: 'Highschool, Information Technology Degree',
    institution: 'SMKN 2 Trenggalek',
    link: 'https://smkn2trenggalek.sch.id/',
    date: '2016 - 2019',
  }
]

export const EXPERIENCE = [
  {
    company: '80&Company',
    location: 'Kyoto, Sakyo Ward',
    position: 'Frontend Developer',
    start: '2024',
    link: 'https://80and.co',
    end: 'Current',
    tasks: [
      'Developing Web3 Job Searching Application with Next.js and Typescript',
      'Developing MUW E-Commerce Website using Shopify and Liquid',
    ],
  },
  {
    company: 'AITI Lokal',
    location: 'Trenggalek, East Java',
    position: 'CEO & Founder',
    start: '2023',
    link: 'https://aitilokal.com/',
    end: 'Current',
    tasks: [
      'Managing Team and Project',
      'Lead team to build some project',
    ],
  },
  {
    company: 'PT. IoT Kreasi Indonesia',
    location: 'Tengerang Selatan, West Java',
    position: 'Senior Frontend Developer',
    link: 'https://weiots.io/',
    start: '2021',
    end: 'Current',
    tasks: [
      'Frontend in Wira Energi IoT platform',
      'Developing Company Profile',
      'Developing Badiklat Kemhan IoT platform',
      'Building Design Concept and Design Components',
      'Make SEO Friendly website',
      'meeting with client to improve performance',
      'Development map with the use of Google Maps API',
      'Development internal platform with the use of React, Redux, and Material UI',
      'Testing and debugging',
    ],
  },
  {
    company: 'Kisah Kreatif',
    link: 'https://www.instagram.com/kisahkreatif/',
    location: 'Jakarta, Indonesia',
    position: 'Frontend developer',
    start: '2023',
    end: '2024',
    tasks: [
      'Developing Pilog Website for Ship & Cargo Monitoring using Vite & React.js',
      'Apply SDLC for Developing Website Learning Management System DSarea',
      'Deploying Website and Backend to the VPS Server'
    ],
  },
  {
    company: 'PT. Trimagnus Prima Dharma',
    location: 'Jakarta, Indonesia',
    position: 'Fullstack Developer',
    start: '2020',
    link: 'https://trimagnus.com/',
    end: '2021',
    tasks: [
      'Develop App Wira Energy from Client Wira using Laravel',
      'Develop Hoops Indonesia E-Commerce Application using Express.js and React.js',
    ],
  },
  {
    company: 'PT. Allbest Solusi Sistem',
    location: 'Jakarta Selatan, Indonesia',
    position: 'Frontend Developer',
    start: '2019',
    end: '2019',
    link: 'https://allbestsistem.com/',
    tasks: [
      'Developing the CEISA 4.0 application for the client (Beacukai) meeting with the client (Beacukai) directly for its development',
    ],
  },
  {
    company: 'PT. Delta Sinergi Prima',
    location: 'Surabaya, East Java',
    position: 'Junior Programmer',
    start: '2018',
    end: '2018',
    link: 'https://www.delta.id/',
    tasks: [
      'Create UI Web-based as request by Client',
      'Take care of the marketing department for a while',
      'Managing company databases for data cleannes',
    ],
  },
]
