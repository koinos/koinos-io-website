import { useProgramStore } from "@/store/programStore"; // Import the Zustand store
import Link from "next/link";

export default function FeaturedProgram() {
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
        <section id="featured-program" className="pt-100 ct-01 content-section features-section division">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6 order-last order-md-2">
                <div className="txt-block left-column wow" data-aos='fade-left'>
                  <span className="section-id">Featured Program</span>
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
                    className="btn r-04 btn--theme btn--primary text-decoration-none mt-20"
                    >
                    Get Started Now
                  </Link>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 order-first order-md-2">
                <div className="img-block right-column wow" data-aos='fade-right'>
                  <img className="img-fluid rounded" src={featuredProgram.images.banner} alt="content-image" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }