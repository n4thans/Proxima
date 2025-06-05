import { ArrowLeftIcon, WifiIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const booths = [
  {
    id: 1,
    name: "Cabine Paris 11ème",
    address: "125 Boulevard Voltaire",
    city: "Paris",
    postalCode: "75011",
    distance: "1.2",
    rating: 4.8,
    reviews: 124,
    nextSlot: "Aujourd'hui 14:30",
    features: ["wifi", "parking", "handicap"],
  },
  {
    id: 2,
    name: "Cabine Paris 15ème",
    address: "45 Rue de Vaugirard",
    city: "Paris",
    postalCode: "75015",
    distance: "2.5",
    rating: 4.6,
    reviews: 89,
    nextSlot: "Aujourd'hui 15:45",
    features: ["wifi", "handicap"],
  },
  {
    id: 3,
    name: "Cabine Boulogne",
    address: "12 Avenue Jean-Baptiste Clément",
    city: "Boulogne-Billancourt",
    postalCode: "92100",
    distance: "3.8",
    rating: 4.9,
    reviews: 156,
    nextSlot: "Aujourd'hui 16:15",
    features: ["wifi", "parking", "handicap"],
  }
];

export default function BoothsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Back button */}
        <Link 
          href="/consultation"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Retour
        </Link>

        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-indigo-600 font-semibold">Étape 2/4</span>
            <span className="text-gray-400 text-sm">Choix de la cabine</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-indigo-600 rounded-full w-2/4"></div>
          </div>
        </div>

        {/* Main content */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Choisissez une cabine
            </h1>
            <button className="text-indigo-600 hover:text-indigo-700 font-medium">
              Voir la carte
            </button>
          </div>

          {/* Booths list */}
          <div className="space-y-6">
            {booths.map((booth) => (
              <div 
                key={booth.id}
                className="border rounded-xl p-6 hover:border-indigo-600 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {booth.name}
                    </h3>
                    <p className="text-gray-500 flex items-center">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      {booth.address}, {booth.postalCode} {booth.city}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-gray-900 font-medium">
                      <span className="text-sm mr-1">{booth.rating}</span>
                      {"★".repeat(Math.round(booth.rating))}
                    </div>
                    <p className="text-gray-500 text-sm">{booth.reviews} avis</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    {booth.features.includes('wifi') && (
                      <div className="flex items-center text-gray-500">
                        <WifiIcon className="w-5 h-5 mr-1" />
                        <span className="text-sm">WiFi</span>
                      </div>
                    )}
                    {booth.features.includes('parking') && (
                      <div className="flex items-center text-gray-500">
                        <span className="text-xl mr-1">🅿️</span>
                        <span className="text-sm">Parking</span>
                      </div>
                    )}
                    {booth.features.includes('handicap') && (
                      <div className="flex items-center text-gray-500">
                        <span className="text-xl mr-1">♿️</span>
                        <span className="text-sm">Accessible</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center text-gray-500">
                      <ClockIcon className="w-5 h-5 mr-1" />
                      <span className="text-sm">{booth.nextSlot}</span>
                    </div>
                    <Link
                      href={`/consultation/booths/${booth.id}/schedule`}
                      className="bg-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:bg-indigo-700 transition-colors inline-flex items-center"
                    >
                      Sélectionner
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 