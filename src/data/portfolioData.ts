import sonuImage from '../assets/sonu.jpg';
import housejetImage from '../assets/project/housejet.png';
import myclientwaveImage from '../assets/project/myclientwave.png';

export const portfolioData = {
  personal: {
    name: "Sonu Kumawat",
    title: "Full-Stack Web Developer",
    tagline: "Crafting digital experiences with modern web technologies",
    bio: "Experienced full-stack developer specializing in Laravel, Vue.js, and Vuetify. I build robust, scalable web applications and deliver seamless user experiences using modern PHP and JavaScript frameworks.",
    email: "sonukumawat6282@gmail.com",
    phone: "+91 63754 26292",
    location: "Jaipur, India",
    image: sonuImage,
  },

  stats: [
    { label: "Years Experience", value: 3, suffix: "+" },
    { label: "Projects Completed", value: 17, suffix: "+" },
    { label: "Happy Clients", value: 13, suffix: "+" },
  ],

  skills: [
    { name: "PHP Laravel", level: 90, icon: "🐘" },
    { name: "Vue.js", level: 88, icon: "💚" },
    { name: "Vuetify", level: 85, icon: "🎨" },
    { name: "React", level: 85, icon: "⚛️" },
    { name: "Node.js", level: 82, icon: "🟢" },
    { name: "MySQL", level: 85, icon: "🐬" },
    { name: "MariaDB", level: 80, icon: "🍃" },
    { name: "MongoDB", level: 80, icon: "🍃" },
  ],

  projects: [
    {
      id: 1,
      title: "HouseJet - Real-Estate CRM",
      description: "Comprehensive CRM system for real estate management",
      longDescription: "A full-featured Customer Relationship Management system designed specifically for real estate businesses. Built with Laravel, Vue.js, and MariaDB. Features include lead management, property listings, client tracking, appointment scheduling, and comprehensive reporting dashboard.",
      image: housejetImage,
      tech: ["Laravel", "Vue.js", "MariaDB", "PHP"],
      liveUrl: "https://housejet.com/",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "MyClientWave - Lead Management System",
      description: "Advanced lead management with CRM integrations",
      longDescription: "A comprehensive lead management platform with role-based access control and seamless integrations with Zoho, Monday.com, and Salesforce CRM. Features include lead tracking, workflow automation, data synchronization, and advanced analytics dashboard.",
      image: myclientwaveImage,
      tech: ["Laravel", "Bootstrap", "MySQL", "API Integration"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Clinic Management CRM",
      description: "Healthcare management system for clinics and hospitals",
      longDescription: "A specialized CRM system designed for healthcare facilities. Features include patient management, appointment scheduling, medical records, billing management, inventory tracking, and comprehensive reporting for healthcare providers.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Laravel", "Vue.js", "MariaDB", "PHP"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "HR Payroll System",
      description: "Complete HR and payroll management solution",
      longDescription: "A comprehensive HR management system with integrated payroll processing. Features include employee management, attendance tracking, salary calculation, tax management, leave management, performance reviews, and automated payroll generation.",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Laravel", "Bootstrap 5", "MySQL", "PHP"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ],

  experience: [
    {
      id: 1,
      title: "Full-stack Developer",
      company: "Brahmastack Technologies",
      duration: "August 2024 - Present",
      description: "Working as a full-stack developer using Laravel, CakePHP, MariaDB, and Vue.js. Developing comprehensive web applications with both frontend and backend technologies.",
      icon: "💼",
    },
    {
      id: 2,
      title: "Laravel Developer",
      company: "WebNStack IT Solution Pvt Ltd",
      duration: "March 2024 - July 2024",
      description: "Developed a comprehensive medical project including patient database management, appointment booking system, and role-based access control. Managed patient records and implemented user permission systems.",
      icon: "🏥",
    },
    {
      id: 3,
      title: "Laravel Developer Intern",
      company: "Aladdin Digital Solutions",
      duration: "August 2023 - November 2023",
      description: "Gained hands-on experience working on live projects during internship. Contributed to various aspects of web development and learned industry best practices.",
      icon: "🚀",
    },
  ],

  certifications: [
    {
      id: 1,
      title: "PHP & React.js Training",
      issuer: "Rajasthan Knowledge Corporation Limited",
      year: "2024",
      icon: "🏛️",
      description: "Government-sponsored training program in PHP and React.js development",
    },
    {
      id: 2,
      title: "Full Stack Development Training",
      issuer: "Ezulix Software Pvt. Ltd.",
      year: "2024",
      icon: "💼",
      description: "6-month comprehensive full-stack development training program",
    },
 
  ],

  social: [
    { name: "GitHub", url: "https://github.com", icon: "Github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "Twitter", url: "https://twitter.com", icon: "Twitter" },
    { name: "Email", url: "mailto:sonukumawat6282@gmail.com", icon: "Mail" },
  ],
};