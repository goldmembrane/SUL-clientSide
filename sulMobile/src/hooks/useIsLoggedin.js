import {useState, useEffect} from 'react';

const useIsLoggedin = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const handleSubmit = () => {
    setIsLoggedin(true);
  };

  return {
    handleSubmit,
    isLoggedin,
  };
};

export default useIsLoggedin;
