/**
 * Dispaly list of all projects
 */
import { projects } from "@/app/lib/data"; 
import ProjectBlock from "@/app/ui/project-block";

export default function Projects() {
    return (
        <div>
            <h2 className="font-title text-2xl lg:text-3xl text-primary leading-normal pb-10">Here are quick overview of my past projects!</h2>

            <div className="flex flex-col gap-y-10 lg:gap-y-14">
                { // Loop through the project array and display all of them!
                    projects.map((eachProject, key) => (
                    <ProjectBlock project={eachProject} key={key}/>
                    ))
                }
            </div>

            <h4 className="font-body text-xl text-secondary pt-20">Obviously, there are more ... I would love to talk about them in person! (or on the phone)</h4>
        </div>
    )
}