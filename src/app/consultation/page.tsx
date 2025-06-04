import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function ConsultationPage() {
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
            {[
              {
                title: "Consultation de routine",
                description: "Suivi régulier, contrôle annuel",
                urgency: "low"
              },
              {
                title: "Problème de peau persistant",
                description: "Acné, eczéma, psoriasis...",
                urgency: "medium"
              },
              {
                title: "Examen d'un grain de beauté",
                description: "Vérification d'une tache ou d'un grain de beauté suspect",
                urgency: "medium"
              },
              {
                title: "Urgence dermatologique",
                description: "Réaction allergique, infection cutanée sévère",
                urgency: "high"
              }
            ].map((option, index) => (
              <label 
                key={index}
                className="block p-4 border rounded-xl cursor-pointer hover:border-indigo-600 transition-colors"
              >
                <div className="flex items-start">
                  <input 
                    type="radio" 
                    name="consultation-reason" 
                    className="mt-1 text-indigo-600 focus:ring-indigo-500"
                  />
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">{option.title}</p>
                    <p className="text-gray-500 text-sm">{option.description}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>

          <div className="mt-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description des symptômes
            </label>
            <textarea
              className="w-full h-32 px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
              placeholder="Décrivez vos symptômes en détail..."
            ></textarea>
            <p className="text-sm text-gray-500 mt-2">
              Minimum 30 caractères requis
            </p>
          </div>

          <div className="mt-8">
            <Link
              href="/consultation/booths"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              Continuer
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 