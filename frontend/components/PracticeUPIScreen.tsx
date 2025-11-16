
// Fix: Import `useEffect` from 'react' to resolve the error.
import React, { useState, useEffect } from 'react';
import type { Screen, Language } from '../types';
import { getTranslation } from '../data/translations';
import { HomeIcon } from './icons';

type UPIStage = 'select' | 'amount' | 'pin' | 'result';
interface Beneficiary {
  id: number;
  name: string;
  upiId: string;
  isVerified: boolean;
}

const beneficiaries: Beneficiary[] = [
  { id: 1, name: 'Ravi Kumar', upiId: 'ravi@oksbi', isVerified: true },
  { id: 2, name: 'Shop Owner', upiId: 'shop@paytm', isVerified: true },
  { id: 3, name: 'Unknown User', upiId: 'prize@fake', isVerified: false },
  { id: 4, name: 'Petrol Pump', upiId: 'fuel@bhim', isVerified: true },
];

export const PracticeUPIScreen: React.FC<{ navigate: (screen: Screen) => void; language: Language; }> = ({ navigate, language }) => {
  const t = getTranslation(language);
  const [stage, setStage] = useState<UPIStage>('select');
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<Beneficiary | null>(null);
  const [amount, setAmount] = useState('');
  const [pin, setPin] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState<boolean | null>(null);

  const handleSelectBeneficiary = (b: Beneficiary) => {
    setSelectedBeneficiary(b);
    setStage('amount');
  };

  const handlePay = () => {
    if (parseFloat(amount) > 0) {
      setStage('pin');
    }
  };

  const handlePinInput = (num: string) => {
    if (pin.length < 4) {
      setPin(pin + num);
    }
  };

  const handlePinDelete = () => {
    setPin(pin.slice(0, -1));
  };
  
  const handlePinSubmit = () => {
    if (pin.length === 4) {
      if (selectedBeneficiary?.isVerified) {
        setPaymentSuccess(true);
      } else {
        setPaymentSuccess(false);
      }
      setStage('result');
    }
  };

  useEffect(() => {
    if (pin.length === 4) {
      const timer = setTimeout(handlePinSubmit, 500);
      return () => clearTimeout(timer);
    }
  }, [pin]);


  const reset = () => {
    setStage('select');
    setSelectedBeneficiary(null);
    setAmount('');
    setPin('');
    setPaymentSuccess(null);
  };

  const renderContent = () => {
    switch(stage) {
      case 'select':
        return (
          <div>
            <h2 className="text-lg font-bold text-center mb-4">{t.selectBeneficiary}</h2>
            <div className="space-y-3">
              {beneficiaries.map(b => (
                <div key={b.id} onClick={() => handleSelectBeneficiary(b)} className="bg-white p-4 rounded-lg shadow cursor-pointer flex justify-between items-center">
                  <div>
                    <p className="font-semibold">{b.name}</p>
                    <p className="text-sm text-gray-500">{b.upiId}</p>
                  </div>
                  {b.isVerified ? <span className="text-green-500">✅</span> : <span className="text-red-500 text-xs font-bold">⚠️ NOT VERIFIED</span>}
                </div>
              ))}
            </div>
          </div>
        );
      case 'amount':
        return (
          <div>
            <div className="text-center mb-4 p-2 bg-gray-100 rounded-lg">
                <p className="font-semibold">{selectedBeneficiary?.name}</p>
                <p className="text-sm text-gray-500">{selectedBeneficiary?.upiId}</p>
            </div>
            <h2 className="text-lg font-bold text-center mb-4">{t.enterAmount}</h2>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full text-center text-4xl p-4 border-b-2 mb-4 focus:outline-none" placeholder="₹ 0"/>
            <button onClick={handlePay} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg">{t.payNow}</button>
          </div>
        );
      case 'pin':
        return (
          <div className="text-center">
            <h2 className="text-lg font-bold mb-2">{t.enterPin}</h2>
            <p className="mb-4">to pay ₹{amount}</p>
            <div className="flex justify-center space-x-4 mb-6 text-4xl">
                {[...Array(4)].map((_, i) => <div key={i} className={`w-4 h-4 rounded-full ${i < pin.length ? 'bg-black' : 'bg-gray-300'}`}></div>)}
            </div>
            <div className="grid grid-cols-3 gap-4">
                {[...Array(9)].map((_, i) => <button key={i+1} onClick={() => handlePinInput(String(i + 1))} className="p-4 text-2xl rounded-lg bg-gray-200">{i + 1}</button>)}
                <div></div>
                <button onClick={() => handlePinInput('0')} className="p-4 text-2xl rounded-lg bg-gray-200">0</button>
                <button onClick={handlePinDelete} className="p-4 text-2xl rounded-lg bg-gray-200">⌫</button>
            </div>
          </div>
        );
      case 'result':
        return (
          <div className="text-center">
            {paymentSuccess ? (
              <>
                <div className="text-6xl text-green-500 mb-4">✅</div>
                <h2 className="text-2xl font-bold">{t.paymentSuccessful}</h2>
              </>
            ) : (
              <>
                <div className="text-6xl text-red-500 mb-4">❌</div>
                <h2 className="text-2xl font-bold">{t.scamDetected}</h2>
                <p className="bg-red-100 text-red-700 p-3 rounded-lg mt-4">{t.scamWarning}</p>
              </>
            )}
            <button onClick={reset} className="mt-6 w-full bg-blue-600 text-white font-bold py-3 rounded-lg">{t.tryAgain}</button>
          </div>
        );
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-100 min-h-screen flex flex-col">
       <header className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold text-gray-800">{t.practiceUPI}</h1>
        <button onClick={() => navigate('home')} className="p-2 rounded-full hover:bg-gray-200">
            <HomeIcon className="w-6 h-6 text-gray-600"/>
        </button>
      </header>
      <div className="flex-grow flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-6 w-full">
            {renderContent()}
        </div>
      </div>
    </div>
  );
};