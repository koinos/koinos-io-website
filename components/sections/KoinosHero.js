
import Link from "next/link";
import Spline from "@splinetool/react-spline";

export default function KoinosHero() {
  const title1 = "Free. Frictionless. Familiar.";
  const title2 = "";
  const subtle = "Koinos can power the user experience people expect.";

  return (
    <>
      <section id="hero-27" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
        {/* Spline Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}>
          <Spline
             scene="https://prod.spline.design/Knf6jvIpcfRNsU00/scene.splinecode" 
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div className="hero-overlay bg--fixed">
          <div className="container text-center">
            {/* HERO CONTENT */}
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6">
                <div className="hero-27-txt wow" data-aos="fade-down">
                  {/* Title */}
                  <div className="hero-titles">
                    <h2 className="s-40 w-700">{title1}</h2>
                    <h2 className="s-40 w-700">{title2}</h2>
                  </div>
                  {/* Text */}
                  <p className="s-10">{subtle}</p>
                  {/* Buttons */}
                  <div className="btns-group hero-btns">
                    <Link
                      href="https://telegram.koinos.io/"
                      target="_blank"
                      className="btn r-04 btn--theme btn--primary"
                    >
                      Join Telegram{" "}
                      <i className="fa-brands fa-telegram fa-lg" />
                    </Link>
                    <Link
                      href="https://docs.koinos.io/"
                      target="_blank"
                      className="btn r-04 btn--theme btn--secondary"
                    >
                      Build on Koinos{" "}
                      <i className="fa-solid fa-code fa-lg" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* END HERO CONTENT */}
          </div>
        </div>
      </section>
    </>
  );
}