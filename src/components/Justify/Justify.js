import React from 'react';
import { toast } from 'react-toastify';
const Justify = ({ data }) => {
    const { id, question, options, correctAnswer } = data;
    const correct = () => {
        toast.success(correctAnswer, { autoClose: 500 })
    }
    const answer = (id) => {
        if (id === correctAnswer) {
            return toast.success('right answer!', { autoClose: 500 })
        }
        else {
            toast.warning('wrong answer!', { autoClose: 500 })
        }
    }
    return (
        <div>
            <div className='border mt-5 border-indigo-600 p-8 mx-52 text-start mb-5 bg-blue-200 rounded'>
                <svg onClick={correct} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 w-4/5 ml-96">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className='font-bold'>{question.slice(3, -4)}</p>

                {options.map(option => <p className='text-start my-3 ml-16' ><input type="radio" name='check' onClick={() => answer(option)} />{option}</p>)
                }
            </div>
        </div>
    );
};

export default Justify;