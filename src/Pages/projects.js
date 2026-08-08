// projects.js

import laptop from "../assets/phone-and-laptop/cropped.png";

import screen1 from "../assets/spot-admin/dashboard.png";
import screen2 from "../assets/spot-admin/parking-requests.png";
import screen3 from "../assets/spot-admin/announcements.png"
import screen4 from "../assets/spot-admin/bookings.png"
import screen5 from "../assets/spot-admin/complaints.png"
import screen6 from "../assets/spot-admin/spot-management.png"
import screen7 from "../assets/spot-admin/user-directory.png"
import screen8 from "../assets/spot-admin/login.png"
import screen9 from "../assets/spot-admin/complaints.png"

import screen10 from "../assets/spot-manager/dashboard.png"
import screen11 from "../assets/spot-manager/sessions.png"
import screen12 from "../assets/spot-manager/bookings.png"
import screen13 from "../assets/spot-manager/transaction-history.png"
import screen14 from "../assets/spot-manager/manual-entry.png"
import screen15 from "../assets/spot-manager/settings.png"
import screen16 from "../assets/spot-manager/settings1.png"
import screen17 from "../assets/spot-manager/requests.png"

// import { image, title } from "framer-motion/client";



export const projects = [
  {
    id: 1,

    featured: true,

    title: "SpotFinder",

    subtitle: "Smart Parking Management System",

    description:
      "A full-stack smart parking solution that helps users discover nearby parking spots, reserve parking spaces, and manage bookings efficiently. The system includes a Flutter mobile application for users, React-based Admin and Manager panels, and a Node.js backend powered by Firebase Firestore. Awarded the highest marks in the Final Year Project evaluation.",

    github: "#",

    live: "#",

    heroImages: {
      laptop,
     
    },

    technologies: [
      {
        id: 1,
        name: "React.js",
        icon: "fa-brands fa-react",
      },

      {
        id: 2,
        name: "Flutter",
        icon: "fa-brands fa-flutter",
      },

      {
        id: 3,
        name: "Node.js",
        icon: "fa-brands fa-node-js",
      },

      {
        id: 4,
        name: "Express.js",
        icon: "fa-solid fa-server",
      },

      {
        id: 5,
        name: "Firebase Firestore",
        icon: "fa-solid fa-fire",
      },

      {
        id: 6,
        name: "Firebase Auth",
        icon: "fa-solid fa-user-shield",
      },
    ],

    features: [
      {
        id: 1,
        title: "Nearby Parking",
        icon: "fa-solid fa-location-dot",
        description:
          "Discover available parking spots around your current location.",
      },

      {
        id: 2,
        title: "Reservations",
        icon: "fa-solid fa-calendar-check",
        description:
          "Reserve parking spaces in advance with real-time availability.",
      },

      {
        id: 3,
        title: "Notifications",
        icon: "fa-solid fa-bell",
        description:
          "Receive booking confirmations and parking reminders.",
      },

      {
        id: 4,
        title: "Complaints",
        icon: "fa-solid fa-comment-dots",
        description:
          "Users can submit complaints and receive administrator responses.",
      },

      {
        id: 5,
        title: "Role-Based Access",
        icon: "fa-solid fa-user-shield",
        description:
          "Separate dashboards for Users, Managers, and Administrators.",
      },
    ],

    screenshots: [
       {
    image: screen8,
    title: "Login Page"
  },
  
       {
    image: screen1,
    title: "Dashboard (Admin Panel)"
  },
   {
    image: screen7,
    title: "User Directory"
  },
    {
    image: screen6,
    title: "Spot Management"
  },
   {
    image: screen4,
    title: "Booking Ledger"
  },

  {
    image: screen2,
    title: "Parking Request"
  },
   {
    image: screen3,
    title: "Push Announcements"
  },
   {
    image: screen9,
    title: "Complaints Center"
  },
  
   {
    image: screen5,
    title: "Resolution Center"
  },



   {
    image: screen10,
    title: "Manager Panel"
  },
  
  {
    image : screen11,
    title: "Active Sessions"
  },


   {
    image : screen12,
    title: "Bookings"
  },
   {
    image : screen13,
    title: "Transactions History"
  },
   {
    image : screen14,
    title: "Manual Entry"
  },
   {
    image : screen15,
    title: "Settings"
  },
  {
    image: screen16,
    title: "Settings"
  },
    {
    image: screen17,
    title: "Request for help"
  }

  
  
    ],

    responsibilities: [
      "Developed the complete React Admin Panel.",
      "Developed the complete React Manager Panel.",
      "Designed and implemented REST APIs.",
      "Integrated Firebase Firestore.",
      "Implemented authentication and authorization.",
      "Built reservation and parking management modules.",
      "Integrated real-time notifications.",
    ],

    architecture: {
      client: "Flutter",

      server: "Node.js + Express.js",

      database: "Firebase Firestore",

      panels: [
        "React Admin Panel",
        "React Manager Panel",
      ],
    },

    status: "Completed",

    duration: "2026",

    role: "Full Stack Developer",
  },
];



export const otherProjects = [

  {
    id: 1,

    title: "Health Care Dashboard",

    description:
      "A responsive healthcare dashboard built to manage and visualize healthcare-related information.",

    technologies: [
      "React.js",
      "JavaScript",
      "CSS"
    ],

    github: "https://health-care-dashboard12.netlify.app/",

    live: "https://health-care-dashboard12.netlify.app/"
  },


  {
    id: 2,

    title: "Inventory Management System",

    description:
      "A frontend inventory management system for managing products and inventory records.",

    technologies: [
      "React.js",
      "JavaScript",
      "CSS"
    ],

    github: "https://github.com/Malaika-6101/Inventory-Management-System-Frontend"

    
  },


  {
    id: 3,

    title: "Live Search With Debounce",

    description:
      "A React project demonstrating live search with debounce functionality.",

    technologies: [
      "React.js",
      "JavaScript",
      "CSS"
    ],

    github: "https://github.com/Malaika-6101/Live-Search-With-Debounce-and-API-Integration"

   
  }

];