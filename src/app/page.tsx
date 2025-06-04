/* eslint-disable react/no-unescaped-entities */
import { ArrowRightIcon, CalendarIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Votre rendez-vous dermatologique en{' '}
            <span className="text-indigo-600">quelques clics</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Accédez à des consultations dermatologiques de qualité en téléconsultation ou dans l'un de nos espaces dédiés partout en France.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center gap-2">
            Prendre rendez-vous
            <ArrowRightIcon className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Quick Appointments */}
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CalendarIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Rendez-vous rapide</h3>
              <p className="text-gray-600">
                Obtenez un rendez-vous sous 48h avec un dermatologue qualifié
              </p>
            </div>

            {/* Nearby Locations */}
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPinIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Proche de chez vous</h3>
              <p className="text-gray-600">
                Des espaces de consultation partout en France
              </p>
            </div>

            {/* Expert Care */}
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <UserGroupIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Suivi personnalisé</h3>
              <p className="text-gray-600">
                Une équipe de spécialistes à votre écoute
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Décrivez vos symptômes",
                description: "Remplissez un questionnaire détaillé sur votre condition"
              },
              {
                step: 2,
                title: "Choisissez un créneau",
                description: "Sélectionnez l'horaire qui vous convient le mieux"
              },
              {
                step: 3,
                title: "Sélectionnez un dermatologue",
                description: "Choisissez parmi nos spécialistes qualifiés"
              },
              {
                step: 4,
                title: "Confirmez votre RDV",
                description: "Recevez une confirmation instantanée par email"
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
