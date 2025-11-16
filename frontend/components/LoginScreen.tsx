import React, { useState } from 'react';
import type { Language } from '../types';
import { getTranslation } from '../data/translations';

interface LoginScreenProps {
  onLogin: (language: Language, name: string) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('english');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const t = getTranslation(selectedLanguage);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!(name.trim() && phone.trim().length === 10 && /^\d+$/.test(phone.trim()))) {
      alert('Please enter a valid 10-digit phone number and your name.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:3001/save-user", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim()
        })
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error || "Failed to save user!");
        setLoading(false);
        return;
      }

      // Only after successful save → continue login
      onLogin(selectedLanguage, name.trim());
    } catch (error) {
      console.error("Login Error:", error);
      alert("Network error. Please check backend.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-orange-500 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-orange-600">MoneyMitra 🚕</h1>
          <p className="text-gray-500 mt-2">Your friend for financial literacy</p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">{t.language}</label>
          <div className="flex space-x-2">
            {(['english', 'hindi', 'telugu'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-semibold transition-all ${
                  selectedLanguage === lang
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {t[lang]}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">{t.enterPhoneNumber}</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              maxLength={10}
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">{t.enterYourName}</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-orange-500 focus:border-orange-500"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors shadow-lg"
          >
            {loading ? "Please wait..." : t.login}
          </button>
        </form>
      </div>
    </div>
  );
};
