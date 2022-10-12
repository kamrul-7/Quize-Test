import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'
const Post = ({ data }) => {
    const { id, name, logo, total } = data;

    return (
        <div className="card card-compact bg-base-100 shadow-xl p-2">
            <figure><img className='bg-base-300 rounded-xl' src={logo} alt="Shoes" /></figure>
            <div className="card-body grid grid-cols-3">
                <h2 className="card-title">{name}</h2>
                <p className='ml-2 mt-3'><small>Total Q.</small> <b>{total}</b></p>
                <Link to={`/justify/${id}`}><button className="btn btn-info">Quiz</button></Link>
            </div>
        </div>


    );
};

export default Post;