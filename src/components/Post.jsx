import React from 'react';


const Post = ({ post }) => {
  return (
    <div className="post">
        <div className="post-image-container">
            <img src={post.imageUrl} alt="Post Image" />
        </div>
       
        <div className="post-info">

            <div className="post-info-date">
             <div className="post-today">
            <p className="date-text">Today</p> 
                <ul className="likes">
                    <li> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M1.5 6.29999C1.49991 5.76177 1.6071 5.22893 1.8153 4.7326C2.02351 4.23628 2.32855 3.78644 2.71261 3.40936C3.09667 3.03229 3.55203 2.73555 4.05209 2.53648C4.55215 2.33742 5.08687 2.24003 5.625 2.24999C6.26172 2.24661 6.89189 2.37859 7.47374 2.6372C8.05559 2.8958 8.57584 3.27511 9 3.74999C9.42416 3.27511 9.94441 2.8958 10.5263 2.6372C11.1081 2.37859 11.7383 2.24661 12.375 2.24999C12.9131 2.24003 13.4479 2.33742 13.9479 2.53648C14.448 2.73555 14.9033 3.03229 15.2874 3.40936C15.6714 3.78644 15.9765 4.23628 16.1847 4.7326C16.3929 5.22893 16.5001 5.76177 16.5 6.29999C16.5 10.317 11.7157 13.35 9 15.75C6.29025 13.3297 1.5 10.32 1.5 6.29999Z" fill="black"/>
</svg></li>
                    <li className="likes-text"> <p>{post.likes}</p></li>
            </ul>   
                
            <ul className="comments">
             <li> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M16.5 3C16.5 2.175 15.825 1.5 15 1.5H3C2.175 1.5 1.5 2.175 1.5 3V12C1.5 12.825 2.175 13.5 3 13.5H13.5L16.5 16.5V3Z" fill="black"/>
</svg></li>       
            <li className="comments"><p>{post.comments}</p></li>
            </ul>
            </div>
            
            
            <div className="post-date">
            <p className="date-text">{post.date}</p>

            <ul className="likes">
                    <li> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M1.5 6.29999C1.49991 5.76177 1.6071 5.22893 1.8153 4.7326C2.02351 4.23628 2.32855 3.78644 2.71261 3.40936C3.09667 3.03229 3.55203 2.73555 4.05209 2.53648C4.55215 2.33742 5.08687 2.24003 5.625 2.24999C6.26172 2.24661 6.89189 2.37859 7.47374 2.6372C8.05559 2.8958 8.57584 3.27511 9 3.74999C9.42416 3.27511 9.94441 2.8958 10.5263 2.6372C11.1081 2.37859 11.7383 2.24661 12.375 2.24999C12.9131 2.24003 13.4479 2.33742 13.9479 2.53648C14.448 2.73555 14.9033 3.03229 15.2874 3.40936C15.6714 3.78644 15.9765 4.23628 16.1847 4.7326C16.3929 5.22893 16.5001 5.76177 16.5 6.29999C16.5 10.317 11.7157 13.35 9 15.75C6.29025 13.3297 1.5 10.32 1.5 6.29999Z" fill="black"/>
</svg></li>
                    <li className="likes-text"> <p>{post.likes}</p></li>
            </ul>   
                
            <ul className="comments">
             <li> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
<path d="M16.5 3C16.5 2.175 15.825 1.5 15 1.5H3C2.175 1.5 1.5 2.175 1.5 3V12C1.5 12.825 2.175 13.5 3 13.5H13.5L16.5 16.5V3Z" fill="black"/>
</svg></li>       
            <li className="comments"><p>{post.comments}</p></li>
                </ul>
                
            </div>   
            </div>
            

            <p>Image upload {post.uploadDate}</p>
        </div>
    </div>
);
}

export default Post;
