'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent !== 'true') {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 md:bottom-10 md:left-10 p-5 bg-glass rounded-md shadow-lg z-50">
      <p className="text-sm text-[#f7f7f7]">Strona używa cookies, aby poprawić jakość obsługi. Kontynuując przeglądanie tej strony, zgadzasz się na nasze użycie ciasteczek. Więcej informacji znajdziesz w naszej <Link className='underline' href='/polityka-prywatnosci'>polityce prywatności</Link></p>
      <button onClick={handleAccept} className="mt-4 flex items-center justify-center bg-[#f7f7f7] text-[#000022] text-[18px] py-2 px-3 rounded-md font-medium shadow-btn max-w-[150px] scale-100 transition-all hover:scale-105">
        Akceptuję
      </button>
    </div>
  );
};

export default CookieConsent;
