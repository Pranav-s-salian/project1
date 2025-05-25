import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CommandPoller = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch('http://localhost:3001/command');
      const data = await res.json();
      if (data.command) {
        navigate('/' + data.command);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [navigate]);

  return null;
};

export default CommandPoller;