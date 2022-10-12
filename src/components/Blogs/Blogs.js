import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='text-start mt-5 border border-success shadow-lg p-3 mx-10 rounded'>
                <h4 className='font-semibold'>1. what is the purpose of react router?</h4>
                <p><small>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.React Router, and dynamic, client-side routing, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information. By preventing a page refresh, and using Router or Link, which is explained in more depth below, the flash of a white screen or blank page is prevented. This is one increasingly common way of having a more seamless user experience. React router also allows the user to utilize browser functionality like the back button and the refresh page while maintaining the correct view of the application.An API is any place where a piece of code talks to another piece of code, but we often use it to mean somebody’s external resource that gives me values, or our own internal database resource(s). If you are using a frontend and a backend, and you are potentially writing in multiple languages that don’t necessarily have the same routing conventions, don’t worry! The backend functions just as an API, and the user really doesn’t interact with it at all. The routes that used to manage the user experience and the routes that used to manage queries to the database are not the same.</small></p>
            </div>
            <div className='text-start mt-5 border border-success shadow-lg p-3 mx-10 rounded'>
                <h4 className='font-semibold'>2. How context api works in react?</h4>
                <p><small>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.The React Context API was been around as an experimental feature for a while now but finally became safe to use in production last year, solving one major problem React problem — prop drilling. In this article, Toptal Freelance Javascript Developer Boris Yordanov will introduce us to the API and illustrate it with two basic web store apps, one built with the Context API and one without it.</small></p>
            </div>
            <div className='text-start mt-5 border border-success shadow-lg p-3 mx-10 mb-10 rounded'>
                <h4 className='font-semibold'>3. what is useRef in react?</h4>
                <p><small>Essentially, useRef is like a “box” that can hold a mutable value in its .current property.You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with , React will set its .current property to the corresponding DOM node whenever that node changes.However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.This works because useRef() creates a plain JavaScript object. The only difference between useRef() and creating a object yourself is that useRef will give you the same ref object on every render.Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.

                </small></p>
            </div>
        </div>
    );
};

export default Blogs;