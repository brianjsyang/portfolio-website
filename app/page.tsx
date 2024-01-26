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
  },
  { // Suzanne Pennell Website
    name: 'Suzanne Pennell Realtor Website',
    url: 'https://www.suzannepennell.com/',
    source: 'Brixwork',
    imgPath: ['/suzannepennell/1.png'],
  }
]


export default function Home() {
  return (
    <main className="bg-background">
      <section className="pt-36 pb-10 px-10">
        <h1 className="font-title text-4xl md:text-6xl lg:text-8xl text-center text-primary md:leading-normal">Hello, I&apos;m Brian.</h1>
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