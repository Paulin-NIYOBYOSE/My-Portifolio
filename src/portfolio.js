const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'PAULIN',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'NIYOBYOSE Paulin',
  role: 'Fullstack developer',
  description:
    "I'm NIYOBYOSE Paulin, a full-stack developer passionate about creating user-friendly and efficient web applications. I specialize in both front-end and back-end development using technologies like React, Next.js, Node.js, and Python . Explore my projects to see my work, and feel free to reach out for collaboration!",
  resume: '',
  social: {
    linkedin: 'https://www.linkedin.com/in/niyobyose-paulin-5a8497304/',
    github: 'https://github.com/Paulin-NIYOBYOSE',
  },
}

const projects = [
  {
    name: 'IS TECHNOLOGY LTD',
    description:
      'An online e-commerce website for selling electronic products',
    stack: ['React.js', 'Tailwind', 'Redux'],
    sourceCode: 'https://github.com/Paulin-NIYOBYOSE/Is-Tech',
    livePreview: 'https://is-tech-eta.vercel.app/',
  },
  {
    name: 'CINEFLIX',
    description:
      'A next generation netflix clone with additional feautures',
    stack: ['React.js', 'Tailwind css', ,],
    sourceCode: 'https://github.com/Paulin-NIYOBYOSE/Cineflix',
    livePreview: 'https://github.com/Paulin-NIYOBYOSE/Cineflix',
  },
  {
    name: 'FXMA',
    description:
      'An online platform for forex trading mentorship with super features such as real time classes',
    stack: ['Next.js', 'Python', 'Typescript', 'MQL5'],
    sourceCode: 'https://github.com/Paulin-NIYOBYOSE/FOREX-MINERS-ACADEMY',
    livePreview: 'https://github.com/Paulin-NIYOBYOSE/FOREX-MINERS-ACADEMY',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'MQL5',
  'Next.js',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'niyobyosepaulin20@gmail.com',
}

export { header, about, projects, skills, contact }
