/* eslint-disable react/no-unescaped-entities */
'use client';

import { ArrowLeftIcon, StarIcon, LanguageIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const doctors = [
  {
    id: 1,
    name: "Dr. Sophie Martin",
    image: "/images/doctors/doctor-1.jpg",
    specialties: ["Dermatologie générale", "Dermatologie esthétique"],
    languages: ["Français", "Anglais"],
    experience: 12,
    rating: 4.9,
    reviews: 234,
    nextSlot: "14:30",
    city: "Paris",
    availability: "Disponible au créneau sélectionné (14:30)"
  },
  {
    id: 2,
    name: "Dr. Thomas Dubois",
    image: "/images/doctors/doctor-2.jpg",
    specialties: ["Dermatologie générale", "Dermatologie pédiatrique"],
    languages: ["Français", "Espagnol"],
    experience: 8,
    rating: 4.7,
    reviews: 156,
    nextSlot: "15:45",
    city: "Boulogne-Billancourt",
    availability: "Disponible au créneau sélectionné (14:30)"
  },
  {
    id: 3,
    name: "Dr. Marie Lambert",
    image: "/images/doctors/doctor-3.jpg",
    specialties: ["Dermatologie générale", "Cancérologie cutanée"],
    languages: ["Français", "Allemand"],
    experience: 15,
    rating: 4.8,
    reviews: 312,
    nextSlot: "16:15",
    city: "Paris",
    availability: "Disponible au créneau sélectionné (14:30)"
  }
];

function DoctorPageContent() {
  const searchParams = useSearchParams();
  const selectedTime = searchParams.get('time') || '14:30';
  const selectedDate = searchParams.get('date') || '2024-06-12';

  // Format the date in French
  const formattedDate = new Date(selectedDate).toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back button */}
        <Link 
          href="/consultation/booths/1/schedule"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Retour
        </Link>

        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-indigo-600 font-semibold">Étape 4/4</span>
            <span className="text-gray-400 text-sm">Choix du médecin</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-indigo-600 rounded-full w-full"></div>
          </div>
        </div>

        {/* Selected date/time reminder */}
        <div className="bg-indigo-50 rounded-xl p-4 mb-8">
          <div className="flex items-center gap-2 text-indigo-700">
            <ClockIcon className="w-5 h-5" />
            <span>Créneau sélectionné : {formattedDate} à {selectedTime}</span>
          </div>
        </div>

        {/* Main content */}
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Choisissez votre médecin
          </h1>

          {/* Doctors list */}
          <div className="space-y-6">
            {doctors.map((doctor) => (
              <div 
                key={doctor.id}
                className="border rounded-xl p-6 hover:border-indigo-600 transition-colors"
              >
                <div className="flex items-start gap-6">
                  {/* Doctor image */}
                  <div className="flex-shrink-0">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>

                  {/* Doctor info */}
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {doctor.name}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-500 mb-2">
                          <MapPinIcon className="w-4 h-4" />
                          <span>{doctor.city}</span>
                          <span>•</span>
                          <span>{doctor.experience} ans d'expérience</span>
                        </div>
                        <div className="text-sm text-green-600">
                          {doctor.availability}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-900">
                          <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                          <span className="font-medium">{doctor.rating}</span>
                          <span className="text-gray-500 ml-1">({doctor.reviews} avis)</span>
                        </div>
                      </div>
                    </div>

                    {/* Specialties and languages */}
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {doctor.specialties.map((specialty, index) => (
                          <span 
                            key={index}
                            className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <LanguageIcon className="w-5 h-5 mr-2" />
                        <span className="text-sm">
                          {doctor.languages.join(", ")}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Select button */}
                  <div className="flex-shrink-0">
                    <Link
                      href="/consultation/confirmation"
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

export default function DoctorPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    }>
      <DoctorPageContent />
    </Suspense>
  );
} 