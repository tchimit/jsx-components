import React from "react";
// import faker from "faker";//we are not using it in this component

const CommentDetail = props => {
    console.log(props);
    return (
        <div>
            <div className="comment">
                <a href="/" className="avatar">
                    <img alt="avatar" src={props.image} />
                </a>
                <div className="content">
                    <a href="/" className="author">
                        {props.author}
                    </a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">{props.commentText}</div>
                </div>
            </div>
        </div>
    )
}

export default CommentDetail;