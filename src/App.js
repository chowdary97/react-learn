// const heading = React.createElement('h1',{id:'heading'},"Hello Thimma") // second param is the object of attributes like id, classname and title for the heading
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
import React from 'react';
import ReactDOM from 'react-dom'

const parent = React.createElement('div', { id: 'parent' }, [React.createElement('h1', { id: "child" }, "hello world"), React.createElement('h2', { id: "child" }, "hello world")]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
