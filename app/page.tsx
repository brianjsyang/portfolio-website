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


export default function Home() {
  return (
    <main className="bg-background">
      <section className="pt-36 pb-10 px-5">
        <h1 className="font-title text-8xl text-center text-primary leading-normal">Hello, I&apos;m Brian.</h1>
        <h1 className="font-title text-8xl text-center text-primary leading-normal">Web Developer in Vancouver</h1>
        <h2 className="font-title text-5xl text-center text-secondary leading-normal">Aspiring to become a Full Stack one day!</h2>
      </section>
      

      <section className="container-xl py-60">
        <h6 className="font-body text-2xl text-center text-paragraph leading-normal">The website is currently underconstruction. Please come back again later!</h6>
      </section>

      <footer className="bg-primary p-10 mt-20">
        {/* Convert this to an array so i dont have to add css for each one. */}
        <a className="text-center font-body text-background block w-min m-auto" href="https://www.brianjsyang.ca">brianjsyang.ca</a> {/* Add website icon? */}
        <a className="text-center font-body text-background block w-min m-auto" href="https://www.linkedin.com/in/brianjsyang/">linkedin.com/in/brianjsyang</a> {/* Add a LinkedIn Icon */}
        <a className="text-center font-body text-background block w-min m-auto" href="https://github.com/brianjsyang/">brianjsyang</a> {/* TODO: Add a Github icon before the name */}
      </footer>
    </main>
  )
}