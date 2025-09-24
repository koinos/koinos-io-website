import Link from "next/link";

export default function Team() {
  const team = [
    {
      name: "Steve Gerbino",
      role: "Community Developer",
      photo: "/images/sections/team/steve.png",
      twitter: "https://twitter.com/ssgerbino",
      linkedin: "https://www.linkedin.com/in/stevegerbino/",
      github: "https://github.com/sgerbino",
    },
    {
      name: "Michael Vandeberg",
      role: "Community Developer",
      photo: "/images/sections/team/michael.png",
      twitter: "https://twitter.com/koinosvandeberg",
      github: "https://github.com/mvandeberg",
      linkedin: "https://www.linkedin.com/in/michaelvandeberg/",
    },
    {
      name: "Jon Rice",
      role: "Community Advocate",
      photo: "/images/sections/team/jon.jpg",
      linkedin: "https://www.linkedin.com/in/jonricecrypto/",
      twitter: "https://twitter.com/jonricecrypto",
    },
    {
      name: "Pablo Garcia",
      role: "Project Manager + Developer",
      photo: "/images/sections/team/pablo.jpg",
      twitter: "https://x.com/pgarcgo",
    },
    {
      name: "Ron Hamenahem",
      role: "Project Manager + Developer",
      photo: "/images/sections/team/ron.png",
      github: "https://github.com/brklyn8900",
    },
    {
      name: "Justin W.",
      role: "Developer",
      photo: "/images/sections/team/justin.png",
      linkedin: "https://www.linkedin.com/in/justin-welch-5520a9112/",
      twitter: "https://twitter.com/ogjustinw",
      github: "https:/github.com/jredbeard",
    },
    {
      name: "@ederaleng",
      role: "Developer",
      photo: "/images/sections/team/ederaleng.png",
      twitter: "https://twitter.com/ederaleng",
    },
    {
      name: "Luke Willis",
      role: "Community Developer",
      photo: "/images/sections/team/luke.jpg",
      linkedin: "https://linkedin.com/in/lukemwillis",
      twitter: "https://twitter.com/lukemwillis",
      github: "https://github.com/lukemwillis",
    },
    {
      name: "Kui He",
      role: "Developer",
      photo: "/images/sections/team/kui.jpg",
      linkedin: "https://www.linkedin.com/in/kuixihe",
      twitter: "https://twitter.com/kuixihe",
    },
    {
      name: "Adriano Foschi",
      role: "Developer",
      photo: "/images/sections/team/adriano.jpg",
      linkedin: "https://www.linkedin.com/in/adrianofoschi",
      twitter: "https://twitter.com/adrihoke",
      github: "https://github.com/adrianofoschi",
    },
    {
      name: "@vonlooten",
      role: "Developer",
      photo: "/images/sections/team/vonlooten.jpg",
      twitter: "https://twitter.com/vonlooten",
    },
    {
      name: "Julián González",
      role: "Developer",
      photo: "/images/sections/team/julian.jpg",
      linkedin:
        "https://www.linkedin.com/in/juli%C3%A1n-gonz%C3%A1lez-50773962/",
      twitter: "https://twitter.com/joticajulian",
      github: "https://github.com/joticajulian",
    },
    {
      name: "@roamin",
      role: "Community Developer",
      photo: "/images/sections/team/roamin.jpg",
      github: "https://github.com/roaminro",
    },
    {
      name: "Frank Weijers",
      role: "Community Developer",
      photo: "/images/sections/team/frank.jpg",
      github: "https://github.com/frenkzcom",
      twitter: "https://twitter.com/frenkzcom",
    },
    {
      name: "@mixibo",
      role: "Developer",
      photo: "/images/sections/team/mixibo.jpg",
      github: "https://github.com/MiXiBo",
    },
    {
      name: "@red.raven",
      role: "Developer",
      photo: "/images/sections/team/red.jpg",
      github: "https://github.com/EtheredRaven",
    },
    {
      name: "@interfecto",
      role: "Consultant + Developer",
      photo: "/images/sections/team/interfecto.jpg",
      github: "https://github.com/interfecto",
      twitter: "https://x.com/interf3cto",
    },
  ];

  return (
    <>
      <section
        id="team"
        className="pb-40 inner-page-hero team-section"
      >
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="section-title mb-80">
                <h2 className="s-42 w-700">
                  We're a group of dreamers and doers, committed to redefining
                  the future
                </h2>
              </div>
            </div>
          </div>
          {/* TEAM MEMBERS WRAPPER */}
          <div className="team-members-wrapper">
            <div className="row row-cols-2 row-cols-md-4">
              {team.map((member) => (
                <div key={member.name} className="col">
                  <div id="tm-2-1" className="team-member mb-60 wow fadeInUp">
                    {/* Team Member Photo */}
                    <div className="team-member-photo r-14">
                      <div className="hover-overlay">
                        <img
                          className="img-fluid"
                          src={member.photo}
                          alt="team-member-foto"
                        />
                        <div className="item-overlay" />
                      </div>
                    </div>
                    <div className="team-member-data">
                      {" "}
                      <h6 className="s-20 color--black w-700">{member.name}</h6>
                      <p className="color--grey">{member.role}</p>
                      {/* Team Member Data */}
                      <div className="tm-social-container">
                        {" "}
                        {/* Additional div for layout */}
                        <ul className="tm-social ico-20 clearfix">
                          {/* ...social links */}
                          {member.linkedin && (
                            <li>
                              <Link href={member.linkedin} target="_blank">
                                <i className="fa-brands fa-linkedin fa-lg"></i>
                              </Link>
                            </li>
                          )}
                          {member.twitter && (
                            <li>
                              <Link href={member.twitter} target="_blank">
                                <i className="fa-brands fa-twitter fa-lg"></i>
                              </Link>
                            </li>
                          )}
                          {member.github && (
                            <li>
                              <Link href={member.github} target="_blank">
                                <i className="fa-brands fa-github fa-lg"></i>
                              </Link>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* TEAM MEMBERS WRAPPER */}
        </div>{" "}
        {/* End container */}
      </section>{" "}
      {/* END TEAM-2 */}
    </>
  );
}
