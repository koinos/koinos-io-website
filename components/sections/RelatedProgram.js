import Link from "next/link"
export default function RelatedProgram({ program, message }) {
  return (
    <>
      {program.active == 1 ?
        (
          <section id="banner-16" className="banner-section mb-100 mt-100">
            <div className="container">
              {/* BANNER-16 WRAPPER */}
              <div className="banner-16-wrapper bg--white-100 block-border r-16">
                <div className="banner-overlay bg--fixed">
                  <div className="row">
                    {/* BANNER-1 TEXT */}
                    <div className="col">
                      <div className="banner-16-txt">
                        {/* Title */}
                        <h4 className="s-24 w-700">Did you know?</h4>
                        {/* Text */}
                        <p className="p-md mb-3">
                          {message}
                        </p>
                        <p className="p-md mb-0">
                          {program.shortDescription}
                        </p>
                        {/* Link */}
                        <div className="txt-block-tra-link mt-15">
                          <Link href={program.url} className="tra-link ico-20 color--theme">
                            Participate in {program.title}{" "}<span className="flaticon-next" />
                          </Link>
                        </div>
                      </div>
                    </div>	{/* END BANNER-16 TEXT */}
                  </div>   {/* End row */}
                </div>   {/* End banner overlay */}
              </div>    {/* END BANNER-16 WRAPPER */}
            </div>     {/* End container */}
          </section>
        ) : ''}
    </>
  )
}
