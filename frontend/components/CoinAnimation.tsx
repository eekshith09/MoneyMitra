
import React, { useEffect, useState } from 'react';

interface CoinAnimationProps {
  amount: number;
  show: boolean;
  onComplete: () => void;
}

export const CoinAnimation: React.FC<CoinAnimationProps> = ({ amount, show, onComplete }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        onComplete();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 pointer-events-none">
      <div className="relative">
        <div className="animate-bounce text-5xl">
          <span role="img" aria-label="coin">🪙</span>
        </div>
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-yellow-400 text-black text-lg font-bold px-4 py-1 rounded-full shadow-lg whitespace-nowrap">
          + {amount}
        </div>
      </div>
    </div>
  );
};
