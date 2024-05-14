import React from 'react'

const ReviewForm = () => {
  return (
    <>
        <form class="comment-form">
                        <p class="comment-notes">
                            Your email address will not be published. Required fields are marked
                            <span class="required">*</span>
                        </p>
                        <div class="comment-form-rating">
                            <label>
                                Your rating
                                <span class="required">*</span>
                            </label>
                            <div class="stars">
                                <a href="#" class="star">
                                    <i class="bi bi-star-fill"></i>
                                </a>
                                <a href="#" class="star">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </a>
                                <a href="#" class="star">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </a>
                                <a href="#" class="star">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                </a>
                                <a href="#" class="star">
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star/-fill"></i>
                                </a>
                            </div>
                        </div>
                        <div class="comment-form-comment form-comment">
                            <label for="comment">
                                Your review
                                <span class="required">*</span>
                            </label>
                            <textarea id="comment" cols="50" rows="10"></textarea>
                        </div>
                        <div class="comment-form-author form-comment">
                            <label for="name">
                                Name
                                <span class="required">*</span>
                            </label>
                            <input id="name" type="text"/>
                        </div>
                        <div class="comment-form-email form-comment">
                            <label for="email">
                                Email
                                <span class="required">*</span>
                            </label>
                            <input id="email" type="email"/>
                        </div>
                        <div class="comment-form-cookies">
                            <input id="cookies" type="checkbox"/>
                                <label for="cookies">
                                    Save my name, email, and website in this browser for the next time I
                                    comment.
                                    <span class="required">*</span>
                                </label>

                        </div>
                        <div class="form-submit">
                            <input type="submit" class="btn submit"/>
                        </div>
                    </form>
    </>
  )
}

export default ReviewForm