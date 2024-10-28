import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Home() {

    return (
        <>
           
                <div id="page" className="page font--jakarta">
                    {/* RESET PASSWORD PAGE
============================================= */}
                    <section id="reset-password" className="bg--fixed reset-password-section division">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-7 col-lg-5">
                                    {/* LOGO */}
                                    <div className="login-page-logo">
                                        <img className="img-fluid light-theme-img" src="/images/logo-blue.png" alt="logo-image" />
                                        <img className="img-fluid dark-theme-img" src="/images/logo-blue-white.png" alt="logo-image" />
                                    </div>
                                    {/* RESET PASSWORD FORM */}
                                    <div className="reset-page-wrapper text-center">
                                        <form name="resetpasswordform" className="row reset-password-form r-10">
                                            {/* Title*/}
                                            <div className="col-md-12">
                                                <div className="reset-form-title">
                                                    <h5 className="s-26 w-700">Forgot your password?</h5>
                                                    <p className="p-sm color--grey">Enter your email address, if an account exists we‘ll
                                                        send you a link to reset your password.
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Form Input */}
                                            <div className="col-md-12">
                                                <input className="form-control email" type="email" name="email" placeholder="example@example.com" />
                                            </div>
                                            {/* Form Submit Button */}
                                            <div className="col-md-12">
                                                <button type="submit" className="btn btn--theme hover--theme submit">Reset My Password</button>
                                            </div>
                                            {/* Form Data  */}
                                            <div className="col-md-12">
                                                <div className="form-data text-center">
                                                    <span><Link href="/login-1">Never mind, I remembered!</Link></span>
                                                </div>
                                            </div>
                                            {/* Form Message */}
                                            <div className="col-lg-12 reset-form-msg">
                                                <span className="loading" />
                                            </div>
                                        </form>
                                    </div>	{/* END RESET PASSWORD FORM */}
                                </div>
                            </div>	   {/* End row */}
                        </div>	   {/* End container */}
                    </section>	{/* END RESET PASSWORD PAGE */}
                </div>

           
        </>
    )
}