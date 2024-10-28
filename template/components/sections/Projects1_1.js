

import Link from "next/link"
export default function Projects1_1() {
    return (
        <>
            <section id="projects-1" className="py-100 projects-section">
                <div className="container">
                    {/* SECTION TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="section-title mb-80">
                                {/* Title */}
                                <h2 className="s-50 w-700">Great Design That Works!</h2>
                                {/* Text */}
                                <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                            </div>
                        </div>
                    </div>
                    {/* PROJECTS WRAPPER */}
                    <div className="projects-wrapper rel shape--02 shape--white-300">
                        <div className="row align-items-center row-cols-1 row-cols-md-2">
                            {/* PROJECT #1 */}
                            <div className="col">
                                <div id="pt-1-1" className="project-details">
                                    {/* Title */}
                                    <h5 className="s-22 w-700">Vintage Poster</h5>
                                    {/* Image */}
                                    <div className="project-preview r-10">
                                        {/* Project Preview */}
                                        <div className="hover-overlay">
                                            <img className="img-fluid" src="/images/projects/project-05.jpg" alt="project-preview" />
                                            <div className="item-overlay" />
                                        </div>
                                        {/* Project Link */}
                                        <div className="project-link ico-35 color--white">
                                            <Link href="/project-details" ><span className="flaticon-visibility" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* END PROJECT #1 */}
                            {/* PROJECT #2 */}
                            <div className="col">
                                <div id="pt-1-2" className="project-details">
                                    {/* Title */}
                                    <h5 className="s-22 w-700">Glued Poster</h5>
                                    {/* Image */}
                                    <div className="project-preview r-10">
                                        {/* Project Preview */}
                                        <div className="hover-overlay">
                                            <img className="img-fluid" src="/images/projects/project-02.jpg" alt="project-preview" />
                                            <div className="item-overlay" />
                                        </div>
                                        {/* Project Link */}
                                        <div className="project-link ico-35 color--white">
                                            <Link href="/project-details" ><span className="flaticon-visibility" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* END PROJECT #2 */}
                            {/* PROJECT #3 */}
                            <div className="col">
                                <div id="pt-1-3" className="project-details">
                                    {/* Title */}
                                    <h5 className="s-22 w-700">Double Color</h5>
                                    {/* Image */}
                                    <div className="project-preview r-10">
                                        {/* Project Preview */}
                                        <div className="hover-overlay">
                                            <img className="img-fluid" src="/images/projects/project-03.jpg" alt="project-preview" />
                                            <div className="item-overlay" />
                                        </div>
                                        {/* Project Link */}
                                        <div className="project-link ico-35 color--white">
                                            <Link href="/project-details" ><span className="flaticon-visibility" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* END PROJECT #3 */}
                            {/* PROJECT #4 */}
                            <div className="col">
                                <div id="pt-1-4" className="project-details">
                                    {/* Title */}
                                    <h5 className="s-22 w-700">Reativity</h5>
                                    {/* Image */}
                                    <div className="project-preview r-10">
                                        {/* Project Preview */}
                                        <div className="hover-overlay">
                                            <img className="img-fluid" src="/images/projects/project-04.jpg" alt="project-preview" />
                                            <div className="item-overlay" />
                                        </div>
                                        {/* Project Link */}
                                        <div className="project-link ico-35 color--white">
                                            <Link href="/project-details" ><span className="flaticon-visibility" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>	{/* END PROJECT #4 */}
                        </div>
                    </div>	{/* END PROJECTS WRAPPER */}
                    {/* MORE PROJECTS BUTTON */}
                    <div className="row">
                        <div className="col">
                            <div className="more-projects wow fadeInUp">
                                <Link href="/projects" className="btn btn--theme hover--tra-black">See more projects</Link>
                            </div>
                        </div>
                    </div>
                </div>	   {/* End container */}
            </section>
        </>
    )
}
