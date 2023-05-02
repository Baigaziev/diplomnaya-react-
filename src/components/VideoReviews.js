import React from "react";

const videoReviews = [
  {
    title: "Review of Gaming Chair X",
    url: "https://www.youtube.com/watch?v=vhGmUoiKfx4",
  },
  {
    title: "Unboxing Gaming Keyboard Y",
    url: "https://www.youtube.com/watch?v=def456",
  },
  {
    title: "Gaming Headset Z - Full Review",
    url: "https://www.youtube.com/watch?v=ghi789",
  },
];

const VideoReviews = () => {
  return (
    <div className="video-reviews-container">
      <h3>Video Reviews</h3>
      {videoReviews.map((review) => (
        <div className="video-review" key={review.url}>
          <h4>{review.title}</h4>
          <iframe
            title={review.title}
            width="560"
            height="315"
            src={review.url}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoReviews;