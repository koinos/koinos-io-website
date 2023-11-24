

import Link from "next/link"
export default function Integrations2_6() {
    return (
        <>
            <section id="integrations-2" className="pt-100 integrations-section">
                <div className="container">
                    {/* INTEGRATIONS-2 WRAPPER */}
                    <div className="integrations-2-wrapper bg--white-400 r-12 text-center">
                        {/* SECTION TITLE */}
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-9">
                                <div className="section-title mb-50">
                                    {/* Title */}
                                    <h2 className="s-50 w-700">Easy integrate all your essential tools</h2>
                                    {/* Text */}
                                    <p className="s-21 color--grey">Ligula risus auctor tempus magna feugiat lacinia.</p>
                                </div>
                            </div>
                        </div>
                        {/* TOOLS ROW */}
                        <div className="row row-cols-1 row-cols-sm-3 row-cols-md-5">
                            {/* TOOL #1 */}
                            <div className="col">
                                <Link href="#" className="in_tool it-1 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-1.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Zapier</h6>
                                </Link>
                            </div>	{/* END TOOL #1 */}
                            {/* TOOL #2 */}
                            <div className="col">
                                <Link href="#" className="in_tool it-2 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-2.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Google Analytics</h6>
                                </Link>
                            </div>	{/* END TOOL #2 */}
                            {/* TOOL #3 */}
                            <div className="col">
                                <Link href="#" className="in_tool it-3 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-3.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Amplitude</h6>
                                </Link>
                            </div>	{/* END TOOL #3 */}
                            {/* TOOL #4 */}
                            <div className="col">
                                <Link href="#" className="in_tool it-4 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-4.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">Hubspot</h6>
                                </Link>
                            </div>	{/* END TOOL #4 */}
                            {/* TOOL #5 */}
                            <div className="col">
                                <Link href="#" className="in_tool it-5 r-12 wow fadeInUp">
                                    {/* Logo */}
                                    <div className="in_tool_logo ico-65 bg--white-100 block-shadow r-12">
                                        <img className="img-fluid" src="/images/png_icons/tool-5.png" alt="brand-logo" />
                                    </div>
                                    {/* Title */}
                                    <h6 className="s-17 w-700">MailChimp</h6>
                                </Link>
                            </div>	{/* END TOOL #5 */}
                        </div>	{/* END TOOLS ROW */}
                        {/* MORE BUTTON */}
                        <div className="row">
                            <div className="col">
                                <div className="more-btn text-center mt-60 wow fadeInUp">
                                    <Link href="/integrations" className="btn btn--tra-grey hover--theme">View all integrations</Link>
                                </div>
                            </div>
                        </div>
                    </div>	{/* END INTEGRATIONS-2 WRAPPER */}
                </div>     {/* End container */}
            </section>
        </>
    )
}
