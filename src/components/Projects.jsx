export const Projects = () => {  
    return  ( 
    <section 
    id="projects" 
    className="py-24 px-4 relative min-h-screen flex flex-col justify-center items-center"> 
        <div className="container max-w-7xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Projects
            </h1>

            <div className="gap-5 items-center text-left">
                <div className="space-y-8">
                    <h1 className="text-2xl font-semibold"> 
                        SAP
                    </h1>
                    <div className=" space-y-2 card-hover px-8 gradient hover:bg-primary/20">
                        <h2 className="text-primary font-bold">
                            Vendor/Customer to Business Partner Migration
                        </h2>
                        <p className="text-muted-foreground">
                            I spearheaded the transition from Vendor/Customer to Business Partner by enhancing a critical Web Dynpro Application. 
                            By leveraging Object-Oriented ABAP techiques - classes and methods under Customer Vendor Integration (CVI), I optimized functionality and streamlined workflows. 
                            This initiative resulted in a measurable improvement in process accuracy and significantly smoother business interactions. 
                            The project not only strengthened business relationships but also showcased my ability to deliver impactful, future-ready SAP solutions that align with organizational goals.
                        </p>
                    </div>  
                    <div className="space-y-2 card-hover px-8 gradient hover:bg-primary/20">
                        <h2 className="text-primary font-bold">
                            Contracts Report
                        </h2>
                        <p className="text-muted-foreground">
                            I designed and delivered impactful Power BI dashboards by seamlessly integrating SSAS Tabular Cubes with SAP HANA Calculation Views. 
                            I built complex measures and hierarchies in SSAS to enable drill-down analysis, while optimizing HANA Calculation Views with filters, parameters, and aggregation nodes for high-performance queries. 
                            As a result, business leaders gained accurate, actionable intelligence, driving faster and more confident decision-making.
                        </p>
                    </div>
                    <div className="space-y-2 card-hover px-8 gradient hover:bg-primary/20">
                        <h2 className="text-primary font-bold">
                            Return Order Application
                        </h2>
                        <p className="text-muted-foreground">
                            To improve user experience in return management, I developed OData services for a custom SAP Fiori application. 
                            The app retrieved all materials associated with an invoice and enabled users to manually select products before creating the return order. 
                            By building this end-to-end solution from scratch, I streamlined return management, reduced manual errors, and improved operational efficiency. 
                            Leveraging ABAP OData integration and dynamic entity modeling, the solution provided both flexibility and accuracy in the return process. 
                        </p>    
                    </div>    
                </div>
            </div>
        </div>
    </section>
    )
}    