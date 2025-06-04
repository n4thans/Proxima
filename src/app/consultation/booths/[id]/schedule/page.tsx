import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Helper function to generate time slots
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 9; hour <= 18; hour++) {
    for (let minute of ['00', '30']) {
      if (hour === 18 && minute === '30') continue;
      slots.push(`${hour}:${minute}`);
    }
  }
  return slots;
};

export default function SchedulePage({ params }: { params: { id: string } }) {
  const timeSlots = generateTimeSlots();
  const today = new Date();
  
  // Generate next 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() + i);
    return date;
  });

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back button */}
        <Link 
          href="/consultation/booths"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Retour
        </Link>

        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-indigo-600 font-semibold">Étape 3/4</span>
            <span className="text-gray-400 text-sm">Choix de l'horaire</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-indigo-600 rounded-full w-3/4"></div>
          </div>
        </div>

        {/* Main content */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Sélectionnez un horaire
          </h1>

          {/* Date selection */}
          <div className="flex gap-4 overflow-x-auto pb-4 mb-8">
            {dates.map((date, index) => (
              <button
                key={index}
                className={`flex-shrink-0 p-4 rounded-xl border-2 ${
                  index === 0 ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-indigo-600'
                }`}
              >
                <p className="text-sm text-gray-500 mb-1">
                  {date.toLocaleDateString('fr-FR', { weekday: 'short' })}
                </p>
                <p className="text-lg font-semibold">
                  {date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                </p>
              </button>
            ))}
          </div>

          {/* Time slots grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
            {timeSlots.map((slot, index) => (
              <button
                key={index}
                className="p-3 rounded-xl border-2 border-gray-200 hover:border-indigo-600 transition-colors"
              >
                {slot}
              </button>
            ))}
          </div>

          {/* Continue button */}
          <div className="mt-8">
            <Link
              href="/consultation/doctor"
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