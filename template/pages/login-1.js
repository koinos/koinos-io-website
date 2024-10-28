import Link from "next/link"
export default function Home() {

    return (
        <>
            <div id="page" className="page font--jakarta">
                {/* LOGIN PAGE
============================================= */}
                <div id="login" className="bg--fixed login-1 login-section division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-lg-6 offset-md-2 offset-lg-3">
                                <div className="register-page-form">
                                    {/* TITLE */}
                                    <div className="col-md-12">
                                        <div className="register-form-title">
                                            <h3 className="s-32 w-700">Log in to Martex</h3>
                                            <p className="p-md">Don't have an account? <Link href="/signup-1" className="color--theme">Sign up</Link></p>
                                        </div>
                                    </div>
                                    {/* LOGIN FORM */}
                                    <form name="signinform" className="row sign-in-form">
                                        {/* Google Button */}
                                        <div className="col-md-12">
                                            <Link href="#" className="btn btn-google ico-left">
                                                <img src="/images/png_icons/google.png" alt="google-icon" /> Sign in with Google
                                            </Link>
                                        </div>
                                        {/* Login Separator */}
                                        <div className="col-md-12 text-center">
                                            <div className="separator-line">Or, sign in with your email</div>
                                        </div>
                                        {/* Form Input */}
                                        <div className="col-md-12">
                                            <p className="p-sm input-header">Email address</p>
                                            <input className="form-control email" type="email" name="email" placeholder="example@example.com" />
                                        </div>
                                        {/* Form Input */}
                                        <div className="col-md-12">
                                            <p className="p-sm input-header">Password</p>
                                            <div className="wrap-input">
                                                <span className="btn-show-pass ico-20"><span className="flaticon-visibility eye-pass" /></span>
                                                <input className="form-control password" type="password" name="password" placeholder="* * * * * * * * *" />
                                            </div>
                                        </div>
                                        {/* Reset Password Link */}
                                        <div className="col-md-12">
                                            <div className="reset-password-link">
                                                <p className="p-sm"><Link href="/reset-password" className="color--theme">Forgot your password?</Link></p>
                                            </div>
                                        </div>
                                        {/* Form Submit Button */}
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn--theme hover--theme submit">Log In</button>
                                        </div>
                                    </form>	{/* END LOGIN FORM */}
                                </div>
                            </div>
                        </div>	   {/* End row */}
                    </div>	   {/* End container */}
                </div>	{/* END LOGIN PAGE */}
            </div>

        </>
    )
}