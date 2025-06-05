/* eslint-disable react/no-unescaped-entities */
'use client';

import { CheckCircleIcon, CalendarIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

export default function SuccessPage() {
  const appointmentDetails = {
    doctor: "Dr. Sophie Martin",
    specialty: "Dermatologie générale",
    date: "2024-06-12",
    time: "14:30",
    location: "Cabine Paris 11ème",
    address: "125 Boulevard Voltaire, 75011 Paris"
  };

  const handleAddToCalendar = () => {
    const event = {
      title: `Rendez-vous avec ${appointmentDetails.doctor}`,
      description: `Consultation en ${appointmentDetails.specialty}\nLieu : ${appointmentDetails.location}\nAdresse : ${appointmentDetails.address}`,
      location: appointmentDetails.address,
      startDate: `${appointmentDetails.date}T${appointmentDetails.time}:00`,
      endDate: `${appointmentDetails.date}T${appointmentDetails.time.replace(/(\d{2}):(\d{2})/, (_, h, m) => 
        `${String(Number(h) + 1).padStart(2, '0')}:${m}`)}:00`
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&dates=${event.startDate.replace(/[-:]/g, '')}/${event.endDate.replace(/[-:]/g, '')}`;

    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          {/* Success message */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircleIcon className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Rendez-vous confirmé !
            </h1>
            <p className="text-gray-600">
              Un email de confirmation a été envoyé à votre adresse email.
            </p>
          </div>

          {/* Appointment details */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            {/* Doctor info */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b">
              <Image
                src="https://randomuser.me/api/portraits/women/76.jpg"
                alt={appointmentDetails.doctor}
                width={64}
                height={64}
                className="rounded-full"
              />
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900">{appointmentDetails.doctor}</h3>
                <p className="text-gray-500">{appointmentDetails.specialty}</p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CalendarIcon className="w-6 h-6 text-indigo-600" />
                <div className="text-left">
                  <p className="font-medium">Date</p>
                  <p className="text-gray-500">
                    {new Date(appointmentDetails.date).toLocaleDateString('fr-FR', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ClockIcon className="w-6 h-6 text-indigo-600" />
                <div className="text-left">
                  <p className="font-medium">Heure</p>
                  <p className="text-gray-500">{appointmentDetails.time}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPinIcon className="w-6 h-6 text-indigo-600" />
                <div className="text-left">
                  <p className="font-medium">Lieu</p>
                  <p className="text-gray-500">{appointmentDetails.location}</p>
                  <p className="text-gray-500">{appointmentDetails.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Important information */}
          <div className="text-left mb-8">
            <h3 className="font-semibold text-gray-900 mb-2">Important :</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Arrivez 5 minutes avant votre rendez-vous</li>
              <li>Apportez votre carte Vitale</li>
              <li>En cas d'empêchement, annulez au moins 24h à l'avance</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <Link
              href="/"
              className="block w-full bg-indigo-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-indigo-700 transition-colors"
            >
              Retour à l'accueil
            </Link>
            <button 
              onClick={handleAddToCalendar}
              className="w-full text-gray-600 hover:text-gray-900 flex items-center justify-center gap-2"
            >
              <CalendarIcon className="w-5 h-5" />
              Ajouter à Google Calendar
            </button>
          </div>
        </div>
      </div>
    </main>
  );
} 