

import BrandSlider1 from "../slider/BrandSlider1"
export default function Brands1_3() {
    return (
        <>
            <div id="brands-1" className="py-100 brands-section">
                <div className="container">
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
