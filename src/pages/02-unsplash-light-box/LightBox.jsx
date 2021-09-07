import React from 'react';

function LightBox({
  isLightBoxOpen,
  setIsLightBoxOpen,
  photoList,
  displayPhotoData,
  nextPhoto,
  prevPhoto,
}) {
  return (
    <div className="light-box-mask">
      <div className="photo-info-wrap">
        <h3>
          <span>{photoList.indexOf(displayPhotoData) + 1}</span>/
          {photoList.length}
        </h3>
        <div>
          <p>{displayPhotoData.alt_description}</p>
          <span>—</span>
          <a
            href={displayPhotoData.user?.links?.html}
            target="_blank"
            rel="noreferrer"
          >
            {displayPhotoData.user?.username}
          </a>
        </div>
      </div>
      <div className="photo-box">
        <a href={displayPhotoData.links?.html} target="_blank" rel="noreferrer">
          <img
            src={displayPhotoData?.urls?.regular}
            alt={displayPhotoData.alt_description}
          />
        </a>
        <div className="close-btn" onClick={() => setIsLightBoxOpen(!isLightBoxOpen)}>
          &#10005;
        </div>
        <div className="left-btn" onClick={prevPhoto}>&#8592;</div>
        <div className="right-btn" onClick={nextPhoto}>&#8594;</div>
      </div>
    </div>
  );
}

export default LightBox;
