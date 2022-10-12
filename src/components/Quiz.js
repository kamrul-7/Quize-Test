import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Justify from './Justify/Justify';

const Quiz = () => {
    const posts = useLoaderData();
    const post = posts.data.questions;
    const { name } = posts.data;
    return (
        <div>
            <div className='font-bold text-4xl mt-5'>
                <h2>Quiz of {name}</h2>
            </div>
            <div>
                {
                    post.map(data => <Justify key={data.id} data={data} ></Justify>)
                }
            </div>
        </div>
    );
};

export default Quiz;