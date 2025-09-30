export const Contact = () => {  
    return  ( 
    <section 
    id="contact" 
    className="py-24 px-4 relative min-h-screen flex flex-col justify-center items-center"> 
        <div className="container max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Contact <span className="text-primary"> Me </span>
            </h1>
            <div className="gap-5 items-center text-center">
                <div className="space-y-6">
                    <div className="space-y-2">
                        <h2 className="font-bold">
                            Please check out my LinkedIn
                        </h2>
                        <a href="https://www.linkedin.com/in/jairaj-karri/" target="_blank" className="text-muted-foreground font-xl hover:underline">
                        jairaj-karri
                        </a>
                    </div>  
                    <div className="space-y-2">
                        <h2 className="font-bold">
                            Let me know what you think about my profile
                        </h2>
                        <div>
                            jairajkarri002@gmail.com
                        </div>
                        <div>
                            +1 (571) 342-9328
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </section>
    )
}