import React, { useState, useEffect } from 'react';

// Глобальный массив для отслеживания порядка изображений на текущей странице
let pageImages = []; 

export default function Figure({ src, caption }) {
  const [imgNumber, setImgNumber] = useState(0);

  useEffect(() => {
    // Добавляем этот экземпляр в список страницы, если его там нет
    if (!pageImages.includes(src)) {
      pageImages.push(src);
    }
    // Присваиваем номер на основе индекса в массиве (+1 для отсчета с 1)
    setImgNumber(pageImages.indexOf(src) + 1);

    // Очистка при уходе со страницы
    return () => {
      pageImages = [];
    };
  }, [src]);

  return (
    <div style={{ textStyle: 'center', margin: '20px 0' }}>
      <img src={src} alt={caption} style={{ display: 'block', margin: '0 auto', maxWidth: '100%' }} />
      <p style={{ textAlign: 'center', fontSize: '0.9em', marginTop: '8px', color: '#555' }}>
        <strong>Рисунок {imgNumber}:</strong> {caption}
      </p>
    </div>
  );
}
