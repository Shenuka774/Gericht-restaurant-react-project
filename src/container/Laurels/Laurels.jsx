import React from "react";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card" id="awards">
    <img src={imgUrl} alt="Awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {title}
      </p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);
const Laurels = () => (
  <div
    className="app__bg app__wrapper section__padding"
    id="laurels"
    style={{ position: "relative" }}
  >
    <div className="app__laurels_logo">
      <img src={images.logo} alt="Logo" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => (
          <AwardCard award={award} key={award.title} />
        ))}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} />
    </div>
  </div>
);

export default Laurels;
