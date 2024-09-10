import { useProgramStore } from "@/store/programStore"; // Import the Zustand store
import { useRef, useEffect } from "react";
import { animate } from "../utils/animate";
import Link from "next/link";

export default function FeaturedProgram() {
    const sectionRef = useRef(null);
  
    useEffect(() => {
      if (sectionRef.current) {
        animate(sectionRef.current);
      }
    }, [sectionRef]);
  
    // Get the programs from the store
    const programs = useProgramStore((state) => state.programs);
  
    // Find the program with the featured flag set to true
    const featuredProgram = Object.values(programs).find((program) => program.featured);
  
    // If no program is featured, render a default message
    if (!featuredProgram) {
      return <p>No featured program at this time.</p>;
    }
  
    return (
      <>
        <section id="featured-program" className="pt-100 ct-01 content-section features-section division" ref={sectionRef}>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6 order-last order-md-2">
                <div className="txt-block left-column wow fadeInRight">
                  <span className="">Featured Program</span>
                  <h2 className="s-46 w-700">{featuredProgram.title}</h2>
                  {/* Render the short description here */}
                  <p>{featuredProgram.shortDescription} <a target="_self" href={`/programs/${featuredProgram.url}/`}>Learn more</a></p>
                  <h5 className="s-24 w-700">{featuredProgram.smallTitle}</h5>
                  {/* Key Points */}
                  <ul>
                    {featuredProgram.keyPoints.map((point, index) => (
                      <li key={index}>
                        <div className="cbox-1 ico-15">
                          <div className="ico-wrap color--theme">
                            <div className="cbox-1-ico"><span className="flaticon-check" /></div>
                          </div>
                          <div className="cbox-1-txt">
                            <p>{point}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  <Link
                    href={featuredProgram.website}
                    className="btn r-04 btn--theme fw-normal text-decoration-none hover--tra-black mt-20"
                    >
                    Join the contest now!
                  </Link>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 order-first order-md-2">
                <div className="img-block right-column wow fadeInLeft">
                  <img className="img-fluid rounded" src={featuredProgram.images.banner} alt="content-image" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }