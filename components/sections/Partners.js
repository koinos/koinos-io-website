import BrandSlider1 from "../slider/BrandSlider1";
export default function Partners() {

  return (
    <>
      <div id="brands-1" className="pt-100 pb-40 brands-section">
        <div className="container">
          {/* BRANDS TITLE */}

          {/* BRANDS CAROUSEL */}
          <div className="row">
            <div className="col text-center">
              <BrandSlider1 />
            </div>
          </div>{" "}
          {/* END BRANDS CAROUSEL */}
        </div>{" "}
        {/* End container */}
      </div>
    </>
  );
}
