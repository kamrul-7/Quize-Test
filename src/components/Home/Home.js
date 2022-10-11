import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
const Home = () => {
    const posts = useLoaderData();
    const post = posts.data;
    return (
        <div>
            <div className='text-start m-10 title p-4 text-white'>
                <h4 className='font-bold text-4xl text-info'>We believe in making knowledge fun for everyone.</h4>
                <p>What makes Sporcle truly special is the diverse community of people who make up our quiz community. Online, an average of over one million quizzes are played daily. Offline, over 15,000 people participate in our live events each week. For every Sporcler, our purpose is to create mentally stimulating diversions that bring them together.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 m-8'>
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