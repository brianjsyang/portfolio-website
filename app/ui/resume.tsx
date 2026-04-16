import ExperienceBlock from "@/app/ui/resume-list";
import { experiences } from "@/app/lib/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

export default function Resume() {
    return (
        <div>
            <h2 className="font-title text-2xl lg:text-3xl text-primary leading-normal pb-10 pt-20 lg:pt-32">
                Experience
            </h2>

            <div className="flex flex-col gap-y-10">
                {
                    // Loop through the project array and display all of them!
                    experiences.map((eachExperience, key) => (
                        <ExperienceBlock
                            experience={eachExperience}
                            key={key}
                        />
                    ))
                }
            </div>

            <div>
                <a
                    href="/Brian Yang Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-base flex gap-2 items-center mt-10 w-fit px-5 py-2 rounded bg-primary text-background transition hover:bg-accent"
                >
                    <FontAwesomeIcon icon={faFilePdf} />
                    View My Resume
                </a>
            </div>
        </div>
    );
}
