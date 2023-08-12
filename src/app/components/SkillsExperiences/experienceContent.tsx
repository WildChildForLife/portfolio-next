import { IconsMappedType } from "@/app/fragments/Icon/IconTypes";
import { ExperienceType } from "@/app/components/SkillsExperiences/ExperienceTypes";

export const availableIcons = [
    'AWS',
    'Load-Reduction',
    'WordPress',
    'Joomla',
    'Animation',
    'Photoshop',
    'UI-Mockup',
    'UI-Integration',
    'E-Commerce',
    'Spam-Prevention',
    'DMARC',
    'DKIM',
    'SPF',
    'Basic-Authentication',
    'UI',
    'Mailing-System',
    'Coding',
    'Business-Operations',
    'Client-Communication',
    'UI/UX',
    'CEO',
    'jQuery',
    'Client-Acquisition',
    'Product-Showcase',
    'Recruitment',
    'Training',
    'Mentorship',
    'Technical-Risks',
    'Performance-Optimization',
    'QA-Guidance',
    'Technology-Trend',
    'Data-Security',
    'Data-Validation',
    'Deployment',
    'Resource-Management',
    'Delivery',
    'Project-Management',
    'Innovation',
    'Technical-Leadership',
    'Business-Goals',
    'Technology-Strategy',
    'Troubleshooting',
    'Problem-Solving',
    'Data-Analytics',
    'Infrastructure',
    'Front-End',
    'API',
    'Load-Balancing',
    'Security-Tokens',
    'Security-Protocols',
    'Design',
    'OpenID',
    'oAuth2',
    'Identity-Provider',
    'CI/CD',
    'Documentation',
    'Solution-Architecture',
    'OWASP',
    'Best-Practices',
    'NodeJS',
    'Angular',
    'React',
    'PHP',
    'Symfony',
    'Docker',
    'Jenkins',
    'Git',
    'Twig',
    'CSS',
    'CSS3',
    'HTML',
    'HTML5',
    'Javascript',
    'MySQL',
    'MongoDB',
    'ElasticSearch',
    'Solr'
] as const;

export const mappedTagsIcons: IconsMappedType = {
    'AWS': {
        code: 'FaAws',
        name: 'AWS',
        type: 'fa',
    },
    'Load-Reduction': {
        code: 'AiOutlineLoading3Quarters',
        name: 'Load Reduction',
        type: 'ai'
    },
    'WordPress': {
        code: 'FaWordpress',
        name: 'WordPress',
        type: 'fa'
    },
    'Joomla': {
        code: 'FaJoomla',
        name: 'Joomla',
        type: 'fa'
    },
    'Animation': {
        code: 'MdAnimation',
        name: 'Animation',
        type: 'md'
    },
    'Photoshop': {
        code: 'SiAdobephotoshop',
        name: 'Photoshop',
        type: 'si'
    },
    'UI-Mockup': {
        code: 'VscSymbolInterface',
        name: 'UI Mockup',
        type: 'vsc'
    },
    'UI-Integration': {
        code: 'GrIntegration',
        name: 'UI Integration',
        type: 'gr'
    },
    'E-Commerce': {
        code: 'FaBasketShopping',
        name: 'E-Commerce',
        type: 'fa6'
    },
    'Spam-Prevention': {
        code: 'RiSpam2Fill',
        name: 'Spam Prevention',
        type: 'ri'
    },
    'DMARC': {
        code: 'AiFillFileMarkdown',
        name: 'DMARC',
        type: 'ai'
    },
    'DKIM': {
        code: 'AiFillTrademarkCircle',
        name: 'DKIM',
        type: 'ai'
    },
    'SPF': {
        code: 'FaMailBulk',
        name: 'SPF',
        type: 'fa'
    },
    'Basic-Authentication': {
        code: 'SiAuth0',
        name: 'Basic Authentication',
        type: 'si'
    },
    'UI': {
        code: 'VscSymbolInterface',
        name: 'UI',
        type: 'vsc'
    },
    'Mailing-System': {
        code: 'AiFillMail',
        name: 'Mailing System',
        type: 'ai'
    },
    'Coding': {
        code: 'FaCode',
        name: 'Coding',
        type: 'fa'
    },
    'Business-Operations': {
        code: 'MdOutlineBusinessCenter',
        name: 'Business Operations',
        type: 'md'
    },
    'Client-Communication': {
        code: 'AiOutlineComment',
        name: 'Client Communication',
        type: 'ai'
    },
    'UI/UX': {
        code: 'AiOutlineExperiment',
        name: 'UI/UX',
        type: 'ai'
    },
    'CEO': {
        code: 'MdLeaderboard',
        name: 'CEO',
        type: 'md'
    },
    'jQuery': {
        code: 'BiLogoJquery',
        name: 'jQuery',
        type: 'bi'
    },
    'Client-Acquisition': {
        code: 'FaAcquisitionsIncorporated',
        name: 'Client Acquisition',
        type: 'fa'
    },
    'Product-Showcase': {
        code: 'FaProductHunt',
        name: 'Product Showcase',
        type: 'fa'
    },
    'Recruitment': {
        code: 'BsPersonAdd',
        name: 'Recruitment',
        type: 'bs'
    },
    'Training': {
        code: 'MdModelTraining',
        name: 'Training',
        type: 'md'
    },
    'Mentorship': {
        code: 'FaElementor',
        name: 'Mentorship',
        type: 'fa'
    },
    'Technical-Risks': {
        code: 'BsBracesAsterisk',
        name: 'Technical Risks',
        type: 'bs'
    },
    'Performance-Optimization': {
        code: 'CgPerformance',
        name: 'Performance Optimization',
        type: 'cg'
    },
    'QA-Guidance': {
        code: 'MdHighQuality',
        name: 'QA Guidance',
        type: 'md'
    },
    'Technology-Trend': {
        code: 'BiTrendingUp',
        name: 'Technology Trend',
        type: 'bi'
    },
    'Data-Security': {
        code: 'GrShieldSecurity',
        name: 'Data Security',
        type: 'gr'
    },
    'Data-Validation': {
        code: 'GrValidate',
        name: 'Data Validation',
        type: 'gr'
    },
    'Deployment': {
        code: 'GrDeploy',
        name: 'Deployment',
        type: 'gr'
    },
    'Resource-Management': {
        code: 'GrResources',
        name: 'Resources Management',
        type: 'gr'
    },
    'Delivery': {
        code: 'CiDeliveryTruck',
        name: 'Delivery',
        type: 'ci'
    },
    'Project-Management': {
        code: 'GoProjectRoadmap',
        name: 'Project Management',
        type: 'go'
    }, 
    'Innovation': {
        code: 'GiBrainstorm',
        name: 'Innovation',
        type: 'gi'
    },
    'Technical-Leadership': {
        code: 'MdOutlineLeaderboard',
        name: 'Technical Leadership',
        type: 'md'
    },
    'Business-Goals': {
        code: 'GoGoal',
        name: 'Business Goals',
        type: 'go'
    },
    'Technology-Strategy': {
        code: 'PiStrategyFill',
        name: 'Technology Strategy',
        type: 'pi'
    },
    'Troubleshooting': {
        code: 'GrTroubleshoot',
        name: 'Troubleshooting',
        type: 'gr'
    },
    'Problem-Solving': {
        code: 'MdReportProblem',
        name: 'Problem Solving',
        type: 'md'
    },
    'Data-Analytics': {
        code: 'GrAnalytics',
        name: 'Data Analytics',
        type: 'gr'
    },
    'Infrastructure': {
        code: 'BiServer',
        name: 'Infrastructure',
        type: 'bi'
    },
    'Front-End': {
        code: 'SiFrontendmentor',
        name: 'Front-End',
        type: 'si'
    },
    'API': {
        code: 'AiFillApi',
        name: 'API',
        type: 'ai'
    },
    'Load-Balancing': {
        code: 'FaBalanceScaleRight',
        name: 'Load Balancing',
        type: 'fa'
    },
    'Security-Tokens': {
        code: 'RiTokenSwapFill',
        name: 'Security Tokens',
        type: 'ri'
    },
    'Security-Protocols': {
        code: 'SiHandshakeProtocol',
        name: 'Security Protocols',
        type: 'si'
    },
    'Design': {
        code: 'MdOutlineDesignServices',
        name: 'Design',
        type: 'md'
    },
    'OpenID': {
        code: 'FaOpenid',
        name: 'OpenID',
        type: 'fa'
    },
    'oAuth2': {
        code: 'SiAuth0',
        name: 'OAuth2',
        type: 'si'
    },
    'Identity-Provider': {
        code: 'MdPermIdentity',
        name: 'Identity Provider',
        type: 'md'
    },
    'CI/CD': {
        code: 'RiLoopLeftLine',
        name: 'CI/CD',
        type: 'ri'
    },
    'Documentation': {
        code: 'GrDocumentCloud',
        name: 'Documentation',
        type: 'gr'
    },
    'Solution-Architecture': {
        code: 'MdOutlineArchitecture',
        name: 'Solution Architecture',
        type: 'md'
    },
    'OWASP': {
        code: 'SiOwasp',
        name: 'OWASP',
        type: 'si'
    },
    'Best-Practices': {
        code: 'AiOutlineCheckCircle',
        name: 'Best Practices & Standards',
        type: 'ai'
    },
    'NodeJS': {
        code: 'FaNodeJs',
        name: 'NodeJS',
        type: 'fa'
    },
    'Angular': {
        code: 'FaAngular',
        name: 'Angular',
        type: 'fa'
    },
    'React': {
        code: 'FaReact',
        name: 'React',
        type: 'fa'
    },
    'PHP': {
        code: 'FaPhp',
        name: 'PHP',
        type: 'fa'
    },
    'Symfony': {
        code: 'FaSymfony',
        name: 'Symfony',
        type: 'fa'
    },
    'Docker': {
        code: 'SiDocker',
        name: 'Docker',
        type: 'si'
    },
    'Jenkins': {
        code: 'FaJenkins',
        name: 'Jenkins',
        type: 'fa'
    }, 
    'Git': {
        code: 'FaGitAlt',
        name: 'Git',
        type: 'fa'
    },
    'Twig': {
        code: 'SiBitwig',
        name: 'Twig',
        type: 'si'
    },
    'CSS': {
        code: 'DiCssTricks',
        name: 'CSS',
        type: 'di'
    },
    'CSS3': {
        code: 'DiCssTricks',
        name: 'CSS3',
        type: 'di'
    },
    'HTML': {
        code: 'PiFileHtmlDuotone',
        name: 'HTML',
        type: 'pi'
    },
    'HTML5': {
        code: 'DiHtml5',
        name: 'HTML5',
        type: 'di'
    },
    'Javascript': {
        code: 'SiJavascript',
        name: 'JavaScript',
        type: 'si'
    },
    'MySQL': {
        code: 'GrMysql',
        name: 'MySQL',
        type: 'gr'
    },
    'MongoDB': {
        code: 'SiMongodb',
        name: 'MongoDB',
        type: 'si'
    },
    'ElasticSearch': {
        code: 'SiElasticsearch',
        name: 'ElasticSearch',
        type: 'si'
    },
    'Solr': {
        code: 'SiApachesolr',
        name: 'Solr',
        type: 'si'
    }
}

export const experiences: ExperienceType[] = [{
    name: 'Cognizant',
    icon: 'cognizant.svg',
    role: 'Sr. Web Architect',
    time: '2020 - Current',
    description: [
        'Managed various projects for clients like BNP Paribas, TotalEnergies, EI-Technologies, and Grassavoye (WTW) as a Sr. Manager / Solution Architect at Cognizant.',
        'Led a Scrum Team in building a financial system for BNP Paribas using Angular and Java, ensuring adherence to best practices and scalability.',
        'Conducted technology cartography, system integration, and workload assessment for proposed solutions on pre-sales for TotalEnergies and EI-Technologies.',
        'Integrated Salesforce ecosystem with a NodeJS backend and React frontend, hosted on AWS for EI-Technologies.',
        'Designed an offline Angular app for Grassavoye that communicated via Bluetooth, prioritizing data security with encryption and secure protocols.',
        'Managed and coached teams horizontally, handling recruitment and preparing technical tests for new hires.',
        'Demonstrated expertise in various technologies, architectural design, and best practices, delivering innovative and robust solutions to clients.'
    ],
    skills: [
        'AWS', 
        'Solution-Architecture',
        'OWASP', 
        'Resource-Management', 
        'Best-Practices',
        'Recruitment',
        'Documentation',
        'Innovation',
        'CI/CD',
    ]
}, {
    name: 'Le Groupe La Poste',
    icon: 'laposte.svg',
    role: 'Technical Lead Full-Stack / Architect',
    time: '2018 - 2020',
    description: [
        'Led the development of a V3 authentication ecosystem with a focus on building an Identity Provider (IdP) using NodeJS, oAuth2, and OpenID Connect.',
        'Spearheaded the architectural design discussions, defining the interaction flows, token exchange mechanisms, and security protocols for the IdP.',
        'Led the NodeJS development team, implementing robust authentication and token generation logic adhering to oAuth2 and OpenID Connect standards.',
        'Oversaw the integration of the Identity Provider with Kubernetes, utilizing Docker for containerization and efficient application management.',
        'Ensured the implementation of secure authentication flows, including handling authorization codes, refresh tokens, and token revocation to address security challenges.',
        'Designed the Identity Provider to scale horizontally to accommodate the large user base of Le Groupe La Poste and implemented load balancing mechanisms for even traffic distribution.'
    ],
    skills: [
        'Identity-Provider',
        'NodeJS',
        'PHP',
        'Symfony',
        'oAuth2',
        'OpenID',
        'Design',
        'Security-Protocols',
        'Security-Tokens',
        'Docker',
        'Load-Balancing'
    ]
}, {
    name: 'Amundi Asset Mngmnt',
    icon: 'amundi.svg',
    role: 'Sr. Web Application Developer',
    time: '2017 - 2018',
    description: [
        'Full-Stack Web Development: Using PHP with Symfony 3 framework, I contributed to the end-to-end development of the distributed financial asset management application.',
        'Database Management: Proficiently working with MySQL, ElasticSearch, and Solr to optimize data storage, retrieval, and search functionalities.',
        'API Development: Creating robust and efficient RESTful APIs to facilitate seamless communication between different components of the application.',
        'Front-End Technologies: Implementing dynamic user interfaces using Twig, CSS, and JavaScript to enhance user experience and interactivity.',
        'Infrastructure and Deployment: Managing the infrastructure and implementing efficient deployment processes for the application.',
        'Continuous Integration and Continuous Deployment (CI/CD): Using Jenkins and best practices to automate testing, integration, and deployment pipelines.',
        'Best Practices: Employing industry best practices for code quality, security, and performance optimization.',
        'Collaboration: Collaborating with cross-functional teams, including designers, project managers, and business stakeholders, to ensure successful project delivery.',
        'Performance Optimization: Implementing advanced techniques to optimize the application\'s performance and response times.',
        'Data Analytics and Reporting: Developing features for data analytics and generating comprehensive reports for financial asset management.',
        'Version Control: Using Git for efficient version control and code collaboration within the development team.',
        'Problem-Solving and Troubleshooting: Diagnosing and resolving technical issues to ensure the application\'s stability and reliability.',
        'Documentation: Creating detailed technical documentation for various components of the application.'
    ],
    skills: [
        'Git',
        'PHP', 
        'Symfony',
        'MySQL',
        'ElasticSearch',
        'Solr',
        'API',
        'Front-End',
        'Infrastructure',
        'CI/CD',
        'Best-Practices',
        'Performance-Optimization',
        'Data-Analytics',
        'Problem-Solving',
        'Troubleshooting',
        'Documentation'
    ]
}, 
{
    name: 'Antipodes-M',
    icon: 'antipodes.svg',
    role: 'CTO',
    time: '2014 - 2016',
    description: [
        "Developing and executing the company's technology strategy aligned with business goals.",
        "Providing technical leadership and fostering a culture of innovation and collaboration.",
        "Overseeing project management, ensuring timely and budget-compliant project delivery.",
        "Recruiting and managing technical resources for project teams.",
        "Managing the company's IT infrastructure and optimizing deployment processes.",
        "Ensuring adherence to industry best practices, coding standards, and data security protocols.",
        "Evaluating and managing technology vendors and third-party service providers.",
        "Collaborating with clients to understand requirements and provide technical expertise.",
        "Staying updated with the latest technological trends and innovations.",
        "Collaborating on budget allocation for technology projects.",
        "Ensuring data security, privacy compliance, and disaster recovery planning.",
        "Documenting technical processes and maintaining quality assurance.",
        "Identifying areas for performance optimization in systems and applications.",
        "Mitigating potential technical risks and developing risk mitigation strategies.",
        "Exploring partnerships and collaborations to expand the company's offerings.",
        "Evaluating emerging technologies for potential impact on products and services.",
        "Ensuring compliance with relevant technology-related regulations.",
        "Providing mentorship, training, and professional development for the technical team.",
    ],
    skills: [
        'Technology-Strategy',
        'Business-Goals',
        'Technical-Leadership',
        'Innovation',
        'Project-Management',
        'Delivery',
        'Resource-Management',
        'Infrastructure',
        'Deployment',
        'Best-Practices',
        'Data-Security',
        'Technology-Trend',
        'Documentation',
        'QA-Guidance',
        'Performance-Optimization',
        'Technical-Risks',
        'Mentorship',
        'Training',
        'Recruitment'
    ]
},
{
    name: 'Neo-Data',
    icon: 'neo-data.png',
    role: 'PHP Web Developer',
    time: '2012 - 2014',
    description: [
        "Developed a dynamic campaign ad mail system at Neo-Data, enabling clients to design and schedule email campaigns with personalized content based on user interactions and preferences.",
        "Built the back-end of the ad mail system using a home-made PHP framework, creating APIs for client authentication, email list management, and content personalization based on user data stored in the MySQL database.",
        "Integrated the front-end with the back-end, allowing clients to design email templates using HTML, CSS, and dynamic placeholders for personalized content. Implemented real-time validation and improved user interaction using JavaScript and jQuery.",
        "Implemented features for clients to schedule campaigns for specific dates and times, along with reporting functionalities to track email open rates, click-through rates, and other key performance indicators (KPIs).",
        "Addressed scalability and performance challenges by optimizing database queries, implementing caching mechanisms, and fine-tuning the server infrastructure.",
        "Improved email deliverability by integrating SPF, DKIM, and DMARC authentication protocols. Implemented spam prevention measures to ensure compliance with anti-spam regulations."
    ],
    skills: [
        'Mailing-System',
        'UI',
        'PHP',
        'API',
        'Basic-Authentication',
        'MySQL',
        'HTML',
        'CSS',
        'Data-Validation',
        'Javascript',
        'jQuery',
        'SPF',
        'DKIM',
        'DMARC',
        'Spam-Prevention'
    ]
},
{
    name: 'HighDesign',
    icon: 'highdesign.png',
    role: 'CEO',
    time: '2011 - 2013',
    description: [
        "Led the development of a corporate website for a manufacturing company at HighDesign, focusing on showcasing products, services, capabilities, and commitment to innovation.",
        "Acquired the client by presenting services and gathering specific website requirements through detailed discussions as the CEO.",
        "Designed and developed the website's front-end using HTML, CSS, and jQuery, ensuring a user-friendly interface and appealing aesthetics.",
        "Maintained open communication with the client throughout the development process, seeking feedback, and iteratively incorporating suggestions for client satisfaction.",
        "Managed time and resources effectively as a one-person team, setting realistic timelines and prioritizing tasks for timely delivery.",
        "Balanced business operations and coding responsibilities by delegating non-technical tasks, allowing a focus on the technical aspects of the project.",
    ],
    skills: [
        'Product-Showcase',
        'Client-Acquisition',
        'HTML',
        'CSS',
        'Javascript',
        'MySQL',
        'jQuery',
        'CEO',
        'UI/UX',
        'Client-Communication',
        'Business-Operations',
        'Coding'
    ]
},
{
    name: 'Actisens',
    icon: 'actisens.svg',
    role: 'Front-End Developer',
    time: '2010 - 2012',
    description: [
        "Developed an E-Commerce website for a high-end fashion boutique at Actisens, aiming for a visually stunning and user-friendly platform to showcase products and facilitate online purchases.",
        "Translated complex UI mockups into pixel-perfect web pages using HTML and CSS, ensuring the website reflected the boutique's brand identity and maintained consistency.",
        "Implemented a jQuery-powered interactive product showcase, enabling users to view product details and zoom in on images for a closer look, with smooth transitions and animations for an enhanced user experience.",
        "Integrated the website with the Joomla content management system, allowing boutique staff to efficiently manage product inventory, update content, and process orders.",
        "Addressed the challenge of performance optimization by optimizing image file sizes without compromising quality and using CSS sprites, minified JavaScript, and CSS files to reduce load times."
    ],
    skills: [
        'E-Commerce',
        'UI-Integration',
        'UI-Mockup',
        'Photoshop',
        'Javascript',
        'MySQL',
        'jQuery',
        'PHP',
        'HTML',
        'CSS',
        'Animation',
        'Joomla',
        'WordPress',
        'Load-Reduction'
    ]
}];