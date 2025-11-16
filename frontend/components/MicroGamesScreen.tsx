
import React, { useState, useEffect } from 'react';
import type { Screen, Language } from '../types';
import { getTranslation } from '../data/translations';
import { HomeIcon } from './icons';

type Game = null | 'transfer' | 'scam' | 'arrange';

export const MicroGamesScreen: React.FC<{ navigate: (screen: Screen) => void; language: Language; onEarnCoins: (coins: number) => void }> = ({ navigate, language, onEarnCoins }) => {
  const t = getTranslation(language);
  const [activeGame, setActiveGame] = useState<Game>(null);

  const completeGame = (coins: number) => {
    onEarnCoins(coins);
    setActiveGame(null);
  };

  const renderGame = () => {
    switch (activeGame) {
      case 'transfer':
        return <MoneyTransferGame t={t} onComplete={() => completeGame(30)} />;
      case 'scam':
        return <SpotTheScamGame t={t} onComplete={() => completeGame(40)} />;
      case 'arrange':
        return <ArrangeStepsGame t={t} onComplete={() => completeGame(50)} />;
      default:
        return (
          <div className="space-y-4">
            <GameCard title={t.moneyTransferGame} icon="💸" onClick={() => setActiveGame('transfer')} />
            <GameCard title={t.spotTheScam} icon="🔍" onClick={() => setActiveGame('scam')} />
            <GameCard title={t.arrangeSteps} icon="🔢" onClick={() => setActiveGame('arrange')} />
          </div>
        );
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-pink-50 min-h-screen">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-pink-800">{t.microGames}</h1>
        <button onClick={() => activeGame ? setActiveGame(null) : navigate('home')} className="p-2 rounded-full hover:bg-pink-100">
          {activeGame ? <span className="font-bold">← Back</span> : <HomeIcon className="w-6 h-6 text-pink-600"/>}
        </button>
      </header>
      {renderGame()}
    </div>
  );
};

const GameCard: React.FC<{ title: string; icon: string; onClick: () => void }> = ({ title, icon, onClick }) => (
  <div onClick={onClick} className="bg-white p-6 rounded-xl shadow-md flex items-center space-x-4 cursor-pointer hover:shadow-lg transition-shadow">
    <div className="text-4xl">{icon}</div>
    <h2 className="text-lg font-bold text-gray-800">{title}</h2>
  </div>
);

// --- Individual Games ---

const MoneyTransferGame: React.FC<{ t: any, onComplete: () => void }> = ({ t, onComplete }) => {
    const [result, setResult] = useState<'correct' | 'wrong' | null>(null);
    const options = ["Friend", "Shop", "Family"];
    
    const handleSelect = (option: string) => {
        if(option === "Friend") setResult('correct');
        else setResult('wrong');

        setTimeout(onComplete, 1500);
    };

    return (
        <div className="text-center p-4 bg-white rounded-lg">
            <h3 className="font-bold text-lg mb-4">{t.sendMoneyToFriend}</h3>
            <div className="text-6xl mb-6">💰</div>
            <div className="space-y-3">
                {options.map(opt => (
                    <button key={opt} onClick={() => handleSelect(opt)} className={`w-full p-3 rounded-lg font-semibold text-white ${result === 'correct' && opt === "Friend" ? 'bg-green-500' : result === 'wrong' && opt !== "Friend" ? 'bg-red-500' : 'bg-blue-500'}`}>{opt}</button>
                ))}
            </div>
        </div>
    );
};

const SpotTheScamGame: React.FC<{ t: any, onComplete: () => void }> = ({ t, onComplete }) => {
    const [result, setResult] = useState<number | null>(null);
    const messages = [
        "✅ ₹500 received from Ravi Kumar",
        "⚠️ Urgent! Your account will be blocked. Share OTP now!",
        "✅ Payment successful to Petrol Pump",
    ];
    const scamIndex = 1;

    const handleSelect = (index: number) => {
        setResult(index);
        setTimeout(onComplete, 1500);
    };

    return (
        <div className="text-center p-4 bg-white rounded-lg">
            <h3 className="font-bold text-lg mb-4">{t.tapTheScamMessage}</h3>
            <div className="space-y-3">
                {messages.map((msg, i) => (
                    <div key={i} onClick={() => handleSelect(i)} 
                    className={`p-3 rounded-lg border-2 cursor-pointer
                        ${result === null ? 'border-gray-300' : (i === scamIndex ? 'border-green-500 bg-green-100' : 'border-red-500 bg-red-100')}
                    `}>
                        {msg}
                    </div>
                ))}
            </div>
        </div>
    );
};

const ArrangeStepsGame: React.FC<{ t: any, onComplete: () => void }> = ({ t, onComplete }) => {
    const [steps, setSteps] = useState([
        { id: 3, text: '💰 Enter Amount', order: 3 },
        { id: 1, text: '📱 Open UPI App', order: 1 },
        { id: 5, text: '✅ Payment Done!', order: 5 },
        { id: 2, text: '👤 Select Contact', order: 2 },
        { id: 4, text: '🔐 Enter PIN', order: 4 },
    ].sort(() => Math.random() - 0.5));
    const [clickedOrder, setClickedOrder] = useState<number[]>([]);

    const handleSelect = (step: typeof steps[0]) => {
        if(clickedOrder.length + 1 === step.order) {
            setClickedOrder([...clickedOrder, step.order]);
        } else {
            // Shake animation on error
        }
    };
    
    useEffect(() => {
        if(clickedOrder.length === 5) {
            setTimeout(onComplete, 1000);
        }
    }, [clickedOrder, onComplete]);

    return (
        <div className="text-center p-4 bg-white rounded-lg">
            <h3 className="font-bold text-lg mb-4">{t.arrangeUPISteps}</h3>
            <div className="space-y-3">
                {steps.map(step => (
                     <button key={step.id} onClick={() => handleSelect(step)} 
                        className={`w-full p-3 rounded-lg font-semibold text-left
                        ${clickedOrder.includes(step.order) ? 'bg-green-500 text-white' : 'bg-gray-200'}
                     `}>
                        {clickedOrder.includes(step.order) && <span className="mr-2">{step.order}.</span>}
                        {step.text}
                    </button>
                ))}
            </div>
        </div>
    );
};
