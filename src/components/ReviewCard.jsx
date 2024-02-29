import React from "react";
import './css/reviews.css';
import stars from './icons/stars.svg'

function ReviewCard({ review }) {
  return (
    <div className="card">
        <img src={stars} alt="5 stars" />
        <p>{review.text}</p>
    </div>
  );
}

export default ReviewCard;
