import React from 'react';
import Statistics from '../Statistics/Statistics';
import './Post.css'
const Post = ({ data }) => {
    const { name, logo } = data;
    <Statistics data={data}></Statistics>
    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl p-2">
            <figure><img className='w-72 bg-fuchsia-300 rounded-xl' src={logo} alt="Shoes" /></figure>
            <div className="card-body grid grid-cols-3">
                <h2 className="card-title">{name}</h2>

                <button className="btn btn-info justify-end pr-6">Exam</button>
            </div>
        </div>


    );
};

export default Post;