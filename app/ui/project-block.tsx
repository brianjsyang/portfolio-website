import { Project } from "@/app/lib/definitions";
import Image from 'next/image'

export default function ProjectBlock({ project }: { project: Project;}) {
  let alt_string = `${project.name} screenshot`;

  return (
    <div className="flex flex-col lg:flex-row min-h-card lg:min-h-card-lg justify-between column-2 shadow-card border-solid border-off-white rounded-20 overflow-hidden bg-[#FFFFFF] ">
      <div className="lg:w-2/3 lg:order-2">
        {/* For now, just use the first image. */}
        <Image className="h-full w-full object-cover" src={project.imgPath[0]} alt={alt_string} width="800" height="800" priority={true} />
      </div>

      <div className="p-10 lg:w-1/3 lg:order-1">
        <h2 className="font-body text-xl pb-5">{project.name} - {project.source}</h2>
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