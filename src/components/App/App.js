import React from 'react';
import useBreakpoint from '../../hooks/useBreakpoint';
import './App.css';

export default function App() {
  const breakpoint = useBreakpoint();
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ fontSize: '48px' }}>{breakpoint}</h1>
        <h2 style={{ color: 'gray' }}>
          Change your browser width to see the breakpoint ☝️
        </h2>
      </header>
    </div>
  );
}
