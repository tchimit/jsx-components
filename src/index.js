import React from "react";
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css';
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h2>Warning!</h2>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>


            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:39PM" commentText="Awesome, exactly what I thought" image={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Today at 3:44AM" commentText="Fantastic!"  image={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Yesterday at 8:13PM" commentText="Nice blog post!!"  image={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));