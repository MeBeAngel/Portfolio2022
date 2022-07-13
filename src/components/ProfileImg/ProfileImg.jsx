import React from "react";
import Angel from "../../assets/Angel.jpg";

export default function ProfileImg() {
  return (
    <div className="profile-img">
      <img src={Angel} alt="" />
      <div>
        <p className="text-warning">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen.
        </p>
      </div>
    </div>
  );
}
