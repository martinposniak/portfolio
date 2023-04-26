import {
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    remax,
    grupoMitre,
    tennisEcommerce,
    weatherApp,
    budgetPlanner,
    threejs,
    github,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "contact",
      title: "Download CV",
    },
  ];
  
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "github",
      icon: github,
    },
  ];
  
  const experiences = [
    {
      title: "Real Estate Agent",
      company_name: "RE/MAX Vanguard",
      icon: remax,
      iconBg: "#383E56",
      date: "Nov 2019 - Sep 2022",
      points: [
        "Weekly meetings with clients, post-sale follow-up and prospecting.",
        "Presentation of comparative market analysis and preparation of budget. Show of properties and negotiation with clients.",
        "Assembly of promotional actions.",
        "Constant training and monthly team meetings.",
      ],
    },
    {
      title: "Business Advisor",
      company_name: "Grupo Mitre",
      icon: grupoMitre,
      iconBg: "#E6DEDD",
      date: "Sep 2022 - Present",
      points: [
        "Customer service and preparation of budgets.",
        "Post-sale monitoring and prospecting.",
        "Trainer and supervisor of new salesmen.",
        "Weekly team meetings and monthly sales review.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Match Point Palermo",
      description:
        "Web-based platform that allows users to search and buy tennis items, providing an efficient solution for those tennis players who requires the very best on market.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tennisEcommerce,
      source_code_link: "https://spiffy-tanuki-84e979.netlify.app/",
    },
    {
      name: "Weather App",
      description:
        "Web application that enables users to check the weather for their current location. You can also check atmospheric pressure, wind speed and humidity, among other things.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "weatherAPI",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: weatherApp,
      source_code_link: "https://symphonious-klepon-767598.netlify.app/",
    },
    {
      name: "Budget Planner",
      description:
        "This budget planner will help you to know where your money is being spent. This is a great way to start your savings, getting out of debt or preparing for retirement.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: budgetPlanner,
      source_code_link: "https://guileless-blancmange-ef8df0.netlify.app/",
    },
  ];
  
  export { technologies, experiences, testimonials, projects };