// src/data/experiences.js
import SetFindrAudio from './audio/SetFindr.mp3';
import SuperIntroAudio from './audio/superintro.mp3';
import botenyuAudio from './audio/botenyu.mp3';
import paramountAudio from './audio/paramount.mp3';
import mathnasiumAudio from './audio/mathnasium.mp3';
import youthAudio from './audio/youth.mp3';

export default [
    {
        company: "SetFindr",
        role: "Full Stack Developer Intern",
        date: "Apr 2025 – Present",
        bullets: [
          "Built and optimized backend services achieving 99.9% uptime and handling 500+ API requests/day",
          "Participated in agile sprints, code reviews, and testing, contributing 20+ PRs and to accelerate the roadmap by 30%",
          "Implemented a GraphQL API for efficient front-end data fetching, reducing client load times by 35%"
        ],
        link: "https://setfindr.com/",
        personalGrowth: "At SetFindr, I took full ownership of the front-to-back feature lifecycle—shaping requirements with product, coding the React UI, and deploying backend services in Python—dramatically boosting my confidence in end-to-end delivery.",
        audioUrl: SetFindrAudio
    
    },
    {
        company: "SuperIntro",
        role: "AI Software Engineer Intern",
        date: "Nov 2024 – Apir 2025",
        bullets: [
            "Revamped Swift-based UI and integrated two-factor authentication (2FA), enhancing app security",
            "Built a Twilio Voice AI assistant using OpenAI API and Node.js, delivering real-time human-like interactions",
            "Rearchitected backend RESTful APIs with microservices design, reducing latency by 20% and improving scalability"
        ],
        link: "https://superintro.me",
        audioUrl: SuperIntroAudio

    },
    {
        company: "BotenYu",
        role: "Web Developer Intern",
        date: "Aug 2023 – Nov 2024",
        bullets: [
            "Redesigned and rebuilt company website using React and Node.js, boosting user engagement by 30%",
            "Applied responsive design principles, cutting bounce rates by 15% and improving load times by 20%",
            "Collaborated with stakeholders to translate requirements into customer-centric technical solutions"
        ],
        link: "https://botenyu.com",
        audioUrl: botenyuAudio
    },
    {
        company: "Paramount",
        role: "Software Engineering Intern",
        date: "Jun 2023 – Aug 2023",
        bullets: [
            "Architected ML-based video quality trade-off algorithm using frame complexity, achieving 20× faster runtime",
            "Resolved critical bug in ad-stitching pipeline with 95% test coverage, ensuring seamless video output",
            "Optimized cloud deployment scripts, reducing infrastructure costs by 10%"
        ],
        link: "https://www.paramount.com",
        audioUrl: paramountAudio
    },
    {
        company: "Mathnasium",
        role: "Portal Architect & Site Coordinator",
        date: "Jan 2022 – Jun 2023",
        bullets: [
            "Tutored over 100 students in SAT Math, ACT Math, and AP Calculus, driving an average score increase of 18% per student",
            "Architected and maintained a custom student/parent portal (1,200+ active users) using Excel, Google Sheets, and JavaScript automations",
            "Managed and trained a team of 20 student tutors across 4 locations, reducing onboarding time by 30%",
        ],
        link: "https://www.mathnasium.com",
        personalGrowth: "At Mathnasium, I scaled my technical scope by designing and deploying a full-stack portal. Managing both the codebase and a team of learners cemented my skills in leadership, architecture, and cross-functional collaboration.",
        audioUrl: mathnasiumAudio

    },
    {
        company: "Youth Science Center",
        role: "Youth Group Leader",
        date: "Aug 2021 – Jan 2022",
        bullets: [
            "Developed hands-on STEM workshops for 10–15 middle schoolers using Lua (Roblox) and Minecraft Education",
            "Built an educational mini-game in Roblox integrating physics simulations and problem-solving challenges",
            "Mentored 5 volunteer assistants, improving session punctuality by 40%",
        ],
        link: "https://youthsciencecenter.org",
        personalGrowth: "Leading hands-on STEM workshops taught me how to communicate complex technical ideas in simple, engaging ways—sharpening my teaching skills and my ability to empathize with non-technical users.",
        audioUrl: youthAudio

    }
  ];
  
  