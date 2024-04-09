import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom'
import './base.css';
// import App from './App';
import router from './router/index.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // React.StrictMode包裹的组件会在开发环境下执行两次，生产环境下只执行一次
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>

);

