"use client";
import { useState, useEffect } from 'react';
import './Preloader.css';

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className={`preloader ${done ? 'done' : ''}`}>
      <div className="preloader-shape" />
      <div className="preloader-text">Metamorph</div>
    </div>
  );
}
