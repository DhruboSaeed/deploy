import React from "react";
import LeftSection from "./LeftSection";
import AsideSection from "./AsideSection";

function Feed() {
  return (
    <div className="main_container">
      <div className="container">
        <div className="body_container">
          <LeftSection />
          <AsideSection />
        </div>
      </div>
    </div>
  );
}

export default Feed;
