export default function VideoPopup({ style, onOpen }) {

  return (
    <>
      {style === "1" && (
        // <a className="video-popup1" onClick={() => setOpen(true)}>
        //     <div className="video-btn play-icon-tra">
        //         <div className="video-block-wrapper">
        //             <i className="fas fa-play" />
        //         </div>
        //     </div>
        // </a>
        <a className="video-popup1" onClick={onOpen}>
          <div className="video-btn video-btn-xl bg--theme">
            <div className="video-block-wrapper">
              <span className="flaticon-play-button" />
            </div>
          </div>
        </a>
      )}
      {style === "2" && (
        <a className="video-popup2" onClick={onOpen}>
          <div className="video-btn video-btn-xl bg--theme">
            <div className="video-block-wrapper">
              <span className="flaticon-play-button" />
            </div>
          </div>
        </a>
      )}
      {style === "3" && (
        <a
          onClick={onOpen}
          className="video-popup2 btn r-04 btn--tra-black hover--violet-100"
        >
          Discover Koinos
        </a>
      )}
      {style === "4" && (
        <a
          onClick={onOpen}
          className="video-popup2 btn r-04 btn--theme hover--tra-black ico-20 ico-right"
        >
          Discover Koinos <span className="flaticon-play" />
        </a>
      )}
      {style === "5" && (
        <a
          onClick={onOpen}
          className="video-popup2 btn r-04 btn--tra-black hover--theme ico-20 ico-right"
        >
          Discover Koinos <span className="flaticon-play" />
        </a>
      )}
    </>
  );
}
