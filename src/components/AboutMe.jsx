

export const AboutMe = () => {  
    return  ( 
    <section id="about" className="py-24 px-4 relative min-h-screen flex flex-col justify-center items-center"> 
        <div className="container max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
                About <span className="text-primary"> Me </span>
            </h1>

            <div className="grid grid-cols1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h1 className="text-2xl font-semibold"> 
                        Who am I?
                    </h1>
                    <p className="text-muted-foreground">
                        I'm a seasoned SAP ABAP developer with over 9 years of experience in designing and implementing robust solutions across various industries. 
                        My expertise spans from classical reports to modern S/4 HANA applications, always prioritizing performance, reliability, and user experience.
                    </p>
                    <p className="text-muted-foreground">
                        Throughout my career, I've successfully delivered numerous projects that have streamlined business processes and enhanced operational efficiency. 
                        My commitment to continuous learning has led me to earn the AWS Certified Cloud Practitioner certification, reflecting my dedication to staying abreast of emerging technologies.
                    </p>
                    <p className="text-muted-foreground">
                        I'm passionate about leveraging technology to solve complex problems and am eager to explore new challenges that allow me to apply and expand my skill set. 
                        Let's connect and see how we can collaborate to drive innovation and success.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">   
                        <a href="#contact" 
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300"> Connect </a>
                        <a href="/Jairaj Karri Resume.pdf" 
                        target="_blank" 
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 transition-colors duration-300"> Resume </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <h1 className="text-2xl font-semibold"> 
                        Skills
                    </h1>
                    <div className="gradient p-6 card-hover bg-primary/5">
                        <div className="flex items-start gap-4">
                            <div className="text-left text-muted-foreground">    
                                Object Oriented programming
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="text-left text-muted-foreground">    
                                S/4 HANA ABAP,  CDS Views
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="text-left text-muted-foreground">    
                                OData Services
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="text-left text-muted-foreground">    
                                Web Dynpro Applications
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="text-left text-muted-foreground">    
                                Classical and ALV Reporting
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="text-left text-muted-foreground">    
                                Smartforms, Adobe Forms and SAP scripts
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="text-left text-muted-foreground">    
                                Enhancement Framework, BADI, and User and Customer Exit
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="text-left text-muted-foreground">    
                                BAPI, BDC, IDOCs
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="text-left text-muted-foreground">    
                                Data Dictionary
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                            <div className="text-left text-muted-foreground">    
                                Development under Functional Modules – SD and FI
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="text-left text-muted-foreground">    
                                Scrum and KANBAN
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="text-left text-muted-foreground">    
                                Fixing Defects in Hypercare, FIT, and UAT
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="text-left text-muted-foreground">    
                                Interaction with and Assistance to Functional Consultants
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="text-left text-muted-foreground">    
                                Collaboration with Users, Architect, and Business stakeholders
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="text-left text-muted-foreground">    
                                Ability to work independently as well as in a team
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <div className="space-y-5 py-20 text-center">
            <div>
                <h1 className="text-2xl font-semibold"> Certifications </h1>
            </div>
            <div className="hover:underline">
                <a href="/AWS.pdf" target="_blank">  AWS Certified Cloud Practitioner</a>
            </div>
            <div className="hover:underline">
                <a href="/AI.pdf" target="_blank">  Generative AI for everyone</a>
            </div>
        </div>
        
    </section>
    )
}