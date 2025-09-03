import sonuImage from '../assets/sonu.jpg';
import housejetImage from '../assets/project/housejet.png';
import myclientwaveImage from '../assets/project/myclientwave.png';
import clinicDashboard from '../assets/project/clinic/Dashboard.png';
import clinicLogin from '../assets/project/clinic/login.png';
import clinicPatientList from '../assets/project/clinic/Patientlist.png';
import clinicPrescriptionDetails from '../assets/project/clinic/prescription_details.png';
import clinicRole from '../assets/project/clinic/role.png';
import clinicUsers from '../assets/project/clinic/users.png';

export const portfolioData = {
  personal: {
    name: "Sonu Kumawat",
    title: "Full-Stack Web Developer",
    tagline: "Transforming ideas into powerful digital solutions with cutting-edge technologies",
    bio: "Passionate full-stack developer with 3+ years of experience crafting innovative web solutions. I specialize in Laravel, Vue.js, and React, with a proven track record of delivering 17+ successful projects for diverse clients. My expertise spans from building comprehensive CRM systems to healthcare management platforms, always focusing on clean code, user experience, and scalable architecture.",
    email: "sonukumawat6282@gmail.com",
    phone: "+91 63754 26292",
    location: "Jaipur, India",
    image: sonuImage,
    availableForWork: true,
    highlights: [
      {
        icon: "🎓",
        title: "Computer Science Graduate",
        description: "Strong foundation in software engineering principles and algorithms",
        color: "from-blue-400 to-cyan-400"
      },
      {
        icon: "🏆",
        title: "Award-winning Developer",
        description: "Recognized for excellence in web development and innovation",
        color: "from-yellow-400 to-orange-400"
      },
      {
        icon: "🌟",
        title: "Open Source Contributor",
        description: "Active contributor to open-source projects and community initiatives",
        color: "from-purple-400 to-pink-400"
      },
      {
        icon: "🚀",
        title: "Innovation Focused",
        description: "Always exploring cutting-edge technologies and best practices",
        color: "from-green-400 to-emerald-400"
      }
    ],
    philosophy: "I believe in writing clean, maintainable code that not only solves problems but also creates delightful user experiences. Every project is an opportunity to learn, innovate, and make a positive impact.",
  },

  stats: [
    { label: "Years Experience", value: 3, suffix: "+" },
    { label: "Projects Completed", value: 17, suffix: "+" },
    { label: "Happy Clients", value: 13, suffix: "+" },
    { label: "Technologies Mastered", value: 15, suffix: "+" },
  ],

  skills: [
    { name: "PHP Laravel", level: 90, icon: "🐘" },
    { name: "Vue.js", level: 88, icon: "💚" },
    { name: "Vuetify", level: 85, icon: "🎨" },
    { name: "React", level: 85, icon: "⚛️" },
    { name: "Node.js", level: 82, icon: "🟢" },
    { name: "MySQL", level: 85, icon: "🐬" },
    { name: "MariaDB", level: 80, icon: "🍃" },
  ],

  projects: [
    {
      id: 1,
      title: "HouseJet - Real-Estate CRM",
      description: "Comprehensive CRM system for real estate management",
      longDescription: "A full-featured Customer Relationship Management system designed specifically for real estate businesses. Built with Laravel, Vue.js, and MariaDB. Features include lead management, property listings, client tracking, appointment scheduling, and comprehensive reporting dashboard.",
      image: housejetImage,
      gallery: [
        {
          id: 1,
          title: "Dashboard Overview",
          description: "Main dashboard with key metrics and analytics",
          image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 2,
          title: "Lead Management",
          description: "Comprehensive lead tracking and management system",
          image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 3,
          title: "Property Listings",
          description: "Property catalog with advanced search and filtering",
          image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 4,
          title: "Appointment Scheduling",
          description: "Calendar-based appointment booking system",
          image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 5,
          title: "Client Portal",
          description: "Dedicated client dashboard and communication hub",
          image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 6,
          title: "Reports & Analytics",
          description: "Comprehensive reporting and data visualization",
          image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ],
      tech: ["CakePHP", "Vue.js", "MariaDB", "PHP" ],
      liveUrl: "https://housejet.com/",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "MyClientWave - Lead Management System",
      description: "Advanced lead management with CRM integrations",
      longDescription: "A comprehensive lead management platform with role-based access control and seamless integrations with Zoho, Monday.com, and Salesforce CRM. Features include lead tracking, workflow automation, data synchronization, and advanced analytics dashboard.",
      image: myclientwaveImage,
      gallery: [
        {
          id: 1,
          title: "Lead Dashboard",
          description: "Centralized lead management dashboard",
          image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 2,
          title: "Lead Capture Forms",
          description: "Customizable lead capture and qualification forms",
          image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 3,
          title: "CRM Integration",
          description: "Seamless integration with Zoho, Monday.com, and Salesforce",
          image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 4,
          title: "Workflow Automation",
          description: "Automated lead processing and follow-up workflows",
          image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 5,
          title: "Analytics & Reports",
          description: "Advanced analytics and performance reporting",
          image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 6,
          title: "Team Management",
          description: "Role-based access control and team collaboration",
          image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ],
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
      gallery: [
        {
          id: 1,
          title: "Dashboard Overview",
          description: "Main clinic dashboard with key metrics and patient overview",
          image: clinicDashboard
        },
        {
          id: 2,
          title: "User Authentication",
          description: "Secure login system with role-based access control",
          image: clinicLogin
        },
        {
          id: 3,
          title: "Patient Management",
          description: "Comprehensive patient list and management interface",
          image: clinicPatientList
        },
        {
          id: 4,
          title: "Prescription Details",
          description: "Detailed prescription management and tracking system",
          image: clinicPrescriptionDetails
        },
        {
          id: 5,
          title: "Role Management",
          description: "User role and permission management system",
          image: clinicRole
        },
        {
          id: 6,
          title: "User Management",
          description: "Staff and user account management interface",
          image: clinicUsers
        }
      ],
      tech: ["Laravel", "Bootstrap", "MySQL", "PHP"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "HR Payroll System",
      description: "Complete HR and payroll management solution",
      longDescription: "A comprehensive HR management system with integrated payroll processing. Features include employee management, attendance tracking, salary calculation, tax management, leave management, performance reviews, and automated payroll generation.",
      image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800",
      gallery: [
        {
          id: 1,
          title: "Employee Dashboard",
          description: "Comprehensive employee management interface",
          image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 2,
          title: "Attendance Tracking",
          description: "Automated attendance and time tracking system",
          image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 3,
          title: "Payroll Processing",
          description: "Automated salary calculation and payroll generation",
          image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 4,
          title: "Leave Management",
          description: "Employee leave request and approval system",
          image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 5,
          title: "Performance Reviews",
          description: "Employee performance evaluation and feedback system",
          image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
          id: 6,
          title: "HR Reports",
          description: "Comprehensive HR analytics and reporting dashboard",
          image: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
      ],
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
      description: "Leading full-stack development initiatives using Laravel, CakePHP, MariaDB, and Vue.js. Architecting scalable web applications with modern development practices, implementing robust APIs, and delivering high-performance solutions for enterprise clients.",
      icon: "💼",
    },
    {
      id: 2,
      title: "Laravel Developer",
      company: "WebNStack IT Solution Pvt Ltd",
      duration: "March 2024 - July 2024",
      description: "Engineered a comprehensive healthcare management system featuring patient database management, intelligent appointment scheduling, and multi-level role-based access control. Successfully deployed HIPAA-compliant solutions serving 500+ patients daily.",
      icon: "🏥",
    },
    {
      id: 3,
      title: "Laravel Developer Intern",
      company: "Aladdin Digital Solutions",
      duration: "August 2023 - November 2023",
      description: "Accelerated learning through hands-on experience with live production projects. Contributed to critical web development initiatives, mastered industry-standard workflows, and established foundation in modern development practices.",
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