
import BrandSlider2 from "../slider/BrandSlider2"
export default function Brands1_11() {
    return (
        <>
            <div id="brands-1" className="py-100 brands-section">
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
                            <BrandSlider2 />
                        </div>
                    </div>  {/* END BRANDS CAROUSEL */}
                </div>	{/* End container */}
            </div>
        </>
    )
}
