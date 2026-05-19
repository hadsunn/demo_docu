import React, {useRef} from 'react';
import {useColorMode} from '@docusaurus/theme-common';

let globalFigureCounter = 0;

export default function Figure({src, alt = '', caption = '', width = 500}) {
  const {colorMode} = useColorMode();
  const figureNumberRef = useRef(null);

  if (figureNumberRef.current === null) {
    globalFigureCounter += 1;
    figureNumberRef.current = globalFigureCounter;
  }

  const num = figureNumberRef.current;
  const captionClass = colorMode === 'dark' ? 'figureCaptionDark' : 'figureCaptionLight';

  return (
    <figure style={{maxWidth: width, margin: '1rem auto', textAlign: 'center'}}>
      <img src={src} alt={alt} style={{width: '100%', height: 'auto'}} />
      <figcaption className={captionClass}>
        Рисунок {num}. {caption}
      </figcaption>
    </figure>
  );
}