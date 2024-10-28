import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark inner-page-header">
                <div>
                    <section id="download-1" className="gr--whitesmoke inner-page-hero download-section division">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-11 col-xl-10">
                                    {/* VERSION RELEASE */}
                                    <div className="version-release">
                                        {/* Release Data */}
                                        <div className="release-data">
                                            <h5 className="s-28 w-700">Latest Version</h5>
                                            {/* Version Data */}
                                            <div className="rel">
                                                <span className="version-data">4.13.019</span>
                                                <span className="release-date">2023-05-31 <span>68.91 MB</span></span>
                                                <Link href="download/example.zip" download="example.zip" className="btn btn--theme hover--tra-grey ico-20 ico-left release-download">
                                                    <span className="flaticon-down-arrow-1" /> Download 4.13.019
                                                </Link>
                                            </div>
                                        </div>
                                        {/* Release Highlights */}
                                        <div className="release-highlights">
                                            <ul className="simple-list">
                                                <li className="list-item"><p><b>OS X</b> (10.7 or later is required)</p></li>
                                                <li className="list-item"><p><b>Windows</b> - also available as a portable version</p></li>
                                                <li className="list-item"><p><b>Windows 64 bit</b> - also available as a portable version</p></li>
                                                <li className="list-item"><p>Fixed Bug: "Euismod purus and blandit"</p></li>
                                                <li className="list-item"><p>Fixed Crash#4680682692</p></li>
                                            </ul>
                                        </div>
                                    </div>	{/* END VERSION RELEASE */}
                                    {/* VERSION RELEASE */}
                                    <div className="version-release">
                                        {/* Release Data */}
                                        <div className="release-data">
                                            <h5 className="s-28 w-700">Older Versions</h5>
                                            {/* Version Data */}
                                            <div className="rel">
                                                <span className="version-data">4.11.020</span>
                                                <span className="release-date">2023-05-18 <span>62.46 MB</span></span>
                                                <Link href="download/example.zip" download="example.zip" className="btn btn--tra-grey hover--theme ico-20 ico-left release-download">
                                                    <span className="flaticon-down-arrow-1" /> Download 4.11.020
                                                </Link>
                                            </div>
                                        </div>
                                        {/* Release Highlights */}
                                        <div className="release-highlights">
                                            <ul className="simple-list">
                                                <li className="list-item">
                                                    <p>Quaerat sodales sapien undo euismod purus and blandit egestas magna on macOS 10.12.*</p>
                                                </li>
                                                <li className="list-item">
                                                    <p>Fixed suscipit lectus auctor integer cursus orci vitae auctor integer</p>
                                                </li>
                                                <li className="list-item">
                                                    <p>Fixed Fringilla risus nec, luctus mauris auctor integer an auctor cursus euismod</p>
                                                </li>
                                                <li className="list-item"><p>Fixed Crash#8341682687</p></li>
                                            </ul>
                                        </div>
                                    </div>	{/* END VERSION RELEASE */}
                                    {/* VERSION RELEASE */}
                                    <div className="version-release">
                                        {/* Release Data */}
                                        <div className="release-data">
                                            {/* Version Data */}
                                            <div className="rel">
                                                <span className="version-data">4.08.106</span>
                                                <span className="release-date">2023-04-12 <span>58.83 MB</span></span>
                                                <Link href="download/example.zip" download="example.zip" className="btn btn--tra-grey hover--theme ico-20 ico-left release-download">
                                                    <span className="flaticon-down-arrow-1" /> Download 4.08.106
                                                </Link>
                                            </div>
                                        </div>
                                        {/* Release Highlights */}
                                        <div className="release-highlights">
                                            <ul className="simple-list">
                                                <li className="list-item">
                                                    <p>Quaerat sodales sapien undo euismod magna on 10.12 (Sierra)</p>
                                                </li>
                                                <li className="list-item">
                                                    <p>Fixed suscipit lectus auctor integer cursus orci vitae auctor integer</p>
                                                </li>
                                                <li className="list-item">
                                                    <p>Fixed risus nec luctus mauris auctor integer an integera congue magna</p>
                                                </li>
                                                <li className="list-item">
                                                    <p>Fixed cubilia laoreet magna at auctor integer congue egestas</p>
                                                </li>
                                                <li className="list-item">
                                                    <p>Fringilla risus nec, luctus mauris auctor integer an auctor cursus euismod purus
                                                        pretium efficitur ipsum ligula undo cubilia laoreet magna and dolor suscipit
                                                    </p>
                                                </li>
                                                <li className="list-item">
                                                    <p>Fixes other minor bugs</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>	{/* END VERSION RELEASE */}
                                    {/* VERSION RELEASE */}
                                    <div className="version-release">
                                        {/* Release Data */}
                                        <div className="release-data">
                                            {/* Version Data */}
                                            <div className="rel">
                                                <span className="version-data">4.0.018</span>
                                                <span className="release-date">2023-02-26 <span>64.95 MB</span></span>
                                                <Link href="download/example.zip" download="example.zip" className="btn btn--tra-grey hover--theme ico-20 ico-left release-download">
                                                    <span className="flaticon-down-arrow-1" /> Download 4.0.018
                                                </Link>
                                            </div>
                                        </div>
                                        {/* Release Highlights */}
                                        <div className="release-highlights">
                                            <ul className="simple-list">
                                                <li className="list-item">
                                                    <p>Fixes integer cursus orci bugs on 10.13 (High Sierra)</p>
                                                </li>
                                                <li className="list-item">
                                                    <p>Fixed auctor integer cursus orci vitae auctor integer</p>
                                                </li>
                                                <li className="list-item">
                                                    <p>Fixed Crash#8341689840</p>
                                                </li>
                                                <li className="list-item">
                                                    <p>Fixes other minor bugs</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>	{/* END VERSION RELEASE */}
                                    {/* VERSION RELEASE */}
                                    <div className="version-release">
                                        {/* Release Data */}
                                        <div className="release-data">
                                            {/* Version Data */}
                                            <div className="rel">
                                                <span className="version-data">3.76.231</span>
                                                <span className="release-date">2022-12-08 <span>57.39 MB</span></span>
                                                <Link href="download/example.zip" download="example.zip" className="btn btn--tra-grey hover--theme ico-20 ico-left release-download">
                                                    <span className="flaticon-down-arrow-1" /> Download 3.76.231
                                                </Link>
                                            </div>
                                        </div>
                                        {/* Release Highlights */}
                                        <div className="release-highlights">
                                            <ul className="simple-list">
                                                <li className="list-item">
                                                    <p>Quaerat sodales sapien undo euismod magna on 10.12 (Sierra)</p>
                                                </li>
                                                <li className="list-item">
                                                    <p>Fixed suscipit lectus auctor integer cursus orci vitae auctor integer</p>
                                                </li>
                                                <li className="list-item">
                                                    <p>Fixes integer cursus orci bugs on 10.13 (High Sierra)</p>
                                                </li>
                                                <li className="list-item">
                                                    <p>Fixed auctor integer cursus orci vitae auctor integer</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>	{/* END VERSION RELEASE */}
                                </div>
                            </div>    {/* End row */}
                        </div>     {/* End container */}
                    </section>	{/* END DOWNLOAD-1 */}
                    {/* BANNER-9
			============================================= */}
                    <section id="banner-9" className="bg--02 py-70 x-border banner-section">
                        <div className="container">
                            {/* BANNER-9 WRAPPER */}
                            <div className="banner-7-wrapper">
                                <div className="row justify-content-center d-flex align-items-center">
                                    {/* BANNER-9 TEXT */}
                                    <div className="col-md-7 col-xl-5">
                                        <div className="banner-9-txt">
                                            {/* Title */}
                                            <h3 className="s-40 w-700">Any questions?</h3>
                                            {/* Text */}
                                            <p className="p-lg">Don't hesitate to contact us about any question you might be interested in</p>
                                            {/* Button */}
                                            <Link href="/faqs" className="btn r-04 btn--theme hover--theme">Read the FAQs</Link>
                                        </div>
                                    </div>
                                    {/* BANNER-9 IMAGE */}
                                    <div className="col-md-5 col-xl-5">
                                        <div className="banner-9-img text-end">
                                            <img className="img-fluid" src="images/help.png" alt="banner-image" />
                                        </div>
                                    </div>
                                </div>     {/* End row */}
                            </div>    {/* END BANNER-9 WRAPPER */}
                        </div>     {/* End container */}
                    </section>
                </div>

            </Layout>
        </>
    )
}