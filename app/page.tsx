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
import Projects from "@/app/ui/project"
import CoverLetter from "@/app/ui/cover-letter"
import Resume from "@/app/ui/resume"


export default function Home() {
  return (
    <main>
      <section className="pt-36 lg:pt-56 pb-10 px-10">
        <h1 className="font-title text-4xl leading-normal md:text-6xl md:leading-normal lg:text-8xl lg:leading-normal text-center text-primary">Hello, <a href="https://www.linkedin.com/in/brianjsyang/" target="_blank" className="underline">I&apos;m Brian.</a></h1>
        <h1 className="font-title text-4xl leading-normal md:text-6xl md:leading-normal lg:text-8xl lg:leading-normal text-center text-primary">Web Developer in Vancouver</h1>
      </section>
      
      <section className="2xl:container pt-32 pb-20 px-8 md:px-16 lg:pt-52 lg:px-24 xlg:px-32 2xl:px-44">
        <div className="md:max-w-screen-md md:m-auto lg:max-w-full lg:m-0">
          {/* Projects Section */}
          <Projects />

          {/* Cover Letter Section */}
          <CoverLetter />

          {/* Work History Section */}
          <Resume />
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