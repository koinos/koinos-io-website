import Link from "next/link"
export default function Home() {

    return (
        <>

            <div id="page" className="page font--jakarta">
                {/* SIGN UP PAGE
============================================= */}
                <div id="signup" className="bg--fixed signup-1 login-section division">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-lg-6 offset-md-2 offset-lg-3">
                                <div className="register-page-form">
                                    {/* TITLE */}
                                    <div className="col-md-12">
                                        <div className="register-form-title">
                                            <h3 className="s-32 w-700">Create Account</h3>
                                            <p className="p-md">Already have an account? <Link href="/login-1" className="color--theme">Log In</Link></p>
                                        </div>
                                    </div>
                                    {/* SIGN UP FORM */}
                                    <form name="signupform" className="row sign-up-form">
                                        {/* Google Button */}
                                        <div className="col-md-12">
                                            <Link href="#" className="btn btn-google ico-left">
                                                <img src="/images/png_icons/google.png" alt="google-icon" /> Sign up with Google
                                            </Link>
                                        </div>
                                        {/* Login Separator */}
                                        <div className="col-md-12 text-center">
                                            <div className="separator-line">Or, sign up with your email</div>
                                        </div>
                                        {/* Form Input */}
                                        <div className="col-md-12">
                                            <p className="p-sm input-header">Full name</p>
                                            <input className="form-control name" type="text" name="name" placeholder="John Doe" />
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
                                                <input className="form-control password" type="password" name="password" placeholder="min 8 characters" />
                                            </div>
                                        </div>
                                        {/* Checkbox */}
                                        <div className="col-md-12">
                                            <div className="form-data">
                                                <span>By clicking “Create Account”, you agree to our
                                                    <Link href="/terms">Terms</Link> and that you have read our
                                                    <Link href="/privacy"> Privacy Policy</Link>
                                                </span>
                                            </div>
                                        </div>
                                        {/* Form Submit Button */}
                                        <div className="col-md-12">
                                            <button type="submit" className="btn btn--theme hover--theme submit">Create Account</button>
                                        </div>
                                    </form>	{/* END SIGN UP FORM */}
                                </div>
                            </div>
                        </div>	   {/* End row */}
                    </div>	   {/* End container */}
                </div>	{/* END SIGN UP PAGE */}
            </div>
        </>
    )
}