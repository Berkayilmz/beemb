import React from 'react'
import './Reviews.css'
import ReviewForm from './ReviewForm'
import ReviewItem from './ReviewItem'

const Reviews = () => {
    return (
        <>
            <div class="tab-panel-reviews">
                <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
                <div class="comments">
                    <ol class="comment-list">
                        <ReviewItem/>
                    </ol>
                </div>
                
                <div class="review-form-wrapper">
                    <h2>Add a review</h2>
                    <ReviewForm/>
                </div>
                
            </div>
        </>
    )
}

export default Reviews