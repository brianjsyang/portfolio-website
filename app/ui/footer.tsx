
export default function FooterBlock() {
    return (
        <footer className="bg-primary p-10 mt-20">
            <a className="text-center font-body text-background block w-min m-auto" href="https://www.brianjsyang.ca" target="_blank">brianjsyang.ca</a>
            <a className="text-center font-body text-background block w-min m-auto" href="https://www.linkedin.com/in/brianjsyang/" target="_blank">linkedin.com/in/brianjsyang</a>
            <a className="text-center font-body text-background block w-min m-auto" href="https://github.com/brianjsyang/" target="_blank">brianjsyang</a>
        </footer>
    )
}

/**
 * Some Ideas
 * Convert this to an array so i dont have to add css for each one.
 * Get icon svgs and add it before each line.
 */