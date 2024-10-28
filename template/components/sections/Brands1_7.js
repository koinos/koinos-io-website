

import BrandSlider1 from "../slider/BrandSlider1"
export default function Brands1_7() {
    return (
        <>
            <div id="brands-1" className="pt-90 pb-100 brands-section">
                <div className="container">
                    {/* BRANDS TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="brands-title mb-50">
                                <h5 className="s-20 w-700">Trusted and used by over 3,400 companies</h5>
                            </div>
                        </div>
                    </div>
                    {/* BRANDS CAROUSEL */}
                    <div className="row">
                        <div className="col text-center">
                        <BrandSlider1 />
                        </div>
                    </div>  {/* END BRANDS CAROUSEL */}
                </div>	{/* End container */}
            </div>
        </>
    )
}
