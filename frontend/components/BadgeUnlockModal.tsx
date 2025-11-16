
import React from 'react';
import { getTranslation } from '../data/translations';
import type { Language } from '../types';

interface BadgeUnlockModalProps {
  isOpen: boolean;
  onClose: () => void;
  badgeName: string;
  badgeIcon: string;
  language: Language;
}

export const BadgeUnlockModal: React.FC<BadgeUnlockModalProps> = ({ isOpen, onClose, badgeName, badgeIcon, language }) => {
  if (!isOpen) return null;

  const t = getTranslation(language);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 m-4 max-w-sm w-full text-center transform transition-all animate-scale-in">
        <h2 className="text-2xl font-bold text-yellow-500 mb-2">{t.badgeUnlock}</h2>
        <p className="text-gray-600 mb-4">{t.congratulations}</p>
        <div className="text-8xl mb-4">{badgeIcon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{badgeName}</h3>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-orange-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors"
        >
          {t.close}
        </button>
      </div>
    </div>
  );
};
