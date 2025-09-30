import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
return (
  <section 
    id="hero" 
    className="relative min-h-screen flex flex-col justify-center items-center px-4">
    <div>
        <div className="container max-w-4xl text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi,</span>
                    
                </h1>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                     <span className="opacity-0 animate-fade-in-delay-1">I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-2">Jairaj Karri!</span>
                </h1>

                <p className="text-lg md-text-xl text-muted-foreground max-2-wxl opacity-0 animate-fade-in-delay-4">
                    Bringing 9 years of SAP ABAP expertise — from classical reports to modern S/4 HANA  — 
                    with a focus on performance, reliability, and seamless user experience. 
                    AWS Certified Cloud Practitioner, eager to expand into emerging technologies and continuously sharpen my skills.
                </p>
            </div>
        </div>
    </div>

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className ="text-sm text-muted-foreground mb-2"> scroll </span>
        <ArrowDown className="w-5 h-5 text-primary" />
    </div>
  </section>
)
}