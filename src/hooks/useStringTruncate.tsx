import { useState } from 'react';

const  useStringTruncate = (originalString, maxLength) =>  {
  const [truncatedString, setTruncatedString] = useState(() => {
    return originalString.length > maxLength
      ? `${originalString.slice(0, maxLength)}...`
      : originalString;
  });

  const updateTruncatedString = (newString) => {
    const truncated = newString.length > maxLength
      ? `${newString.slice(0, maxLength)}...`
      : newString;
    setTruncatedString(truncated);
  };

  return [truncatedString, updateTruncatedString];
}

export default useStringTruncate;