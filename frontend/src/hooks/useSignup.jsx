import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
        return false;
      }

      localStorage.setItem('user', JSON.stringify(json));


      dispatch({ type: 'LOGIN', payload: json });


      setIsLoading(false);
      return true;

    } catch (err) {
      setError('An error occurred during signup');
      setIsLoading(false);
      return false;
    }
  };

  return { signup, isLoading, error };
};
