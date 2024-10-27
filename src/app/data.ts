export const SERVICES = [
  {
    tag: "Web Dev",
    title: "Custom Web Development",
    tagline: "Tailored websites to elevate your online presence.",
    src: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Crafting responsive, SEO-friendly websites designed to meet your specific needs, whether it’s a simple landing page or a complex web application.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Golang",
      "AWS",
    ],
  },
  {
    tag: "Mobile App",
    title: "Mobile App Development",
    tagline: "Innovative apps for iOS and Android.",
    src: "https://images.unsplash.com/photo-1533906966484-a9c978a3f090?q=80&w=3465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Building intuitive, high-performance mobile applications that deliver a seamless user experience and align perfectly with your vision.",
    technologies: ["Flutter", "React Native", "Firebase"],
  },
  {
    tag: "Design",
    title: "UI/UX Design",
    tagline: "Creating user-centered designs that engage.",
    src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Designing visually appealing interfaces that enhance usability, improve user satisfaction, and strengthen your brand identity.",
    technologies: ["Figma"],
  },
  {
    tag: "Backend",
    title: "Backend Development",
    tagline: "Robust backends for seamless operations.",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=3434&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Developing scalable backends with secure APIs and database management, ensuring that your application runs smoothly and efficiently.",
    technologies: ["Node.js", "Golang", "MongoDB", "PostgreSQL"],
  },
  {
    tag: "Full-Stack",
    title: "Full-Stack Development",
    tagline: "End-to-end solutions for your projects.",
    src: "https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?q=80&w=3552&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Offering comprehensive development services that cover both frontend and backend, bringing your project to life with efficiency and expertise.",
    technologies: ["React", "Next.js", "Golang", "GraphQL", "MongoDB"],
  },
  {
    tag: "E-commerce",
    title: "E-commerce Solutions",
    tagline: "Empowering your online store.",
    src: "https://images.unsplash.com/photo-1658297063569-162817482fb6?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Building customized e-commerce platforms that include secure payment integration and inventory management, ensuring a smooth shopping experience for your customers.",
    technologies: [
      "Shopify",
      "WooCommerce",
      "Magento",
      "Stripe",
      "PayPal",
      "React",
    ],
  },
  {
    tag: "SEO",
    title: "SEO & Performance Optimization",
    tagline: "Boosting visibility and performance.",
    src: "https://images.unsplash.com/photo-1674027001840-1a3e834eb73f?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Improving site speed and enhancing SEO strategies to elevate your search engine rankings and provide an optimized user experience.",
    technologies: [
      "Google Analytics",
      "SEMrush",
      "PageSpeed Insights",
      "GTmetrix",
      "Yoast SEO",
    ],
  },
  {
    tag: "Consultation",
    title: "Product Consultation & Strategy",
    tagline: "Guiding your project from concept to launch.",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Helping you refine project goals and develop a strategic roadmap to ensure successful product launches that align with market needs.",
    technologies: ["Trello", "Notion", "Slack", "Zoom", "Google Docs"],
  },
  {
    tag: "Support",
    title: "Maintenance & Support",
    tagline: "Keeping your product up-to-date and running.",
    src: "https://images.unsplash.com/photo-1714079761488-e0c9b9ac4138?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Providing ongoing maintenance, updates, and support to ensure your product remains efficient, secure, and aligned with current technology standards.",
    technologies: ["JIRA", "GitHub", "Docker", "AWS"],
  },
];
export const WORKFLOW_STEPS: { title: string; content: string[] }[] = [
  {
    title: "Understanding Your Vision",
    content: [
      "We’ll start with an open discussion to understand your goals and the purpose behind your project.",
      "Together, we’ll identify the target audience, core requirements, and any key features or functionalities you envision.",
      "I’ll bring in ideas to help shape a clear project direction tailored just for you.",
    ],
  },
  {
    title: "Crafting a Customized Proposal",
    content: [
      "Once we have a solid idea, I’ll create a detailed proposal, outlining costs, a realistic timeline, and deliverables.",
      "This proposal will include key milestones so you know exactly what to expect at each stage.",
      "I’ll share the proposal with you for review and make any necessary adjustments to ensure it meets your needs.",
    ],
  },
  {
    title: "Designing Your Solution",
    content: [
      "I’ll start with initial wireframes or mockups that reflect our discussed vision, giving you a tangible sense of the product.",
      "After sharing the designs, I’ll gather your feedback to ensure everything aligns with your expectations.",
      "Any tweaks or updates you need? I’ll handle them promptly so we’re ready to move forward confidently.",
    ],
  },
  {
    title: "Finalizing Your Design",
    content: [
      "I’ll present the refined design for your approval, ensuring every detail matches your requirements.",
      "If there’s anything further to adjust, I’ll take care of it to make sure you’re fully satisfied with the look and feel.",
      "With your sign-off, we’ll be ready to kick off development!",
    ],
  },
  {
    title: "Building Your Project",
    content: [
      "I’ll set up the development environment and begin coding, implementing features exactly as we planned.",
      "Throughout the process, I’ll keep you updated on progress so you’re never out of the loop.",
      "Any questions along the way? I’m here to provide answers and adapt as needed.",
    ],
  },
  {
    title: "Delivering Your Final Product",
    content: [
      "Once development wraps up, I’ll test the product thoroughly to ensure it’s free of any bugs or issues.",
      "After testing, I’ll deploy your product to the agreed environment, so it’s live and ready for use.",
      "I’ll hand over access, documentation, and everything you need to start using the product confidently.",
    ],
  },
  {
    title: "Two Weeks of Free Support",
    content: [
      "For two weeks post-launch, I’ll be available to provide maintenance and support, free of charge.",
      "I’ll monitor performance, address any questions, and make sure everything runs smoothly for you.",
      "This gives you peace of mind, knowing I’m here to help if any issues arise.",
    ],
  },
  {
    title: "Gathering Your Feedback",
    content: [
      "At the end of the project, I’ll reach out for your honest feedback on both the product and the process.",
      "If there’s anything more I can do to make the product perfect, I’ll address it with priority.",
      "With your final approval, we’ll wrap up the project, and I’ll always be just a message away for future needs!",
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Sourav delivered good work on React Native App development with Django at the back-end. He understood the requirement pretty well and completed the project on time. He helped me with the changes I required on the App's UI. He learnt AWS which was new to him and deployed the app on it. I liked working with him on the 4 page mobile application of mine.",
    name: "Ankit Gupta",
    title: "Founder of Your Parcel | client @upwork",
  },
  {
    quote:
      "I have worked with Sourav Layek directly. He was part of my team and gave his best foot forward, not just in terms of his daily tasks, but also in bringing newer approach, innovation and projections to the work he was assigned. Without any doubt, I will wish to have in my team again if we ever got a chance. He is a great team player and has a good sense of discipline that also reflects in his work.",
    name: "Hemanto Das",
    title: "LA POLO | Senior Web Developer",
  },
];
export const LINKS_FOR_TECHNOLOGIES: Record<string, string> = {
  React: "https://reactjs.org/",
  "Next.js": "https://nextjs.org/",
  Redux: "https://redux.js.org/",
  "Material UI": "https://mui.com/",
  Flutter: "https://flutter.dev/",
  "React Native": "https://reactnative.dev/",
  Firebase: "https://firebase.google.com/",
  "Android SDK": "https://developer.android.com/",
  "iOS SDK": "https://developer.apple.com/xcode/",
  Figma: "https://www.figma.com/",
  "Adobe XD": "https://www.adobe.com/in/products/xd.html",
  Sketch: "https://www.sketch.com/",
  Golang: "https://golang.org/",
  MongoDB: "https://www.mongodb.com/",
  Redis: "https://redis.io/",
  "Express.js": "https://expressjs.com/",
  "Node.js": "https://nodejs.org/",
  GraphQL: "https://graphql.org/",
  WooCommerce: "https://woocommerce.com/",
  Shopify: "https://www.shopify.com/",
  Stripe: "https://stripe.com/",
  "Google Analytics": "https://www.google.com/analytics/",
  "Google Search Console": "https://developers.google.com/search",
  "Yoast SEO": "https://yoast.com/",
  JIRA: "https://www.jira.com/",
  Trello: "https://trello.com/",
  Slack: "https://slack.com/",
  AWS: "https://aws.amazon.com/",
  Docker: "https://www.docker.com/",
  Kubernetes: "https://kubernetes.io/",
  PostgreSQL: "https://www.postgresql.org/",
  Notion: "https://www.notion.so/",
  GitHub: "https://github.com/",
};
export const EXPERIENCES: {
  title: string;
  subTitle: string;
  content: string[];
}[] = [
  {
    title: "Senior Software Engineer",
    subTitle: "NextZen Minds (Oct 2024 - Present)",
    content: [
      "Currently serving as a Senior Software Engineer, contributing to architectural decisions to ensure application scalability and performance.",
      "Improved team and project efficiency by introducing micro-frontend architecture, fostering a modular and maintainable codebase.",
    ],
  },
  {
    title: "Front-end Developer",
    subTitle: "CBNITS (Jan 2022 - Oct 2024)",
    content: [
      "Led development for a critical project module, making significant contributions as a key contributor.",
      "Enhanced security measures to comply with stringent Singaporean regulations, supporting project integrity.",
      "Participated in architectural decision-making for applications, improving team and project performance through the introduction of micro-frontend architecture.",
    ],
  },
  {
    title: "Front-end Developer",
    subTitle: "Thirdly.UK (Mar 2021 - Jan 2022)",
    content: [
      "Revamped the front-end of a key CRM system, achieving a 40% performance boost.",
      "Developed a versatile component library widely used across multiple projects.",
    ],
  },
  {
    title: "Front-end Developer",
    subTitle: "Lapolo (Oct 2020 - Mar 2021)",
    content: [
      "Introduced React JS to the team, leading collaborative efforts to adopt and implement the technology across multiple projects.",
      "Spearheaded the development of various initiatives, enhancing the company’s technological capabilities and delivering impactful solutions.",
    ],
  },
  {
    title: "Front-end Developer",
    subTitle: "Freelancer (Mar 2020 - Oct 2020)",
    content: [
      "Collaborated with various clients to build multiple React JS websites.",
      "Developed user interfaces, implemented functionalities, and ensured optimal performance and responsiveness across projects.",
    ],
  },
];
