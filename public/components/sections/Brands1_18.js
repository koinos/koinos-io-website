import BrandSlider2 from "../slider/BrandSlider2"

export default function Brands1_18() {
    return (
        <>
            <div id="brands-1" className="py-100 brands-section">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            {/* BRANDS CAROUSEL */}
                            <BrandSlider2 />	{/* END BRANDS CAROUSEL */}
                        </div>
                    </div>  {/* End row */}
                </div>	{/* End container */}
            </div>
        </>
    )
}
