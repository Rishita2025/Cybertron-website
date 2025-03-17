import { GrAndroid } from "react-icons/gr";
import {
  FaWordpress,
  FaReact,
  FaNodeJs,
  FaShieldAlt,
  FaNetworkWired,
  FaEnvelope,
  FaChartLine,
  FaTools,
  FaShoppingCart,
  FaDatabase,
  FaCloud,
  FaDocker,
  FaCloudflare,
  FaKey,
  FaServer,
  FaLock,
  FaBug,
  FaUserShield,
  FaSync,
  FaShopify,
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaSalesforce,
  FaAtlassian,
} from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdSecurity, MdCloud, MdStorage } from "react-icons/md";
import { SiSnowflake, SiDatabricks, SiCisco } from "react-icons/si";
import { RiDatabase2Fill, RiArrowDropRightLine } from "react-icons/ri";
import { AiOutlineAntDesign } from "react-icons/ai";

// export let Services = [
//   {
//     svg: <GrAndroid />,
//     heading: "Custom Software Development",
//     paragraph:
//       "Elevate your business with our bespoke software development services.",
//   },
//   {
//     svg: <GrAndroid />,
//     heading: "Custom Software Development",
//     paragraph:
//       "Elevate your business with our bespoke software development services.",
//   },
//   {
//     svg: <GrAndroid />,
//     heading: "Custom Software Development",
//     paragraph:
//       "Elevate your business with our bespoke software development services.",
//   },
//   {
//     svg: <GrAndroid />,
//     heading: "Custom Software Development",
//     paragraph:
//       "Elevate your business with our bespoke software development services.",
//   },
//   {
//     svg: <GrAndroid />,
//     heading: "Custom Software Development",
//     paragraph:
//       "Elevate your business with our bespoke software development services.",
//   },
//   {
//     svg: <GrAndroid />,
//     heading: "Custom Software Development",
//     paragraph:
//       "Elevate your business with our bespoke software development services.",
//   },
//   {
//     svg: <GrAndroid />,
//     heading: "Custom Software Development",
//     paragraph:
//       "Elevate your business with our bespoke software development services.",
//   },
//   {
//     svg: <GrAndroid />,
//     heading: "Custom Software Development",
//     paragraph:
//       "Elevate your business with our bespoke software development services.",
//   },
// ];

export let company = [
  {
    heading: "About Us",
    paragraph: "The Journey Behind Cybertron’s Innovation",
  },
  {
    heading: "Careers",
    paragraph: "Meet, work & network with innovative minds",
  },
  {
    heading: "Innovation Hub",
    paragraph: "Finely-curated Latest Updates, Insights & Innovations ",
  },
  {
    heading: "Request a callback",
    paragraph: "Have Questions? We’re Here to Talk! ",
  },
];

export const categories = [
  {
    title: "Web & Software Development",
    items: [
      {
        name: "WordPress",
        icon: <FaWordpress />,
        desc: "The world's leading CMS for website creation.",
      },
      {
        name: "React | Angular | Vue.js",
        icon: <FaReact />,
        desc: "Powerful front-end frameworks for interactive web apps.",
      },
      {
        name: "Django | Laravel | Node.js",
        icon: <FaNodeJs />,
        desc: "Robust back-end frameworks for scalable software.",
      },
      {
        name: "GitHub | GitLab | Bitbucket",
        icon: <FaGithub  color="white"/>,
        desc: "Version control & collaboration for software development.",
      },
    ],
  },
  {
    title: "Cyber Security",
    items: [
      {
        name: "Cloudflare",
        icon: <FaCloudflare />,
        desc: "Website security, performance, and DDoS protection.",
      },
      {
        name: "Palo Alto Networks",
        icon: <FaShieldAlt />,
        desc: "Advanced network security solutions.",
      },
      {
        name: "Cisco Security",
        icon: <FaNetworkWired />,
        desc: "Enterprise-grade cybersecurity and threat management.",
      },
      {
        name: "Splunk | IBM QRadar",
        icon: <FaTools />,
        desc: "SIEM solutions for real-time threat detection.",
      },
      {
        name: "Fortinet | Check Point",
        icon: <FaShieldAlt />,
        desc: "Comprehensive firewall and endpoint security.",
      },
    ],
  },
  {
    title: "Online Reputation Management",
    items: [
      {
        name: "HubSpot",
        icon: <FaChartLine />,
        desc: "All-in-one inbound marketing, sales, and CRM platform.",
      },
      {
        name: "SEMrush | Ahrefs",
        icon: <FaChartLine />,
        desc: "SEO & content marketing powerhouse for visibility.",
      },
      {
        name: "Mailchimp | Klaviyo",
        icon: <FaEnvelope />,
        desc: "Email marketing and automation made it simple.",
      },
      {
        name: "Hootsuite | Buffer",
        icon: <FaTools />,
        desc: "Social media management & scheduling tools.",
      },
    ],
  },
];
export let services = [
  {
    title: "Consumer",
    items: [
      {
        name: "Personal Website & Portfolio Development",
        desc: "Build a professional online presence.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
      {
        name: "Custom Mobile & Web App Development",
        desc: "Tailored apps for productivity, fitness, or finance.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
      {
        name: "Online Reputation Protection ",
        desc: " Suppress negative content, manage search results.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
      {
        name: "Cybersecurity & Privacy Solutions",
        desc:
          "Secure personal data, set up VPNs, and remove online threats.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
      {
        name: "Cloud Backup & Digital Security",
        desc: " Protect personal files with encrypted cloud storage.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
      {
        name: "Social Media Management & Branding",
        desc: " Improve LinkedIn, Instagram, and personal branding.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
      {
        name: "Freelance & E-commerce Solutions",
        desc:
          "Website and digital store setup for independent professionals.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
    ],
  },
  {
    title: "Small Businesses",
    items: [
      {
        name: "Business Website & E-commerce Development",
        desc: "Scalable websites for sales and services",
        icon: <RiArrowDropRightLine size={25}/>,
      },
      {
        name: "Reputation & Review Management",
        desc: "Tailored apps for productivity, fitness, or finance.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
      {
        name: "Cybersecurity & IT Support",
        desc: "Firewall setup, malware protection, and IT troubleshooting.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
      {
        name: "Google My Business & Local SEO",
        desc:
          "Boost search rankings and local customer visibility.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
      {
        name: "Social Media & Digital Marketing",
        desc: " Reputation-driven content and engagement strategies.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
      {
        name: "Social Media Management & Branding",
        desc: " Improve LinkedIn, Instagram, and personal branding.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
      {
        name: "CRM & Business Automation",
        desc:"Streamline operations with tailored customer management tools.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
      {
        name: "Cloud & Data Backup Solutions",
        desc:"Protect critical business data from loss or breaches.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
    ],
  },
  {
    title: "Enterprises",
    items: [
      {
        name: "Enterprise Software Development & Integration",
        desc: "Custom ERP, CRM, and automation solutions.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
      {
        name: "Corporate Reputation Management & Crisis Handling",
        desc: "Monitor and protect brand image at scale.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
      {
        name: "Cybersecurity & Threat Intelligence",
        desc: "Advanced AI-driven security for data protection.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
      {
        name: "Cloud Infrastructure & DevOps Solutions",
        desc:"Scalable and secure cloud migration strategies.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
      {
        name: "Executive & Leadership Online Reputation Management ",
        desc: " Protect high-profile individuals.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
      {
        name: "Data Analytics & AI Solutions",
        desc: "Big data processing for strategic business decisions.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
      {
        name: "Enterprise IT Support & Managed Services",
        desc:"24/7 IT helpdesk, system maintenance, and compliance.",
        icon: <RiArrowDropRightLine size={25}/>,
      },
    
    ],
  },
];

export let product = [
  {
    title: "Web & Software Development",
    items: [
      {
        name: "E-Commerce Solutions",
        description:
          "Enterprise-grade e-commerce solutions - Shopify, Magento, WooCommerce, and BigCommerce",
        icon: <FaShoppingCart />,
      },
      {
        name: "Database Management",
        description: "MySQL, PostgreSQL, MongoDB, Microsoft SQL Server, Redis",
        icon: <FaDatabase />,
      },
      {
        name: "Cloud Hosting & Infrastructure",
        description:
          "Amazon Web Services (AWS), Microsoft Azure, Google Cloud, DigitalOcean",
        icon: <FaCloud />,
      },
      {
        name: "Containerization & DevOps",
        description: "Docker, Kubernetes, Terraform, Ansible",
        icon: <FaDocker />,
      },
    ],
  },
  {
    title: "Digital Marketing & SEO",
    items: [
      {
        name: "SEO & Analytics Tools",
        description: "Ahrefs, SEMrush, Moz, Ubersuggest",
        icon: <FaChartLine />,
      },
      {
        name: "Social Media Marketing & Management",
        description: "Hootsuite, Buffer, Sprout Social, Later",
        icon: <FaChartLine />,
        highlight: true,
      },
      {
        name: "Email Marketing & Automation",
        description: "Mailchimp, Klaviyo, ActiveCampaign, HubSpot",
        icon: <FaEnvelope />,
      },
    ],
  },
  {
    title: "Next-Gen Security",
    items: [
      {
        name: "Antivirus & Endpoint Security",
        description: "Bitdefender, Kaspersky, Norton, McAfee, Trend Micro",
        icon: <FaShieldAlt />,
      },
      {
        name: "VPN Services",
        description: "NordVPN, ExpressVPN, CyberGhost, Surfshark, ProtonVPN",
        icon: <FaKey />,
      },
      {
        name: "Firewalls & Network Security",
        description:
          "Palo Alto Networks, Fortinet, Cisco ASA, Sophos, Check Point",
        icon: <FaServer />,
      },
      {
        name: "Threat Detection & Response",
        description:
          "CrowdStrike Falcon, Microsoft Defender, SentinelOne, Trend Micro XDR",
        icon: <FaBug />,
      },
      {
        name: "Identity & Access Management (IAM)",
        description: "Okta, Microsoft Entra ID, Ping Identity, OneLogin",
        icon: <FaUserShield />,
      },
      {
        name: "Backup & Disaster Recovery",
        description: "Acronis, Veeam, Carbonite, Backblaze",
        icon: <FaSync />,
      },
    ],
  },
];

export let brands = [
  {
    name: "OpenAI",
    description: "AI that thinks and creates.",
    icon: <AiOutlineAntDesign className="text-blue-600 text-xl" />,
  },
  {
    name: "Snowflake",
    description: "Cloud-based data storage and analytics.",
    icon: <SiSnowflake className="text-blue-500 text-xl" />,
  },
  {
    name: "Databricks",
    description: "AI-powered big data platform.",
    icon: <SiDatabricks className="text-red-500 text-xl" />,
  },
  // { name: "ServiceNow", description: "Automating business workflows.", icon: <SiServicenow className="text-green-600 text-xl" /> },
  {
    name: "Shopify",
    description: "Easy online store creation.",
    icon: <FaShopify className="text-green-500 text-xl" />,
  },
  {
    name: "WooCommerce",
    description: "WordPress-based online selling.",
    icon: <FaWordpress className="text-purple-500 text-xl" />,
  },
  {
    name: "Norton",
    description: "Trusted antivirus and cybersecurity.",
    icon: <FaShieldAlt className="text-yellow-500 text-xl" />,
  },
  {
    name: "Webroot",
    description: "Lightweight antivirus protection.",
    icon: <MdSecurity className="text-green-600 text-xl" />,
  },
  {
    name: "McAfee",
    description: "Cybersecurity for personal and business use.",
    icon: <MdSecurity className="text-red-600 text-xl" />,
  },
  {
    name: "Bitdefender",
    description: "Advanced antivirus and security tools.",
    icon: <MdSecurity className="text-gray-700 text-xl" />,
  },
  {
    name: "Kaspersky",
    description: "Global cybersecurity and threat defense.",
    icon: <MdSecurity className="text-green-700 text-xl" />,
  },

  // Column 2
  {
    name: "Fortinet",
    description: "Strong cybersecurity for businesses.",
    icon: <FaShieldAlt className="text-red-600 text-xl" />,
  },
  {
    name: "Cisco Security",
    description: "Protecting networks from threats.",
    icon: <SiCisco className="text-blue-500 text-xl" />,
  },
  {
    name: "Check Point",
    description: "Advanced cyber threat defense.",
    icon: <MdSecurity className="text-pink-600 text-xl" />,
  },
  // { name: "NordVPN", description: "Private and secure internet browsing.", icon: <RiVpnLockFill className="text-blue-600 text-xl" /> },
  // { name: "ExpressVPN", description: "Fast, encrypted online protection.", icon: <RiVpnLockFill className="text-red-600 text-xl" /> },
  // { name: "CyberGhost", description: "Simple and safe VPN service.", icon: <RiVpnLockFill className="text-yellow-600 text-xl" /> },
  {
    name: "Google (Alphabet Inc.)",
    description: "Search, ads, AI, and more.",
    icon: <FaGoogle className="text-blue-500 text-xl" />,
  },
  {
    name: "Amazon Web Services (AWS)",
    description: "Cloud services powering the web.",
    icon: <FaAmazon className="text-yellow-500 text-xl" />,
  },
  {
    name: "IBM",
    description: "AI, cloud, and enterprise tech.",
    icon: <MdCloud className="text-blue-700 text-xl" />,
  },
  {
    name: "Oracle",
    description: "Business software and databases.",
    icon: <RiDatabase2Fill className="text-orange-600 text-xl" />,
  },
  {
    name: "Microsoft",
    description: "Software, cloud, and computing leader.",
    icon: <FaMicrosoft className="text-blue-700 text-xl" />,
  },

  // Column 3
  {
    name: "Adobe",
    description: "Creative tools for design and media.",
    icon: <AiOutlineAntDesign className="text-red-500 text-xl" />,
  },
  {
    name: "Salesforce",
    description: "The leader in CRM software.",
    icon: <FaSalesforce className="text-blue-400 text-xl" />,
  },
  {
    name: "SAP",
    description: "Enterprise business management software.",
    icon: <MdStorage className="text-yellow-600 text-xl" />,
  },
  {
    name: "Atlassian",
    description: "Tools for team collaboration.",
    icon: <FaAtlassian className="text-blue-600 text-xl" />,
  },
  {
    name: "GitHub",
    description: "Code storage and collaboration.",
    icon: <FaGithub className="text-gray-700 text-xl" />,
  },
  {
    name: "Zendesk",
    description: "Customer support software solutions.",
    icon: <MdCloud className="text-green-500 text-xl" />,
  },
  // { name: "Surfshark", description: "Affordable, reliable VPN service.", icon: <RiVpnLockFill className="text-teal-500 text-xl" /> },
  // { name: "CrowdStrike", description: "AI-driven cybersecurity protection.", icon: <SiCrowdstrike className="text-red-500 text-xl" /> },
  {
    name: "Microsoft Defender",
    description: "Built-in Windows security software.",
    icon: <FaMicrosoft className="text-blue-700 text-xl" />,
  },
  {
    name: "SentinelOne",
    description: "Automated threat detection and response.",
    icon: <MdSecurity className="text-red-600 text-xl" />,
  },
  {
    name: "Trend Micro XDR",
    description: "Cyber threat detection across systems.",
    icon: <MdSecurity className="text-gray-700 text-xl" />,
  },
];
