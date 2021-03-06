import React, { useState, useEffect } from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';


const PhotoLikeButton = ({ photoId, likePhoto }) => {
    return (
        <button className="img-btn" onClick={() => likePhoto(photoId)} >♥</button>
    )
};

export default PhotoLikeButton;