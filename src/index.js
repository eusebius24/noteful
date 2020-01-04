import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import ErrorBoundary from './ErrorBoundary';
import './index.css';

ReactDOM.render(<BrowserRouter>
                    <ErrorBoundary>
                        <App />
                    </ErrorBoundary>
                </BrowserRouter>, 
        document.getElementById('root'));