'use client';

import { ArrowLeftIcon, CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

const consultationReasons = [
  {
    id: 'routine',
    title: "Consultation de routine",
    description: "Suivi régulier, contrôle annuel",
    urgency: "low",
    eligible: true,
    eligibilityMessage: "Parfaitement adapté à la téléconsultation"
  },
  {
    id: 'persistent',
    title: "Problème de peau persistant",
    description: "Acné, eczéma, psoriasis...",
    urgency: "medium",
    eligible: true,
    eligibilityMessage: "Adapté à la téléconsultation avec photos"
  },
  {
    id: 'mole',
    title: "Examen d'un grain de beauté",
    description: "Vérification d'une tache ou d'un grain de beauté suspect",
    urgency: "medium",
    eligible: true,
    eligibilityMessage: "Possible en téléconsultation avec photos HD"
  },
  {
    id: 'emergency',
    title: "Urgence dermatologique",
    description: "Réaction allergique, infection cutanée sévère",
    urgency: "high",
    eligible: false,
    eligibilityMessage: "Consultez les urgences ou SOS Médecins"
  }
];

export default function ConsultationPage() {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Back button */}
        <Link 
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Retour
        </Link>

        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-indigo-600 font-semibold">Étape 1/4</span>
            <span className="text-gray-400 text-sm">Raison de la consultation</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-indigo-600 rounded-full w-1/4"></div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Quelle est la raison de votre consultation ?
          </h1>

          <div className="space-y-4">
            {consultationReasons.map((option) => (
              <label 
                key={option.id}
                className={`block p-6 border rounded-xl transition-colors ${
                  option.eligible 
                    ? 'hover:border-indigo-600 cursor-pointer' 
                    : 'opacity-75 bg-gray-50'
                } ${selectedReason === option.id ? 'border-indigo-600 ring-2 ring-indigo-600 ring-opacity-50' : ''}`}
              >
                <div className="flex items-start">
                  <input 
                    type="radio" 
                    name="consultation-reason"
                    value={option.id}
                    checked={selectedReason === option.id}
                    onChange={() => option.eligible && setSelectedReason(option.id)}
                    className="mt-1 text-indigo-600 focus:ring-indigo-500"
                    disabled={!option.eligible}
                  />
                  <div className="ml-3 flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-gray-900">{option.title}</p>
                        <p className="text-gray-500 text-sm mb-2">{option.description}</p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-2 text-sm ${
                      option.eligible ? 'text-green-600' : 'text-amber-600'
                    }`}>
                      {option.eligible ? (
                        <CheckCircleIcon className="w-5 h-5" />
                      ) : (
                        <ExclamationTriangleIcon className="w-5 h-5" />
                      )}
                      {option.eligibilityMessage}
                    </div>
                  </div>
                </div>
              </label>
            ))}
          </div>

          {/* Continue button */}
          <div className="mt-8 flex justify-end">
            <Link
              href={selectedReason ? "/consultation/booths" : "#"}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedReason 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              onClick={(e) => !selectedReason && e.preventDefault()}
            >
              Continuer
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 