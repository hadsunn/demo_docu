// src/components/Figure.jsx
import React from 'react';
import './figure.css'; // опционально: стили для figure/figcaption

let _figureCounter = 0;
export function resetFigureCounter() {
  _figureCounter = 0;
}

export default function Figure({ src, alt = '', caption = '', width, height, id }) {
  const num = ++_figureCounter;
  const figId = id || `figure-${num}`;
  const style = {};
  if (width) style.maxWidth = typeof width === 'number' ? `${width}px` : width;
  return (
    <figure id={figId} className="doc-figure" style={{ margin: '1em 0' }}>
      <img src={src} alt={alt} style={{ width: '100%', height: 'auto', ...style }} />
      <figcaption className="doc-figcaption">{`Рисунок ${num}. ${caption}`}</figcaption>
    </figure>
  );
}