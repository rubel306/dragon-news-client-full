import React from "react";
import img1 from "../../../../public/assets/qZone1.png";
import img2 from "../../../../public/assets/qZone2.png";
import img3 from "../../../../public/assets/qZone3.png";
const Qzone = () => {
  return (
    <div className="mt-5 mb-4">
      <h2>Q-Zone</h2>
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
    </div>
  );
};

export default Qzone;
