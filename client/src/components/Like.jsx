// import React from 'react'
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import ThumbDownIcon from '@mui/icons-material/ThumbDown';
// import './Like.css'

// export default function Like() {
//     document.querySelectorAll(".post").forEach(post => {
//         const postId = post.dataset.postId;
//         const ratings = post.querySelectorAll(".post-rating");
//         const likeRating = ratings[0];
    
//         ratings.forEach(rating => {
//             const button = rating.querySelector(".post-rating-button");
//             const count = rating.querySelector(".post-rating-count");
    
//             button.addEventListener("click", async () => {
//                 if (rating.classList.contains("post-rating-selected")) {
//                     return;
//                 }
    
//                 count.textContent = Number(count.textContent) + 1;
    
//                 ratings.forEach(rating => {
//                     if (rating.classList.contains("post-rating-selected")) {
//                         const count = rating.querySelector(".post-rating-count");
    
//                         count.textContent = Math.max(0, Number(count.textContent) - 1);
//                         rating.classList.remove("post-rating-selected");
//                     }
//                 });
    
//                 rating.classList.add("post-rating-selected");
    
//                 const likeOrDislike = likeRating === rating ? "like" : "dislike";
//                 const response = await fetch(`/posts/${postId}/${likeOrDislike}`);
//                 const body = await response.json();
//             });
//         });
//     });
//   return (
//     <div>
//         <div class="post" data-post-id="7712">
		
// 		<div class="post-ratings-container">
// 			<div class="post-rating">
// 				<span class="post-rating-button material-icons"><ThumbUpIcon /></span>
// 				<span class="post-rating-count">0</span>
// 			</div>
// 			<div class="post-rating">
// 				<span class="post-rating-button material-icons"><ThumbDownIcon /></span>
// 				<span class="post-rating-count">0</span>
// 			</div>
// 		</div>
// 	</div>
//     </div>
//   )
// }
import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import './Like.css';

export default function Like() {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleLike = async () => {
    if (selected === 'like') return;

    if (selected === 'dislike') {
      setDislikeCount(dislikeCount - 1);
    }

    setLikeCount(likeCount + 1);
    setSelected('like');

    const response = await fetch(`/posts/7712/like`);
    const body = await response.json();
    // Handle response if needed
  };

  const handleDislike = async () => {
    if (selected === 'dislike') return;

    if (selected === 'like') {
      setLikeCount(likeCount - 1);
    }

    setDislikeCount(dislikeCount + 1);
    setSelected('dislike');

    const response = await fetch(`/posts/7712/dislike`);
    const body = await response.json();
    // Handle response if needed
  };

  return (
    <div className="post" data-post-id="7712">
      <div className="post-ratings-container">
        <div
          className={`post-rating ${selected === 'like' ? 'post-rating-selected' : ''}`}
          onClick={handleLike}
        >
          <span className="post-rating-button"><ThumbUpIcon /></span>
          <span className="post-rating-count">{likeCount}</span>
        </div>
        <div
          className={`post-rating ${selected === 'dislike' ? 'post-rating-selected' : ''}`}
          onClick={handleDislike}
        >
          <span className="post-rating-button"><ThumbDownIcon /></span>
          <span className="post-rating-count">{dislikeCount}</span>
        </div>
      </div>
    </div>
  );
}
