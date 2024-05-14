import React from 'react'

const ReviewItem = () => {
  return (
    <>
        <li class="comment-item">
                            <div class="comment-avatar">
                                <img src="img/avatars/avatar1.jpg" alt=""/>
                            </div>
                            <div class="comment-text">
                                <ul class="comment-star">
                                    <li>
                                        <i class="bi bi-star-fill"></i>
                                    </li>
                                    <li>
                                        <i class="bi bi-star-fill"></i>
                                    </li>
                                    <li>
                                        <i class="bi bi-star-fill"></i>
                                    </li>
                                    <li>
                                        <i class="bi bi-star-fill"></i>
                                    </li>
                                    <li>
                                        <i class="bi bi-star-fill"></i>
                                    </li>
                                </ul>
                                <div class="comment-meta">
                                    <strong>admin</strong>
                                    <span>-</span>
                                    <time>April 23, 2022</time>
                                </div>
                                <div class="comment-description">
                                    <p>Sed perspiciatis unde omnis iste natus error sit voluptatem
                                        accusantium doloremque laudantium.</p>
                                </div>
                            </div>
                        </li>
    </>
  )
}

export default ReviewItem