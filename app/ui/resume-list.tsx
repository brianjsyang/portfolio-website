/**
 * Display each project in a card layout
 */
import { Experience } from "@/app/lib/definitions";

export default function ExperienceBlock({ experience }: { experience: Experience;}) {

  return (
    <div>
        <h1 className="font-title text-2xl leading-relaxed">{experience.company} - <span className="italic text-xl text-accent whitespace-nowrap">{experience.jobTitle}</span></h1>
        <h2 className="font-body text-lg">{experience.duration}</h2>
        
        {/* <ul className="pt-5 lg:w-2/3">
          {
            experience.desc.map((value, index) => (
              <li className="font-body text-paragraph list-disc ml-5 mb-2" key={index}>{value}</li>
            )) 
          }
        </ul> */}
    </div>
  )
}