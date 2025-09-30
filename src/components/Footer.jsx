import { ArrowUp } from "lucide-react"


export const Footer = () => {
    return (
        <footer className="py-2 justify-between">   
            <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()}  Jairaj Karri. All rights reserved.
            </p>

            <a href="#hero">
                <ArrowUp />
            </a>
        </footer>
    )
}