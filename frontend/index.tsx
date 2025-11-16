
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <div className="w-full h-full font-sans bg-gray-100">
      <div className="max-w-md mx-auto bg-white shadow-lg min-h-screen">
         <App />
      </div>
    </div>
  </React.StrictMode>
);
