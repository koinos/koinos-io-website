import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useProgramStore } from "@/store/programStore"; 

export default function ProgramTemplate() {
  const programName = "koinosXChaingeContest";
  // Fetch the program data from the store
  const program = useProgramStore((state) => state.programs[programName]); // Change this to the appropriate key

  return (
    <Layout headerStyle={1} footerStyle={3} headerCls="navbar-dark inner-page-header">
      <div>
        {/* Promotion Hero Section */}
        <section id="project-1" className="gr--whitesmoke inner-page-hero single-project">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-11 col-xl-10">
                <div className="project-description">
                  {/* Title and Program Overview */}
                  <div className="project-title">
                    <h2 className="s-52 w-700">{program.title}</h2>
                    <div className="project-data">
                      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                        <div className="col">
                          <p className="p-lg">
                            <span>Category:</span> {program.category}
                          </p>
                        </div>
                        <div className="col">
                          <p className="p-lg">
                            <span>Start Date:</span> {program.startDate}
                          </p>
                        </div>
                        <div className="col">
                          <p className="p-lg">
                            <span>By:</span> {program.owner}
                          </p>
                        </div>
                        <div className="col">
                          <p className="p-lg">
                            <Link href={program.website} className="text-warning">
                              Website
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Preview Image */}
                  <div className="project-priview-img mb-50">
                    <img className="img-fluid r-16" src={program.images.banner} alt="project-preview" />
                  </div>

                  {/* Program Description */}
                  <div className="project-txt">
                    <p>{program.description}</p>

                    {/* List of features */}
                    {program.details && (
                      <ul className="simple-list">
                        {program.details.map((item, index) => (
                          <li key={index} className="list-item">
                            <p>
                              <strong>{item.asset}</strong>: {item.apy} APY,
                              Matching Total: {item.matching} with {item.rewards}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Guide Section (Optional) */}
                    {program.guide && (
                      <>
                        <h5 className="s-24 w-700 mt-35 mb-35">How to Participate</h5>
                        <ol>
                          {program.guide.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ol>
                      </>
                    )}

                    {/* Additional Images (Optional) */}
                    {program.images?.otherImages?.length > 0 && (
                      <div className="row d-flex align-items-center project-inner-img mt-50">
                        {program.images.otherImages.map((img, index) => (
                          <div key={index} className="col-md-6">
                            <div className="project-image project-preview r-10">
                              <div className="hover-overlay">
                                <img className="img-fluid" src={img} alt="project-preview" />
                                <div className="item-overlay" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-5"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}