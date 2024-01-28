/**
 * Display each project in a card layout
 */
import { Project } from "@/app/lib/definitions";
import Image from 'next/image'

export default function ProjectBlock({ project }: { project: Project;}) {
  let alt_string = `${project.name} screenshot`;

  return (
    <div className="flex flex-col -mx-3 sm:mx-0 lg:flex-row min-h-card lg:min-h-card-lg justify-between column-2 shadow-card border-solid border-off-white rounded-20 overflow-hidden bg-[#FFFFFF] ">
      <div className="lg:w-1/2 xl:w-2/3 lg:order-2">
        {/* For now, just use the first image. */}
        <Image className="h-full min-h-60 w-full object-cover" src={project.imgPath[0]} alt={alt_string} width="1300" height="800" priority={true} />
      </div>

      <div className="lg:w-1/2 xl:w-1/3 lg:order-1 py-10 px-7 sm:p-10 md:p-12 xl:p-14">
        <h2 className="font-title text-paragraph text-xl pb-1">{project.name}</h2>
        <h4 className="font-body text-secondary text-lg pb-5">{project.source}</h4>

        <ul className="pb-5">
          {project.desc.map((value, index) => (
            <li className="font-body text-paragraph list-disc ml-5 mb-2" key={index}>{value}</li>
          ))}
        </ul>

        <a className="font-body text-lg w-min mt-5 underline text-accent" href={project.url} target="_blank">Link to the project</a>
      </div>
    </div>
  )
}

  /**
   * Some ideas
   * 1. Each project is displayed as card style... with shadow drop
   * 2. left text, right img
   * 3. Detect source and replace with company icon + company name
   * 
   * Ambitious ideas
   * 1. Make the right image a slider
   */