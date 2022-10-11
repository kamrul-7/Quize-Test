import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
const Home = () => {
    const posts = useLoaderData();
    const post = posts.data;
    return (
        <div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-16 m-16'>
                {
                    post.map(data => <Post
                        key={data.id}
                        data={data}></Post>)
                }

            </div>
        </div>
    );
};

export default Home;