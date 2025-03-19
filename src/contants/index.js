export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: "Nomadgram",
      desc: "A full-stack social media web application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to post, like, comment, and explore other people's profiles. Specifically designed for travelers, it includes a travel guide feature to share visited places and travel routes.",
      subdesc: "Developed with React.js for the front end, Material-UI for design, and Node.js with Express.js for the backend.",
      href: "https://nomadgram-albyabhi.netlify.app/",
      texture: "/textures/project/project1.mp4",
      spotlight: "/assets/spotlight1.png",
    },
    {
      title: "AutoCompose",
      desc: "An AI-powered email generation tool built using the MERN stack, leveraging Google's Gemini AI for text generation. Users can generate professional and context-aware emails effortlessly.",
      subdesc: "Built using React.js and integrated with Google Gemini for smart text generation.",
      href: "https://autocompose-albyabhi.netlify.app/",
      texture: "/textures/project/project2.mp4",
      spotlight: "/assets/spotlight2.png",
    },
    {
      title: "Interactive Seat Booking System",
      desc: "A dynamic and interactive front-end seat booking system, developed with Vite and React. The application efficiently manages state using Redux, allowing seamless seat selection and booking.",
      subdesc: "React.js is used for UI, while Redux handles state management with store and slices for smooth updates.",
      href: "https://interactive-seat-booking-albyabhi.netlify.app/",
      texture: "/textures/project/project3.mp4",
      spotlight: "/assets/spotlight3.png",
    },
    {
      title: "Capture-it",
      desc: "A collaborative album creation web app, built using the MERN stack, where users can collect and share images from various events with friends and family. The platform ensures secure storage and easy accessibility.",
      subdesc: "React.js for the front end, Node.js with Express.js for backend processing, and MongoDB for image storage.",
      href: "https://capture-it-albyabhi.netlify.app/",
      texture: "/textures/project/project4.mp4",
      spotlight: "/assets/spotlight4.png",
    },
    {
      title: "Football Page",
      desc: "A football-dedicated web platform designed to share live scores and match highlights. The intuitive UI enhances user experience for football enthusiasts.",
      subdesc: "Developed with React.js and styled with Material-UI for a clean, interactive interface.",
      href: "https://knowfootball-albyabhi.netlify.app/",
      texture: "/textures/project/project5.mp4",
      spotlight: "/assets/spotlight5.png",
    },
    {
      title: "Studio Event Management",
      desc: "A professionally designed website for a studio specializing in wedding and event photography and videography. The site showcases past work and offers booking options.",
      subdesc: "Built using HTML, CSS, and JavaScript for a responsive and visually appealing design.",
      href: "https://event-management-site-albyabhi.netlify.app/",
      texture: "/textures/project/project6.mp4",
      spotlight: "/assets/spotlight1.png",
    },
  ];
  
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Framer',
      pos: 'Lead Web Developer',
      duration: '2022 - Present',
      title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
      icon: '/assets/framer.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Figma',
      pos: 'Web Developer',
      duration: '2020 - 2022',
      title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
      icon: '/assets/figma.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Notion',
      pos: 'Junior Web Developer',
      duration: '2019 - 2020',
      title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
      icon: '/assets/notion.svg',
      animation: 'salute',
    },
  ];