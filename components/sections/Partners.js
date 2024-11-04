import BrandSlider from "../slider/BrandSlider";
export default function Partners() {

  return (
    <>
      <div id="brands-1" className="pt-100 pb-40 brands-section">
        <div className="container">
          {/* BRANDS TITLE */}

          {/* BRANDS CAROUSEL */}
          <div className="row">
            <div className="col text-center">
              <BrandSlider />
            </div>
          </div>{" "}
          {/* END BRANDS CAROUSEL */}
        </div>{" "}
        {/* End container */}
      </div>
    </>
  );
}
