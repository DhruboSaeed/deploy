import React from "react";
import LeftSection from "./LeftSection";
import AsideSection from "./AsideSection";
import MainFeed from "./MainFeed";

function Feed() {
  return (
    <div className="main_container">
      <div className="container">
        <div className="body_container">
          <LeftSection />
          <MainFeed />
          <AsideSection />
        </div>
      </div>
    </div>
  );
}

export default Feed;
