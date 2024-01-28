import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


export default function FooterBlock() {
    return (
        <footer className="mt-20">
            <div className="w-1/4 m-auto">
                
            </div>

            <div className="bg-primary pt-14 pb-12">
                <div className="w-min m-auto">
                    <a className="font-body text-base text-background w-min flex gap-2 items-center transition hover:text-accent" href="https://www.linkedin.com/in/brianjsyang/" target="_blank"><FontAwesomeIcon icon={faLinkedin} />linkedin.com/in/brianjsyang</a>
                    <a className="font-body text-base text-background w-min flex gap-2 items-center transition hover:text-accent" href="https://github.com/brianjsyang/" target="_blank"><FontAwesomeIcon icon={faGithub} />brianjsyang</a>

                    <h6 className="font-title text-xs pt-10 pb-2 text-background">This website was built with the help of...</h6>
                    <ul className="columns-2 font-body whitespace-nowrap text-xs text-background">
                        <li>Vercel</li>
                        <li>Next.js</li>
                        <li>Tailwind CSS</li>
                        <li>Realtime Colors</li>
                        <li>fontpair</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

/**
 * Some Ideas
 * Convert this to an array so i dont have to add css for each one.
 * Get icon svgs and add it before each line.
 */