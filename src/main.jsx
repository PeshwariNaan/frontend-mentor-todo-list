import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeProvider } from './contexts/theme.context';
import { ToDoProvider } from './contexts/todos.context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ToDoProvider>
        <App />
      </ToDoProvider>
    </ThemeProvider>
  </React.StrictMode>
);
