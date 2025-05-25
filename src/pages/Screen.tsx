import React, { useEffect, useState } from 'react';
import html2canvas from 'html2canvas';
import Screen from './pages/Screen';

const Screen: React.FC = () => {
  const [screenshot, setScreenshot] = useState<string | null>(null);

  useEffect(() => {
    html2canvas(document.body).then(canvas => {
      const base64 = canvas.toDataURL('image/png').replace(/^data:image\/png;base64,/, '');
      setScreenshot(base64);
    });
  }, []);

  if (!screenshot) return <div>Capturing screenshot...</div>;

  return (
    <pre style={{ wordBreak: 'break-all', whiteSpace: 'pre-wrap' }}>
      {JSON.stringify({ screenshot }, null, 2)}
    </pre>
  );
};

export default Screen;


<Route path="/screen" element={<Screen />} />