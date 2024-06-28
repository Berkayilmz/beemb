import React from 'react'
import { IoIosStar } from "react-icons/io";
import { BsTrash3 } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const ReviewItem = ({ reviewItem, singleProduct }) => {
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    const userlog = JSON.parse(localStorage.getItem('user'));
    const { review, user } = reviewItem; 
    const { text, createdAt, rating } = review;
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(createdAt).toLocaleDateString(
        "en-EN",
        options
    );

    const handleDelete = async () => {
        try {
            const response = await fetch(`${apiUrl}/api/products/${singleProduct._id}/reviews/${review._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                
                console.log('Review deleted successfully');

                
            } else {
                console.error('Failed to delete review');
            }
        } catch (error) {
            console.error('Error deleting review:', error);
        }
        window.location.reload();
    };

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
                <div className='comment-delete'>
                    {user.username === userlog.username ? <BsTrash3 onClick={handleDelete} /> : <></>}
                </div>
                
            </li>
        </>
    )
}

export default ReviewItem;
