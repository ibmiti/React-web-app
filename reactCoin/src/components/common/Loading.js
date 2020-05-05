// importing or inheriting React syntax and jsx usage key words etc here.
import React from 'react';
import './Loading.css';

// declaring a constant variable which holds a function which is defined with arrow syntax 
// it returns a html element of div with a class name of loading
const Loading = () => {
    return <div className="Loading" />;
}
// allowing this file to be inheritable to files which will extend this file
export default Loading;