import React from 'react';
import { createRoot } from 'react-dom/client';
import NoteHeader from './components/NoteHeader';
import NoteBody from './components/NoteBody.js';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <>
    <NoteHeader />
    <NoteBody />
  </>
);