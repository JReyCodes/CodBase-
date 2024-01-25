import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import './style.css'


const root = createRoot(document.getElementById('root'));

root.render(   

    <div>
        <HashRouter>
            <App/>   
        </HashRouter>
    </div>
   
);