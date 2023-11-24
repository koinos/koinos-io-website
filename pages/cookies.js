import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} headerCls="navbar-dark inner-page-header">
                <section id="cookies-page" className="gr--whitesmoke pb-80 inner-page-hero division">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                {/* INNER PAGE TITLE */}
                                <div className="inner-page-title">
                                    <h2 className="s-52 w-700">Cookies Policy</h2>
                                    <p className="p-lg">This policy is effective as of 2th March 2022</p>
                                </div>
                                {/* TEXT BLOCK */}
                                <div className="txt-block legal-info">
                                    {/* Text */}
                                    <p>Integer congue sagittis augue egestas <Link href="#" className="color--theme">Global Privacy
                                        Policy</Link> nec suscipit egestas magna undo aliquam ipsum vitae purus justo lacus ligula
                                        ipsum primis cubilia donec undo augue luctus vitae egestas a molestie donec libero
                                        <Link href="/privacy" className="color--theme">Privacy Policy</Link> tempor undo quisque fusce
                                        a cursus neque diam augue fusce sapien nulla a primis lacinia ipsum a molestie blandit
                                        and justo an aliquet eget molestie cursus quaerat
                                    </p>
                                    {/* Text */}
                                    <p>Sagittis congue augue egestas integer velna purus purus magna nec suscipit and egestas
                                        magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                        luctus vitae egestas a molestie donec <Link href="#" className="color--theme">https://martex.com/software</Link> undo quisque fusce cursus neque blandit fusce an aliquam nulla lacinia justo molestie
                                        blandit justo diam aliquet tortor non molestie sagittis lacinia
                                    </p>
                                    {/* Title */}
                                    <h4 className="s-30 w-700"><span>1.</span> What is a Cookie?</h4>
                                    {/* Text */}
                                    <p>Sagittis congue augue egestas integer velna purus purus magna nec suscipit and egestas
                                        magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                        luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                        fusce cursus neque blandit fusce lacinia placerat and nulla justo molestie blandit justo
                                        diam aliquet tortor molestie sagittis lacinia undo and mullam molestie diam luctus donec
                                        bibendum aliquet massa elementum. Libero quisque lacus and ligula massa lorem.
                                    </p>
                                    {/* Text */}
                                    <p>Sagittis congue augue egestas integer velna purus purus magna nec suscipit and egestas
                                        magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                        luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                        fusce cursus neque blandit fusce an aliquam nulla lacinia justo molestie blandit justo
                                        diam aliquet tortor molestie non sagittis lacinia
                                    </p>
                                    {/* Title */}
                                    <h4 className="s-30 w-700"><span>2.</span> What Types of Cookies Are There?</h4>
                                    {/* Small Title */}
                                    <h5 className="s-24 w-700"><span>2.1.</span> Essential cookies</h5>
                                    {/* Text */}
                                    <p>Congue augue sagittis egestas integer velna purus purus magna nec suscipit and egestas
                                        magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                        luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                        fusce cursus neque blandit fusce lorem nulla an aliquam lacinia justo molestie blandit
                                        justo diam an aliquet tortor sagittis lacinia molestie diam egestas
                                    </p>
                                    {/* List */}
                                    <ul className="simple-list">
                                        <li className="list-item">
                                            <p>Quaerat sodales sapien undo velna purus euismod purus velna blandit vitae auctor
                                                and congue magna tempor sapien gravida laoreet turpis urna augue, viverra a augue
                                                eget dictum tempor
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien congue
                                                and augue egestas
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien congue
                                                augue egestas sagittis massa lorem fusce cursus fusce nulla vitae massa placerat
                                                vulputate purus
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p>Sapien sodales quaerat undo velna purus euismod purus velna blandit vitae auctor
                                                and congue magna tempor sapien gravida laoreet turpis urna augue, viverra a augue
                                                eget dictum pulvinar
                                            </p>
                                        </li>
                                    </ul>
                                    {/* Small Title */}
                                    <h5 className="s-24 w-700"><span>2.2.</span> Performance cookies</h5>
                                    {/* Text */}
                                    <p>Congue sagittis augue egestas integer velna purus purus magna nec suscipit and egestas
                                        magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                        luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                        fusce cursus neque blandit fusce aliquam
                                    </p>
                                    {/* Text */}
                                    <p>Sagittis congue augue egestas integer velna purus purus magna nec suscipit and egestas
                                        magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                        luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                        fusce cursus neque blandit fusce an aliquam nulla lacinia justo molestie blandit justo
                                        diam aliquet tortor molestie non sagittis lacinia
                                    </p>
                                    {/* Small Title */}
                                    <h5 className="s-24 w-700"><span>2.3.</span> Functionality cookies</h5>
                                    {/* Text */}
                                    <p>Integer congue sagittis augue egestas  velna purus purus magna nec suscipit and egestas
                                        magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                        luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                        fusce cursus neque diam augue fusce sapien nulla a primis lacinia ipsum a molestie blandit
                                        and justo an aliquet eget molestie sagittis at quaerat sodales
                                    </p>
                                    {/* List */}
                                    <ul className="simple-list">
                                        <li className="list-item">
                                            <p>Quaerat sodales sapien undo velna purus euismod purus velna blandit vitae auctor
                                                and congue magna tempor sapien gravida laoreet turpis urna augue, viverra a augue
                                                eget dictum tempor
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien congue
                                                and augue egestas
                                            </p>
                                        </li>
                                    </ul>
                                    {/* Small Title */}
                                    <h5 className="s-24 w-700"><span>2.4.</span> Targeting/advertising cookies</h5>
                                    {/* Text */}
                                    <p>Sagittis congue augue egestas integer velna purus purus magna nec suscipit and egestas
                                        magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                        luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                        fusce cursus neque blandit fusce lacinia placerat and nulla justo molestie blandit justo
                                        diam aliquet tortor molestie sagittis lacinia undo and mullam molestie diam luctus donec
                                        bibendum aliquet massa elementum. Libero quisque lacus and ligula massa lorem.
                                    </p>
                                    {/* Title */}
                                    <h4 className="s-30 w-700"><span>3.</span> Third-Party Cookies on Our Site</h4>
                                    {/* Text */}
                                    <p>Integer congue sagittis augue egestas  velna purus purus magna nec suscipit and egestas
                                        magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                        luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                        fusce cursus neque diam augue fusce sapien nulla a rimis lacinia ipsum a molestie blandit
                                        and justo an aliquet eget molestie sagittis at quaerat sodales
                                    </p>
                                    {/* Text */}
                                    <p>Aliqum mullam tincidunt a sapien gravida and diam donec porta.</p>
                                    {/* Text */}
                                    <p>Integer congue sagittis augue egestas  velna purus purus magna nec suscipit and egestas
                                        magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                        luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                        fusce cursus neque diam augue fusce sapien nulla a primis lacinia ipsum a molestie blandit
                                        and justo an aliquet eget molestie sagittis at quaerat sodales
                                    </p>
                                    {/* Small Title */}
                                    <h5 className="s-24 w-700"><span>3.1.</span> Targeting/advertising cookies</h5>
                                    {/* Text */}
                                    <p>Sagittis congue augue egestas integer velna purus purus magna nec suscipit and egestas
                                        magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                        luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                        fusce cursus neque blandit fusce lacinia placerat and nulla justo molestie blandit justo
                                        diam aliquet tortor molestie sagittis lacinia undo and mullam molestie diam luctus donec
                                        bibendum aliquet massa elementum. Libero quisque lacus and ligula massa lorem.
                                    </p>
                                    {/* Title */}
                                    <h4 className="s-30 w-700"><span>4.</span> Cookies and Your Personal Information</h4>
                                    {/* Text */}
                                    <p>Congue augue sagittis egestas integer velna purus purus magna nec suscipit and egestas
                                        magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                        luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                        fusce cursus neque blandit fusce lorem nulla an aliquam lacinia justo molestie blandit
                                        justo diam an aliquet tortor sagittis lacinia molestie diam egestas
                                    </p>
                                    {/* Text */}
                                    <p>Sagittis augue congue egestas integer velna purus purus magna nec suscipit and egestas
                                        magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                        luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                        fusce cursus neque aliquam fusce blandit
                                    </p>
                                    {/* Title */}
                                    <h4 className="s-30 w-700"><span>5.</span> How to Configure and Disable Cookies</h4>
                                    {/* Text */}
                                    <p>Integer congue sagittis augue egestas  velna purus purus magna nec suscipit and egestas
                                        magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                        luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                        fusce cursus neque diam augue fusce sapien
                                    </p>
                                    {/* List */}
                                    <ul className="simple-list">
                                        <li className="list-item">
                                            <p>Quaerat sodales sapien undo velna purus euismod purus velna blandit vitae auctor
                                                and congue magna tempor sapien gravida laoreet turpis urna augue, viverra a augue
                                                eget tempor pulvinar
                                            </p>
                                        </li>
                                        <li className="list-item">
                                            <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien congue
                                                and augue egestas
                                            </p>
                                        </li>
                                    </ul>
                                    {/* Text */}
                                    <p>Augue congue sagittis egestas integer velna purus purus magna nec suscipit and egestas
                                        magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                        luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                        fusce cursus neque donec and ipsum porta diam lorem sodales an aliquam lacinia justo
                                        sapien congue aliquet and sodales a quaerat tortor lacinia egestas
                                    </p>
                                    {/* Title */}
                                    <h4 className="s-30 w-700"><span>6.</span> How to Contact Us</h4>
                                    {/* Text */}
                                    <p>Integer congue sagittis augue egestas  velna purus purus magna nec suscipit and egestas
                                        magna aliquam ipsum vitae purus justo lacus ligula ipsum primis cubilia donec undo augue
                                        luctus vitae egestas a molestie donec libero sapien dapibus congue tempor undo quisque
                                        fusce cursus neque diam augue fusce sapien
                                    </p>
                                    {/* Text */}
                                    <p>If you have any questions or suggestions about this Terms of Service, do not hesitate to
                                        contact us at <Link href="mailto:yourdomain@mail.com" className="color--theme">hello@yourdomain.com</Link>
                                    </p>
                                </div>	{/* END TEXT BLOCK */}
                            </div>
                        </div>    {/* End row */}
                    </div>     {/* End container */}
                </section>

            </Layout>
        </>
    )
}