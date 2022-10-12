import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Justify from './Justify/Justify';

const Quiz = () => {
    const posts = useLoaderData();
    const post = posts.data.questions;
    return (
        <div>
            <div>
                {
                    post.map(data => <Justify key={data.id} data={data} ></Justify>)
                }
            </div>
        </div>
    );
};

export default Quiz;