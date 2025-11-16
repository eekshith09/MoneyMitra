
import React, { useState, useEffect } from 'react';
import type { Screen, Language } from '../types';
import { getTranslation } from '../data/translations';
import { HomeIcon } from './icons';

interface EnhancedLogTransactionScreenProps {
  navigate: (screen: Screen) => void;
  onComplete: () => void;
  language: Language;
}

// Mock SMS data
const mockSms = [
    { id: 1, text: "Rs 450.00 credited to your A/c from RAJESH KUMAR via UPI. Google Pay" },
    { id: 2, text: "Rs 200 debited from A/c XX1234 to DINESH@paytm for Fuel via PhonePe." },
    { id: 3, text: "You have received ₹150 from Suresh via UPI." },
    { id: 4, text: "Paid ₹80 for Food at Swadisht Restaurant using UPI." },
];

export const EnhancedLogTransactionScreen: React.FC<EnhancedLogTransactionScreenProps> = ({ navigate, onComplete, language }) => {
  const t = getTranslation(language);
  const [type, setType] = useState<'income' | 'expense'>('expense');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [showSmsModal, setShowSmsModal] = useState(false);
  const [selectedSms, setSelectedSms] = useState<number[]>([]);

  const langCodeMap = { english: 'en-IN', hindi: 'hi-IN', telugu: 'te-IN' };
  
  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
        alert("Sorry, your browser doesn't support voice recognition.");
        return;
    }
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = langCodeMap[language];
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);

    recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        parseTranscript(transcript);
    };
    recognition.start();
  };

  const parseTranscript = (transcript: string) => {
      const numberMatch = transcript.match(/\d+/);
      if(numberMatch) setAmount(numberMatch[0]);

      if (transcript.includes('spent') || transcript.includes('paid') || transcript.includes('खर्च') || transcript.includes('ఖర్చు')) {
          setType('expense');
      } else if (transcript.includes('received') || transcript.includes('got') || transcript.includes('earned') || transcript.includes('मिला') || transcript.includes('వచ్చింది')) {
          setType('income');
      }
      
      const expenseCategories = t.fuel.toLowerCase();
      if(transcript.includes(expenseCategories)) setCategory('fuel');
      // Add more category parsing...
      setDescription(transcript);
  };

  const handleSave = () => {
    if (amount && category) {
      onComplete();
      navigate('home');
    } else {
      alert('Please fill amount and category.');
    }
  };

  const toggleSmsSelection = (id: number) => {
    setSelectedSms(prev => prev.includes(id) ? prev.filter(smsId => smsId !== id) : [...prev, id]);
  };
  
  const handleImportSms = () => {
    // In a real app, this would parse selected SMS and create transactions
    onComplete(); // Simulate one transaction log for now
    setShowSmsModal(false);
    alert(`${selectedSms.length} transactions imported!`);
    navigate('home');
  };

  const incomeCategories = [{id: 'rideFare', label: t.rideFare}, {id: 'tip', label: t.tip}, {id: 'bonus', label: t.bonus}, {id: 'other', label: t.other}];
  const expenseCategories = [{id: 'fuel', label: t.fuel}, {id: 'food', label: t.food}, {id: 'repairs', label: t.repairs}, {id: 'tolls', label: t.tolls}, {id: 'personal', label: t.personal}, {id: 'other', label: t.other}];
  const currentCategories = type === 'income' ? incomeCategories : expenseCategories;

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-50 min-h-screen">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">{t.logTransaction}</h1>
        <button onClick={() => navigate('home')} className="p-2 rounded-full hover:bg-gray-200">
            <HomeIcon className="w-6 h-6 text-gray-600"/>
        </button>
      </header>
      
      <div className="flex gap-2 mb-6">
        <button onClick={handleVoiceInput} className="flex-1 bg-blue-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors">
            <i className="fa-solid fa-microphone"></i> {isListening ? t.listening : t.speak}
        </button>
        <button onClick={() => setShowSmsModal(true)} className="flex-1 bg-green-500 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-colors">
            <i className="fa-solid fa-comment-sms"></i> {t.importFromSMS}
        </button>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-md">
        <div className="grid grid-cols-2 gap-2 mb-4 bg-gray-200 p-1 rounded-lg">
            <button onClick={() => setType('income')} className={`py-2 rounded-md font-semibold ${type === 'income' ? 'bg-green-500 text-white shadow' : ''}`}>{t.income}</button>
            <button onClick={() => setType('expense')} className={`py-2 rounded-md font-semibold ${type === 'expense' ? 'bg-red-500 text-white shadow' : ''}`}>{t.expense}</button>
        </div>
        <div className="space-y-4">
            <div>
                <label className="text-sm font-medium text-gray-700">{t.amount}</label>
                <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="mt-1 w-full p-2 border rounded-md" placeholder="₹ 0.00" />
            </div>
            <div>
                 <label className="text-sm font-medium text-gray-700">{t.category}</label>
                 <select value={category} onChange={e => setCategory(e.target.value)} className="mt-1 w-full p-2 border rounded-md bg-white">
                    <option value="">Select category</option>
                    {currentCategories.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                 </select>
            </div>
             <div>
                <label className="text-sm font-medium text-gray-700">{t.description}</label>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} className="mt-1 w-full p-2 border rounded-md" />
            </div>
             <button onClick={handleSave} className="w-full bg-orange-500 text-white font-bold py-3 rounded-lg hover:bg-orange-600 transition-colors">{t.save}</button>
        </div>
      </div>
      
      {showSmsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                <h2 className="font-bold text-lg mb-4">{t.selectSMSToImport}</h2>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                    {mockSms.map(sms => (
                        <div key={sms.id} onClick={() => toggleSmsSelection(sms.id)} className={`p-2 border rounded-md cursor-pointer ${selectedSms.includes(sms.id) ? 'bg-blue-100 border-blue-500' : ''}`}>
                            <p className="text-xs text-gray-700">{sms.text}</p>
                        </div>
                    ))}
                </div>
                <div className="flex gap-2 mt-4">
                    <button onClick={() => setShowSmsModal(false)} className="flex-1 bg-gray-200 py-2 rounded-md">Cancel</button>
                    <button onClick={handleImportSms} className="flex-1 bg-blue-500 text-white py-2 rounded-md">{t.importSelected}</button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};
