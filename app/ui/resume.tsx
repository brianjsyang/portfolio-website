import ExperienceBlock from '@/app/ui/resume-list'
import { experiences } from '@/app/lib/data'

export default function Resume() {

    return (
        <div>
            <h2 className="font-title text-2xl lg:text-3xl text-primary leading-normal pb-10 pt-20 lg:pt-32">Experience</h2>

            <div className='flex flex-col gap-y-10'>
                { // Loop through the project array and display all of them!
                    experiences.map((eachExperience, key) => (
                        <ExperienceBlock experience={eachExperience} key={key}/>
                    ))
                }
            </div>
        </div>
    )
}