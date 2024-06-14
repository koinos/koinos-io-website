import Link from "next/link";
import { useState, useEffect } from "react";

export default function MediumBlog() {
  const mediumRssFeedJsonLink =
    "/api/blog-proxy";
  const maxItems = 3;

  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(mediumRssFeedJsonLink);
        const data = await res.json();
        const items = data.items;
        setItems(items);
      } catch {
        console.log("error fetching items from medium blog rss feed");
        setError(true);
      }
    }
    fetchData();
  }, []);

  // convert items to displayItems, strip out what we need etc
  useEffect(() => {
    if (items.length > 0) {
      let returnItems = [];
      for (let i = 0; i < items.length; i++) {
        let returnItem = {};
        returnItem.title = items[i].title.replace(/&amp;/g, "&");
        returnItem.link = items[i].link;
        // convert date like 2023-10-25 16:42:26 to Oct 25, 2023
        let date = new Date(items[i].pubDate);
        date = date.toLocaleString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
        returnItem.pubDate = date;
        // get image from first image tag in content
        let content = items[i].content;
        let imgStart = content.indexOf("<img");
        if (imgStart !== -1) {
          let imgEnd = content.indexOf(">", imgStart);
          let imgTag = content.substring(imgStart, imgEnd + 1);
          let srcMatch = imgTag.match(/src\s*=\s*"([^"]+)"/i);
          let src = srcMatch ? srcMatch[1] : null;
          returnItem.image = src;
        } else {
          returnItem.image = null; // maybe set a default image here in case there is no image in the post
        }
        // get description from first paragraph in content and strip out html tags
        let pStart = content.indexOf("<p>");
        let pEnd = content.indexOf("</p>", pStart);
        let pTag = content.substring(pStart, pEnd + 4);
        let description = pTag.replace(/(<([^>]+)>)/gi, "").replace(/&amp;/g, "&");
        // if description is too long, truncate it and add ellipsis
        if (description.length > 200) {
          description = description.substring(0, 200) + "...";
        }
        returnItem.description = description;
        returnItem.author = items[i].author;
        returnItems.push(returnItem);
        if (i === maxItems - 1) {
          break;
        }
      }
      setDisplayItems(returnItems);
    }
  }, [items]); // re-run when items changes

  return (
    <>
      <section id="blog-1" className="py-100 blog-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-9">
              <div className="section-title mb-70">
                {/* Title */}
                <h2 className="s-52 w-700">News &amp; Updates</h2>
                {/* Text */}
              </div>
            </div>
          </div>
          <div className="row">
            {displayItems &&
              displayItems.map((item, index) => (
                  <div className="col-md-6 col-lg-4" key={index}>
                    <div className="blog-post wow fadeInUp">
                      {/* BLOG POST IMAGE */}
                      <div className="blog-post-img mb-35">
                        <Link href={item.link}>
                          <img
                            className="img-fluid light-theme-img r-16"
                            src={item.image}
                            alt="blog-post-image"
                            style={{ border: "2px solid #000" }}
                          />
                          <img
                            className="img-fluid dark-theme-img r-16"
                            src={item.image}
                            alt="blog-post-image"
                            style={{ border: '1px solid #fff' }}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
              ))}
          </div>
          <div className="row">
            {displayItems &&
              displayItems.map((item, index) => (
                  <div className="col-md-6 col-lg-4" key={index}>
                    <div className="blog-post wow fadeInUp">
                      {/* BLOG POST TEXT */}
                      <div className="blog-post-txt">
                        {/* Post Link */}
                        <h6 className="s-20 w-700">
                          <Link href={item.link}>{item.title}</Link>
                        </h6>
                        {/* Text Description */}
                        <p>{item.description}</p>
                        {/* Post Meta */}
                        <div className="blog-post-meta mt-20">
                          <ul className="post-meta-list ico-10">
                            <li>
                              <p className="p-sm">Published on {item.pubDate}</p>
                            </li>
                          </ul>
                        </div>
                      </div>{" "}
                      {/* END BLOG POST TEXT */}
                    </div>
                  </div>
              ))}
            {!displayItems && <div>Loading...</div>}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
}
