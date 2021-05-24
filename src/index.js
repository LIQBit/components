import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
           <ApprovalCard />
           <CommentDetail 
             author="Sam" 
             timeAgo="Today at 4:45pm" 
             commentText="I like counting peanut shells." 
             avatar={faker.image.avatar()}/> 
           <CommentDetail 
             author="Alex" 
             timeAgo="Today at 6:05pm" 
             commentText="I can't believe it's not butter!"
             avatar={faker.image.avatar()}/> 
           <CommentDetail 
             author="Harry Plinkett" 
             timeAgo="Yesterday at 2:25am" 
             commentText="Would anyone like a pizza roll?"
             avatar={faker.image.avatar()}/> 
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))