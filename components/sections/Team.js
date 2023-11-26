import Link from "next/link";

export default function Team() {
  const team = [
    {
      name: "Michael Vandeberg",
      role: "CIO of Koinos Group and Koinos Architect",
      photo: "/images/team/michael.png",
      github: "https://github.com/mvandeberg",
      linkedin: "https://www.linkedin.com/in/michaelvandeberg/",
    },
    {
      name: "Steve Gerbino",
      role: "CTO of Koinos Group and Koinos Architect",
      photo: "/images/team/steve.png",
      linkedin: "https://www.linkedin.com/in/stevegerbino/",
      github: "https://github.com/sgerbino",
    },
    {
      name: "Andrew Levine",
      role: "CEO of Koinos Group",
      photo: "/images/team/andrew.png",
      linkedin: "https://www.linkedin.com/in/andrew-levine-koinos/",
      twitter: "https://twitter.com/andrarchy",
    },
    {
      name: "Ron Hamenahem",
      role: "COO of Koinos Group",
      photo: "/images/team/ron.png",
      github: "https://github.com/brklyn8900",
    },
    {
      name: "Nathaniel Caldwell",
      role: "Creator of Koinos CLI",
      photo: "/images/team/nathaniel.png",
      github: "https://github.com/youkaicountry",
    },
    {
      name: "Justin W.",
      role: "Developer",
      photo: "/images/team/justin.jpg",
      linkedin: "https://www.linkedin.com/in/justin-welch-5520a9112/",
      twitter: "https://twitter.com/ogjustinw",
      github: "https:/github.com/jredbeard",
    },
    {
      name: "@ederaleng",
      role: "Developer",
      photo: "/images/team/ederaleng.png",
      twitter: "https://twitter.com/ederaleng",
    },
    {
      name: "Luke Willis",
      role: "Developer",
      photo: "/images/team/luke.jpg",
      linkedin: "https://linkedin.com/in/lukemwillis",
      twitter: "https://twitter.com/lukemwillis",
      github: "https://github.com/lukemwillis",
    },
    {
      name: "Kui He",
      role: "Developer",
      photo: "/images/team/kui.jpg",
      linkedin: "https://www.linkedin.com/in/kuixihe",
      twitter: "https://twitter.com/kuixihe",
    },
    {
      name: "Adriano Foschi",
      role: "Developer",
      photo: "/images/team/adriano.jpg",
      linkedin: "https://www.linkedin.com/in/adrianofoschi",
      twitter: "https://twitter.com/adrihoke",
      github: "https://github.com/adrianofoschi",
    },
    {
      name: "@vonlooten",
      role: "Developer",
      photo: "/images/team/vonlooten.jpg",
      twitter: "https://twitter.com/vonlooten",
    },
    {
      name: "Julián González",
      role: "Developer",
      photo: "/images/team/julian.jpg",
      linkedin:
        "https://www.linkedin.com/in/juli%C3%A1n-gonz%C3%A1lez-50773962/",
      twitter: "https://twitter.com/joticajulian",
      github: "https://github.com/joticajulian",
    },
    {
      name: "@roamin",
      role: "Developer",
      photo: "/images/team/roamin.jpg",
      github: "https://github.com/roaminro",
    },
    {
      name: "Frank Weijers",
      role: "Developer",
      photo: "/images/team/frank.jpg",
      linkedin: "https://www.linkedin.com/in/weijersf",
      github: "https://github.com/frank-weijers",
      twitter: "https://twitter.com/ElImbatido1",
    },
    {
      name: "@mixibo",
      role: "Developer",
      photo: "/images/team/mixibo.jpg",
      github: "https://github.com/MiXiBo",
    },
    {
      name: "@red.raven",
      role: "Developer",
      photo: "/images/team/red.jpg",
      github: "https://github.com/EtheredRaven",
    },
  ];

  return (
    <>
      <section
        id="team"
        className="gr--whitesmoke pb-40 inner-page-hero team-section"
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
