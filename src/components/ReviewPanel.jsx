import React, { useState } from "react";
import './css/reviews.css';
import ReviewCard from "./ReviewCard";
import arrowLeft from './icons/iconArrowLeft.svg';
import arrowRight from './icons/iconArrowRight.svg';


function ReviewPanel() {
  const reviews = [
    { id: 1, text: "Mark displayed a deep appreciation of his craft. It was evident his connection with the piano shows a genuine affection for the instrument" },
    { id: 2, text: "The service was top-notch and our grand piano has never sounded better!" },
    { id: 3, text: "Mark took a lot of care to tune my piano wonderfully. He fixed my sustaining pedal that had been broken for years. He is very knowledgeable and such a lovely soul."},
    { id: 4, text: "Mark was great to deal with from the get go! He was punctual and very thorough with the piano tuning. It sounds MUCH better now! Thanks Mark :) you'll definitely hear from us again soon!"},
    { id: 5, text: "Mark has done a fantastic job on my piano and make it sounds like new again after 5 years without tuning. He took his time to explain what he's going to do and how to do it, and more importantly he know how to explain in plain languge that someone with zero music/piano background can understand." }
  ];

  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  
  // Calculate the number of review cards to show
  const numReviewsToShow = 3;

  const nextReview = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + numReviewsToShow) % reviews.length);
  };

  const previousReview = () => {
    setCurrentReviewIndex((prevIndex) => {
      if (prevIndex - numReviewsToShow < 0) {
        return reviews.length - ((reviews.length - prevIndex) % numReviewsToShow);
      } else {
        return (prevIndex - numReviewsToShow + reviews.length) % reviews.length;
      }
    });
  };

  const reviewsToShow = reviews.slice(currentReviewIndex, currentReviewIndex + numReviewsToShow);

  while (reviewsToShow.length < numReviewsToShow) {
    reviewsToShow.push(...reviews.slice(0, numReviewsToShow - reviewsToShow.length));
  }

  return (
    <div className="review-panel">
      <h1>What our customers say</h1>
      <p>We are proud of our work and service to our customers and have retained an 
    average 5 of 5 star rating on Google Reviews</p>
      <div className="review-row">
        <button onClick={previousReview} aria-label="Previous review">
          <img src={arrowLeft} alt="Previous review" />
        </button>
        {reviewsToShow.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
        <button onClick={nextReview} aria-label="Next review">
          <img src={arrowRight} alt="Next review" />
        </button>
      </div>
    </div>
  );
}

export default ReviewPanel;
