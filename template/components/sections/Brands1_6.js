
import BrandSlider2 from "../slider/BrandSlider2"
export default function Brands1_6() {
    return (
        <>
            <div id="brands-1" className="pt-80 pb-90 bottom-border brands-section">
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
