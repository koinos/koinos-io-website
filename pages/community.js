import Layout from "@/components/layout/Layout";

import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Community() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const title1 = "Decentralization";
  const title2 = "Communities";
  const description = `
        Koinos is a decentralized project governed by the community. Exciting new community projects emerge regularly, reflecting the diversity and creativity of the Koinos community. The open governance allows users to directly influence the development of the platform. Koinos' expanding ecosystem promotes collaboration and innovation, making the blockchain more accessible and transparent. Koinos serves as an example of how decentralization can shape the future of blockchain technologies.
    `;
  const official = [
    {
      type: "communication",
      name: "Telegram",
      description:
        "Join the Koinos Telegram community to stay updated on the latest news, developments, and discussions. Connect with fellow enthusiasts and developers in a lively and interactive environment.",
      image: "/images/community/telegram-image.png",
      url: "https://telegram.koinos.io",
    },
    {
      type: "communication",
      name: "Discord",
      description:
        "Dive into the Koinos Discord server to engage in real-time conversations, share ideas, and collaborate on projects. This is the go-to place for deep discussions, technical support, and community-driven initiatives.",
      image: "/images/community/discord-image.png",
      url: "https://discord.koinos.io",
    },
    {
      type: "social",
      description:
        "Follow Koinos on X (formerly Twitter) for updates, announcements, and insights into the project's progress. Engage with the community through tweets, threads, and direct interactions with the Koinos team.",
      name: "X",
      image: "/images/community/x-image.png",
      url: "https://x.com/koinosnetwork",
    },
  ];
  const communities = [
    {
      type: "community",
      name: "Koinos Army",
      description:
        "The Koinos Army is a vibrant community of supporters dedicated to promoting and advancing the Koinos blockchain. Engage with like-minded enthusiasts, participate in discussions, and stay updated on the latest developments in the Koinos ecosystem.",
      image: "/images/community/koinos-army-image.png",
      url: "",
      x_url: "https://twitter.com/koinosarmy",
      t_url: "https://t.me/thekoinosarmy",
      d_url: "",
    },
    {
      type: "community",
      name: "Planet Koinos",
      description:
        "Planet Koinos is a central hub for the Koinos community, featuring news, updates, and a variety of resources. It offers insights into Koinos projects, educational tools, and community-driven content, fostering engagement and collaboration.",
      image: "/images/community/planet-koinos-image.png",
      url: "https://planetkoinos.com/",
      x_url: "https://twitter.com/PlanetKoinos?s=20&t=phBoiEPQFvKv6yE0TG5SKQ",
      t_url: "",
      d_url: "",
    },
    {
      type: "podcast",
      name: "Koin Press",
      description:
        "Koin Press delivers in-depth articles, analyses, and interviews about the Koinos blockchain. Explore comprehensive content to gain a deeper understanding of Koinos and its impact on the blockchain industry with a focus on the Koinos blockchain.",
      image: "/images/community/koinpress-image.png",
      url: "https://thekoinpress.com/",
      x_url: "https://twitter.com/TheKoinPress",
      t_url: "",
      d_url: "",
    },
    {
      type: "community",
      name: "Koinos Espanol",
      description:
        "Koinos Español is the Spanish-speaking community for Koinos enthusiasts. Connect with fellow Spanish speakers to discuss, share, and collaborate on Koinos-related topics and projects.",
      image: "/images/community/koinos-spanol-image.png",
      url: "",
      x_url: "https://twitter.com/koinos_espaniol",
      t_url: "https://t.me/koinoshispano",
      d_url: "",
    },
    {
      type: "community",
      name: "Koinos Italia",
      description:
        "Koinos Italia brings together Italian-speaking members of the Koinos community. Engage in discussions, share insights, and collaborate with other Italian enthusiasts to further the Koinos mission.",
      image: "/images/community/koinos-italia-image.png",
      url: "",
      x_url: " https://x.com/KoinosItalia/",
      t_url: "https://t.me/KoinosItalia",
      d_url: "",
    },
    {
      type: "podcast",
      name: "Koincast",
      description:
        "Koincast delves into various topics related to blockchain technology, cryptography, and the Koinos ecosystem. Koincast offers valuable insights for blockchain enthusiasts in the Spanish-speaking community",
      image: "/images/community/koincast-image.png",
      url: "https://koincast.io",
      x_url: "https://x.com/koincast",
      t_url: "",
      d_url: "",
    },
  ];
  return (
    <>
      <Layout
        headerStyle={1}
        footerStyle={3}
        headerCls="navbar-dark inner-page-header"
      >
        <div>
          <section
            id="blog-page"
            className="pb-60 inner-page-hero blog-page-section"
          >
            <div className="container">
              <div className="blog-post wide-post wow" data-aos='fade-down'>
                <div className="row d-flex align-items-center">
                  <div className="col-md-6">
                    <div className="blog-post-img">
                      <img
                        className="img-fluid r-16"
                        src="/images/community/community-banner-image.png"
                        alt="blog-post-image"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="blog-post-txt">
                      <span className="post-tag">{title1}</span>
                      <h3 className="s-38 w-700">{title2}</h3>
                      <p>{description}</p>
                    </div>
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="posts-wrapper">
                <div className="row">
                  {official.map((community, index) => (
                    <div className="col-md-6 col-lg-4">
                      <div className="blog-post mb-40 wow clearfix" data-aos='fade-down'>
                        <div className="blog-post-img mb-35">
                          <img
                            className="img-fluid r-16"
                            src={community.image}
                            alt="blog-post-image"
                          />
                        </div>
                        <div className="blog-post-txt">
                          <span className="post-tag color--indigo-400">
                            {community.type}
                          </span>
                          <h6 className="s-20 w-700">{community.name}</h6>
                          <p>{community.description}</p>
                          <div className="blog-post-meta mt-20">
                            <a href={community.url} className="p-sm w-500">
                              Join now
                            </a>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                  ))}
                </div>
                {/* row */}
              </div>{" "}
              <div className="posts-wrapper">
                <div className="row">
                  {communities.map((community, index) => (
                    <div key={index} className="col-md-6 col-lg-4">
                      <div className="blog-post mb-40 wow fadeInUp clearfix">
                        <div className="blog-post-img mb-35">
                          <img
                            className="img-fluid r-16"
                            src={community.image}
                            alt="blog-post-image"
                          />
                        </div>
                        <div className="blog-post-txt">
                          <span className="post-tag">{community.type}</span>
                          <h6 className="s-20 w-700">{community.name}</h6>
                          <p>{community.description}</p>
                          <div className="blog-post-meta mt-20">
                            <ul className="post-meta-list ico-10">
                              {community.t_url && (
                                <li style={{ marginRight: "20px" }}>
                                  <a href={community.t_url}>
                                    <img
                                      style={{
                                        width: "30px",
                                        height: "30px",
                                      }}
                                      src="/images/icons/telegram-icon.png"
                                      alt="telegram-icon"
                                    />
                                  </a>
                                </li>
                              )}
                              {community.d_url && (
                                <li style={{ marginRight: "20px" }}>
                                  <a href={community.d_url}>
                                    <img
                                      style={{
                                        width: "30px",
                                        height: "30px",
                                      }}
                                      src="/images/icons/discord-icon.png"
                                      alt="discord-icon"
                                    />
                                  </a>
                                </li>
                              )}
                              {community.x_url && (
                                <li style={{ marginRight: "20px" }}>
                                  <a href={community.x_url}>
                                    <img
                                      style={{
                                        width: "30px",
                                        height: "30px",
                                      }}
                                      src="/images/icons/x-icon.png"
                                      alt="x-icon"
                                    />
                                  </a>
                                </li>
                              )}
                              {community.url && (
                                <li style={{ marginRight: "20px" }}>
                                  <a href={community.url}>
                                    <img
                                      style={{
                                        width: "30px",
                                        height: "30px",
                                      }}
                                      src="/images/icons/www-icon.png"
                                      alt="www-icon"
                                    />
                                  </a>
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                  ))}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
        </div>
      </Layout>
    </>
  );
}
