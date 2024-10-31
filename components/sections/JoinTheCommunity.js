import Link from "next/link";

export default function JoinTheCommunity() {
  return (
    <>
      <section id="join-the-community" className="mb-100 mt-100 ct-01 content-section features-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6 order-last order-md-2">
              <div className="txt-block left-column wow" data-aos='fade-left'>
                <span className="section-id">Community</span>
                <h2 className="s-39 w-700">Join the Community</h2>
                <p>
                  If you have any questions, join our community and ask! You will find that the Koinos community is both friendly and helpful, don't be shy. We look forward to meeting you!
                </p>
                <div className="btns-group">
                  <Link
                    href="https://telegram.koinos.io/" target="_blank"
                    className="btn r-04 btn--theme btn--primary mt-20"
                  >
                    Join Telegram{" "}<i className="fa-brands fa-telegram fa-lg" />
                  </Link>
                  <Link
                    href="https://discord.koinos.io/"
                    target="_blank"
                    className="btn r-04 btn--theme btn--secondary"
                  >
                    Join Discord{" "}<i className="fa-brands fa-discord fa-lg" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 order-first order-md-2">
              <div className="img-block right-column wow" data-aos='fade-right'>
                <img
                  className="img-fluid rounded"
                  src="/images/sections/koinos-community.png"
                  alt="Join the community!"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
