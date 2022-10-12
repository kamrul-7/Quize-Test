import React from 'react';
import { useLoaderData } from 'react-router-dom';
const PostDetails = () => {
    const post = useLoaderData();
    const { id } = post.data;
    const { questions } = post.data;
    return (
        <div>
            <h2>Show Post details:{id}</h2>
            {
                questions.map(question =>
                    console.log(question)
                )
            }
        </div >
    );
};


export default PostDetails;
