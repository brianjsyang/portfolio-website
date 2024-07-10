import { Project, Experience } from "@/app/lib/definitions"

// define all of my projects here
export const projects: Project[] = [
  { // North Shore Real Estate Team
    name: 'North Shore Real Estate Team',
    url: 'https://www.northshorerealestateteam.com/',
    source: 'Brixwork',
    imgPath: ['/northshoreteam/1.png'],
    desc: [
      'PHP, JavaScript, Bootstrap, AJAX, MySQL',
      'Unique search form that looks like sentences',
      'Community pages with Google Maps integration to draw city polygons',
      'Various JavaScript animations across the pages',
    ]
  },
  { // Karim Bhatia Project
    name: 'Karim Bhatia Realtor Website',
    url: 'https://www.karimbhatia.com/',
    source: 'Brixwork',
    imgPath: ['/karimbhatia/1.png'],
    desc: [
      'PHP, JavaScript, Bootstrap, AJAX, MySQL',
      'Custom-designed website tailored to client\'s brand',
      'Various JavaScript animations across the pages',
    ]
  },
  { // Anthonly Drlje Website
    name: 'Anthony Drlje Realtor Website',
    url: 'https://www.anthonydrlje.com/',
    source: 'Brixwork',
    imgPath: ['/anthonydrlje/1.png'],
    desc: [
      'PHP, JavaScript, Bootstrap, AJAX, mySQL',
      'Fully custom-designed website',
      'Full Screen Nav',
      'Plenty of JavaScript animations and interactions',
      'Categorized list & search listings list using SQL queries',
    ]
  },
  { // Suzanne Pennell Website
    name: 'Suzanne Pennell Realtor Website',
    url: 'https://www.suzannepennell.com/',
    source: 'Brixwork',
    imgPath: ['/suzannepennell/1.png'],
    desc: [
      'PHP, JavaScript, Bootstrap, AJAX, mySQL',
      'Semi custom-designed website',
      'Letter by letter animation - responsive as well',
      'Categorized list & search listings list using SQL queries',
    ]
  },
  { // East Gate Psych WordPrss Website
    name: 'Eastgate Psychological Services',
    url: 'https://www.eastgatepsych.ca/',
    source: 'Freelance',
    imgPath: ['/eastgatepsych/1.png'],
    desc: [
      'WordPress, CSS',
      'Custom design theme built from scratch using Gutenberg',
      'Custom Javascript animations & interactions',
      'Minimal dependency on plugins, except for form and essential security plugins',
      'Managed end-to-end, from domain management to Bluehost configuration and post-launch maintenance.'
    ]
  },
  { // Yugafu Japanese Bistro Website
    name: 'Yugafu Japanese Bistro',
    url: 'https://www.yugafujapanesebistro.ca/',
    source: 'Freelance',
    imgPath: ['/yugafu/1.png'],
    desc: [
      'React, Bootstrap',
      'Simple single page application',
      'Infinite slideshow testimonials',
      'Managed end-to-end, from domain management to Vercel hosting configuration, and post-launch maintenance.'
    ],
  },
  { // eSantoor Shopify website
    name: 'eSantoor Digital Strings',
    url: 'https://esantoor.com/',
    source: 'Freelance',
    imgPath: ['/esantoor/1.png'],
    desc: [
      'Shopify',
      'Create features and styles using Liquid',
      'Multi-language feature where orientation of the language changes from left-aligned (English) to right-aligned (Farsi)',
    ]
  }
]


// list of past experiences.
export const experiences: Experience[] = [
  { // Brixwork Experience
      'company': 'Brixwork Real Estate Marketing',
      'jobTitle': 'Front End Developer',
      'duration': 'March 2022 - Present',
      'desc' : [
        'Took initiative and spearheaded a 6-month project to rebuild the client-facing admin portal from ground up in collaboration with the design team.',
        'Assumed responsibility of a Full Stack Dev, and executed both frontend and backend rewrite to enhance portal functionality.',
        'Successfully implemented role-based access controls and integrated various security features to ensure robust data protection.',
        'Maintained and upgraded MLS® sync feature which consisted of AJAX, data manipulation techniques, DB optimization and PHP scripts.',
        'Constructed websites according to the specifications provided by the design team and the clients, meeting project deadlines.',
        'Installed and developed Wordpress blog and essential security plugins on the existing client websites.',
        'Demonstrated proficiency in QA processes, consistently minimizing the need for extra QA work.',
      ],
  },
  { // Freelance Experience
      'company': 'Freelance',
      'jobTitle': 'Web Developer',
      'duration': 'November 2022 - Present',
      'desc': [],
  }
]