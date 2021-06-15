import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, subscriber, updateMessage, addMessageDialog, updateMessageDialog} from "./redux/state";

export let reRender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateMessage={updateMessage} addMessageDialog={addMessageDialog} updateMessageDialog={updateMessageDialog}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

subscriber(reRender);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
