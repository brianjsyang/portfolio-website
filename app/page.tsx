/**
 * Just building simple layout - mostly focusing on showing off the project I have worked on so far.
 * 
 * Tailwind default breakpoints
 * sm: 640px
 * md: 768px
 * lg: 1024px
 * xl: 1280px
 * 2xl: 1536px
 * 
 * note: Build failed due to not-escaped apostrophe ... need to be more careful about that
 */
import FooterBlock from "@/app/ui/footer"
import ProjectBlock from "@/app/ui/project-block"
import { Project } from "@/app/lib/definitions"


// define all of my projects here
const projects: Project[] = [
  { // Anthonly Drlje Website
    name: 'Anthony Drlje Realtor Website',
    url: 'https://www.anthonydrlje.com/',
    source: 'Brixwork',
    imgPath: ['/anthonydrlje/1.png'],
    desc: [
      'PHP, JavaScript, Bootstrap, AJAX, mySQL',
      'Fully custom-designed website',
      'Full Screen Nav',
      'Plenty JavaScript animations and interactions',
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
  }
]


const coverLetterContent = '';

export default function Home() {
  return (
    <main className="bg-background">
      <section className="pt-36 pb-10 px-10">
        <h1 className="font-title text-4xl md:text-6xl lg:text-8xl text-center text-primary md:leading-normal">Hello, <a href="https://www.linkedin.com/in/brianjsyang/" target="_blank" className="underline">I&apos;m Brian.</a></h1>
        <h1 className="font-title text-4xl md:text-6xl lg:text-8xl text-center text-primary md:leading-normal">Web Developer in Vancouver</h1>
      </section>
      

      <section className="xl:container pt-32 pb-20 px-8 md:px-16 lg:pt-52 lg:px-32">
        <h2 className="font-title text-2xl lg:text-3xl text-primary leading-normal pb-10">Here are quick overview of my past projects!</h2>

        <div className="flex flex-col gap-y-10 lg:gap-y-20">
          { // Loop through the project array and display all of them!
            projects.map((eachProject, key) => (
              <ProjectBlock project={eachProject} key={key}/>
            ))
          }
        </div>

        <h4 className="font-body text-xl text-secondary pt-20">Obviously, there are more ... I would love to talk about them in person! (or on the phone)</h4>

        {/* Cover Letter Section */}
        <h2 className="font-title text-2xl lg:text-3xl text-primary leading-normal pb-10 pt-20 lg:pt-32">More about me...</h2>
        <p className="font-body text-paragraph pb-5 leading-relaxed lg:w-2/3">
          I take pride in translating designers&apos; visions into real and interactive experiences. My attention to detail not only brings their creative work to life but also results in minimal QA time. I am appreciative of the nuanced points highlighted by designers, and I consistently strive to exceed their expectations.
        </p>
        <p className="font-body text-paragraph pb-5 leading-relaxed lg:w-2/3">
          I played a pivotal role in the comprehensive upgrade of the client admin portal where I served as the Full Stack developer. The admin portal was mostly built with PHP and AJAX for the backend/server and Bootstrap 5 and jQuery for the frontend. One of the project&apos;s key accomplishments was the implementation of a role-based access control system. I successfully designed and integrated this system by assessing technical requirements and keeping user experience in mind. The integration with the database was another critical aspect of the project, where most of my time was spent in optimizing queries and establishing seamless communication between the application and the database.
        </p>
        <p className="font-body text-paragraph pb-5 leading-relaxed lg:w-2/3">
          Also, I have often been entrusted with responsibilities that extend beyond the typical scope of a Front End Developer such as onboarding new developers, system design and security.
        </p>
        <p className="font-body text-paragraph pb-5 leading-relaxed lg:w-2/3">
          Ideally, I aspire to work within a team where peer code reviews are regular. I believe that engaging in discussions with experienced peers is a fundamental aspect of skill enhancement.
        </p>
      </section>

      {/**
       * After the projects, display my cover letter
       * Comfortable languges? 
       * 
       * Also show the tools I used for this website, showing interest in learning new things,
       * Always on the lookout for the new and modern stuff
       * Framework:
       * 1. Next.js
       * 2. TailWindCss
       * 3. Anime.js?
       * 
       * Tools used 
       * 1. Font Pair
       * 2. Real Time Colors
       */}
      
      <FooterBlock />
    </main>
  )
}