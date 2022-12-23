import React from "react";

import BannerItem from "./BannerItem";
const Banner = () => {
  const bannerData = [
    {
      image:
        "https://raw.githubusercontent.com/rubelrana123/phographer/main/asserts/wedding3.jpg",
      prev: 6,
      id: 1,
      next: 2,
      title: "We Shoot Happiness",
      details:"“Happiness” is an apocalyptic urban thriller set in the near future inside an apartment building that is stratified by social standing. The high-rise apartment is sealed off when a new infectious disease emerges, and the drama depicts the fear, psychological battles, and desperate struggles for survival that ensue."
    },
    {
      image:
        "https://raw.githubusercontent.com/rubelrana123/phographer/main/asserts/weeding255520_960_720.jpg",
      prev: 1,
      id: 2,
      next: 3,
      title: `Emotions Of The Day.`,
      details:"We use different words to talk about sadness: agony, anguish, broken heart, hurt, sorrow, dejection, dismay, homesickness, distress, unhappiness and more. All these emotions can occur in response to a negative or unexpected situations, or life changes."
    },
    {
      image:
        "https://raw.githubusercontent.com/rubelrana123/phographer/main/asserts/couple.jpg",
      prev: 2,
      id: 3,
      next: 1,
      title: `Love The Life You Live`,
      details:"Remember that life is a blessing; be grateful for it. And, since life is a precious gift, why do less than the best you can? Don’t forget to stay true to your own values, don’t let your own negative outlook hold you back"
    },
  ];
  return (
    <div>
      <div className="carousel w-full  ">
        {bannerData.map((sliderInfo) => (
          <BannerItem key={sliderInfo.id} slide={sliderInfo}></BannerItem>
        ))}
      </div>
    </div>
  );
};

export default Banner;
