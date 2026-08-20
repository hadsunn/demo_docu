import React, { useEffect } from 'react';
import SearchBar from '@theme-original/SearchBar';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

export default function SearchBarWrapper(props) {
  useEffect(() => {
    // Код выполнится только в браузере после монтирования компонента
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    const handleSearchClick = (event) => {
      const target = event.target.closest('a');
      if (target && target.getAttribute('href') && !target.getAttribute('href').startsWith('#')) {
        const rawHref = target.getAttribute('href');
        
        // Превращаем относительный путь в хэш-маршрут
        const cleanPath = rawHref.replace(/^\.\//, '/'); 
        
        event.preventDefault();
        window.location.hash = cleanPath;
      }
    };

    document.addEventListener('click', handleSearchClick);
    return () => document.removeEventListener('click', handleSearchClick);
  }, []);

  return (
    <>
      <SearchBar {...props} />
    </>
  );
}
