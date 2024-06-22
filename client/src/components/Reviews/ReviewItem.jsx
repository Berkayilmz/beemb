import React from 'react'
import { IoIosStar } from "react-icons/io";

const ReviewItem = ({ reviewItem }) => {

    const { review, user } = reviewItem
    const { text, createdAt, rating } = review;
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(createdAt).toLocaleDateString(
        "en-EN",
        options
    );

    return (
        <>
            <li className="comment-item">
                <div className="comment-avatar">
                    <img
                        src="/img/avatars/user.png"
                        style={{ width: '40px' }}
                        alt="User Avatar"
                    />

                </div>
                <div className="comment-text">
                    <ul className="comment-star">
                        {Array.from({ length: rating }, (_, index) => {
                            return (
                                <li key={index}>
                                    <i className="bi bi-star-fill"><IoIosStar style={{ color: 'gold' }} /></i>
                                </li>
                            )
                        })}
                    </ul>
                    <div className="comment-meta">
                        <strong style={{ fontSize: '1.2em' }}>{user.username}</strong>
                        <span> - </span>
                        <time>{formattedDate}</time>
                    </div>
                    <div className="comment-description">
                        <p>{text}</p>
                    </div>
                </div>
            </li>
        </>
    )
}

export default ReviewItem