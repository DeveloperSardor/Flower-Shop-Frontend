import React from "react";

const GoogleMap = () => {
  return (
    <div className="d-flex map justify-content-center p-2 py-3">
    <iframe src="https://yandex.ru/map-widget/v1/?ll=37.624513%2C55.748635&z=12" width="100%" height="450" frameBorder="1" allowFullScreen={true}></iframe>
    </div>
  );
};

export default GoogleMap;
