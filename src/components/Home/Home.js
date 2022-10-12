import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
const Home = () => {
    const posts = useLoaderData();
    const post = posts.data;
    return (
        <div>
            <div className=' m-10 title pl-80 py-24 text-sky-800 rounded font-semibold'>
                <h4 className='font-bold text-4xl text-red-700 my-5'> <i>We believe in making  knowledge <br />fun for everyone.</i></h4>
                <p>What makes Sporcle truly special is the diverse community of people who make up our quiz community. Online, an average of over one million quizzes are played daily. Offline, over 15,000 people participate in our live events each week. For every Sporcler, our purpose is to create mentally stimulating diversions that bring them together.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 m-8 mb-28'>
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