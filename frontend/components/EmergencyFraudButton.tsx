
import React, { useState } from 'react';
import type { Language } from '../types';
import { getTranslation } from '../data/translations';
import { useTextToSpeech } from '../hooks/useTextToSpeech';

type Scenario = null | 'wrongPayment' | 'scamCall' | 'fakeQR' | 'reverseScam';

export const EmergencyFraudButton: React.FC<{ language: Language }> = ({ language }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scenario, setScenario] = useState<Scenario>(null);
  const t = getTranslation(language);

  const scenarios = {
    wrongPayment: { title: t.wrongPaymentSent, steps: ["Step 1...", "Step 2..."] },
    scamCall: { title: t.scamCallReceived, steps: [t.disconnectCall, t.dontShare, t.report, t.changePin] },
    fakeQR: { title: t.scannedFakeQR, steps: ["Step 1...", "Step 2..."] },
    reverseScam: { title: t.reverseUPIScam, steps: ["Step 1...", "Step 2..."] },
  };

  const currentScenario = scenario ? scenarios[scenario] : null;
  const contentToSpeak = currentScenario ? currentScenario.steps.join(' ') : '';
  const { speak, stop, isPlaying } = useTextToSpeech(contentToSpeak, language);
  
  const handleOpen = () => {
      setIsOpen(true);
      setScenario(null);
  }
  
  const handleClose = () => {
      setIsOpen(false);
      stop();
  }
  
  const handleSelectScenario = (s: Scenario) => {
    setScenario(s);
    // Auto-speak when scenario is opened
    setTimeout(() => speak(), 100);
  }

  return (
    <>
      <button onClick={handleOpen} className="fixed bottom-4 left-4 bg-red-600 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-3xl animate-pulse z-40">
        🚨
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-red-700">{currentScenario ? currentScenario.title : t.emergencyFraudHelp}</h2>
              <button onClick={handleClose} className="text-2xl">&times;</button>
            </div>
            
            {currentScenario ? (
                <div>
                    <h3 className="font-semibold mb-2">{t.whatToDo}:</h3>
                    <ul className="space-y-2 text-sm text-gray-800">
                        {currentScenario.steps.map((step, i) => <li key={i}>{step}</li>)}
                    </ul>
                    <div className="mt-4 flex justify-between items-center">
                        <button onClick={() => setScenario(null)} className="text-sm font-semibold text-blue-600">← Back</button>
                        <button onClick={isPlaying ? stop : speak} className="bg-gray-200 px-3 py-1 rounded-md">{isPlaying ? '⏹️' : '🔊 Listen'}</button>
                    </div>
                </div>
            ) : (
                <ul className="space-y-2">
                    <li onClick={() => handleSelectScenario('wrongPayment')} className="p-3 bg-red-50 rounded-md cursor-pointer hover:bg-red-100">{t.wrongPaymentSent}</li>
                    <li onClick={() => handleSelectScenario('scamCall')} className="p-3 bg-red-50 rounded-md cursor-pointer hover:bg-red-100">{t.scamCallReceived}</li>
                    <li onClick={() => handleSelectScenario('fakeQR')} className="p-3 bg-red-50 rounded-md cursor-pointer hover:bg-red-100">{t.scannedFakeQR}</li>
                    <li onClick={() => handleSelectScenario('reverseScam')} className="p-3 bg-red-50 rounded-md cursor-pointer hover:bg-red-100">{t.reverseUPIScam}</li>
                </ul>
            )}
          </div>
        </div>
      )}
    </>
  );
};
