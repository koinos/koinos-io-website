

import BrandSlider1 from "../slider/BrandSlider1"
export default function Brands1_1() {
    return (
        <>
            <div id="brands-1" className="pt-80 pb-100 brands-section">
                <div className="container">
                    {/* BRANDS TITLE */}
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9">
                            <div className="brands-title mb-50">
                                <h5 className="s-18">Martex is loved and trusted by thousands:</h5>
                            </div>
                        </div>
                    </div>
                    {/* BRANDS CAROUSEL */}
                    <div className="row">
                        <div className="col text-center">
                            <BrandSlider1 />
                        </div>
                    </div> {/* END BRANDS CAROUSEL */}
                </div> {/* End container */}
            </div>
        </>
    )
}
