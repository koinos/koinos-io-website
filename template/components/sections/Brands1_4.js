
import BrandSlider2 from "../slider/BrandSlider2"
export default function Brands1_4() {
    return (
        <>
            <div id="brands-1" className="py-100 brands-section">
                <div className="container">
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
