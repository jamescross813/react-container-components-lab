// Code MovieReviews Here
import React from 'react'

const Review =(review)=>{
    return (<div className="review">
        <h2>{review.headline}</h2>
        <h3>{review.byline}</h3>
        <p>{review.summary_short}</p>
        <a href={review.link.url}/>
    </div>)
}

const MovieReviews = ({ reviews })=>{
   return(
    <div className = "review-list">
        {reviews.map((review)=> (Review(review)))}
        {/* {console.log(reviews)} */}
    </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
  };

export default MovieReviews

