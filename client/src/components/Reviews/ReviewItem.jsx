import React from 'react'
import { IoIosStar } from "react-icons/io";

const ReviewItem = () => {
    return (
        <>
            <li className="comment-item">
                <div className="comment-avatar">
                    <img src="/img/avatars/avatar1.jpg" alt="" />
                </div>
                <div className="comment-text">
                    <ul className="comment-star">
                        <li>
                        <IoIosStar style={{ color: 'gold' }} />
                        </li>
                        <li>
                            <IoIosStar style={{ color: 'gold' }} />
                        </li>
                        <li>
                            <IoIosStar style={{ color: 'gold' }} />
                        </li>
                        <li>
                            <IoIosStar style={{ color: 'gold' }} />
                        </li>
                        <li>
                            <IoIosStar style={{ color: 'gold' }} />
                        </li>
                    </ul>
                    <div className="comment-meta">
                        <strong>admin</strong>
                        <span>-</span>
                        <time>April 23, 2022</time>
                    </div>
                    <div className="comment-description">
                        <p>Product Review</p>
                    </div>
                </div>
            </li>
        </>
    )
}

export default ReviewItem