import React from 'react';
import { Avatar } from '@material-ui/core';
import './Posts.css';

function Posts(props) {
    return (
        <div className="post">
            <div className="post__header" >
            <Avatar 
                className="post_avatar"
                alt={props.username} 
                src="/static/images/avatar/1.jpg"/>
            <h3>{props.username}</h3>
            </div>
            <img 
                className="post__image"
                src={props.imageUrl}
                alt="imageName" />

            
            <h4 className="post__text"><strong>{props.username}</strong> {props.caption} </h4>
        </div>
    )
}

export default Posts
