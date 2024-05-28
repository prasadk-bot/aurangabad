import React from 'react';

const transalate = (Variables, key) => {
  let currentLanguage = Variables.LANGUAGE;

  if (!currentLanguage) currentLanguage = 'en';

  return Variables?.[currentLanguage]?.[key] || '';
};

export default transalate;
