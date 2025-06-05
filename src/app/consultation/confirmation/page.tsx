/* eslint-disable react/no-unescaped-entities */
'use client';

import { ArrowLeftIcon, CalendarIcon, MapPinIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, FormEvent } from 'react';

export default function ConfirmationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    socialSecurity: '',
    acceptTerms: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Le nom est requis';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'L&apos;email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'L&apos;email n&apos;est pas valide';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    } else if (!/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(formData.phone)) {
      newErrors.phone = 'Le numéro de téléphone n&apos;est pas valide';
    }
    
    if (!formData.socialSecurity.trim()) {
      newErrors.socialSecurity = 'Le numéro de sécurité sociale est requis';
    } else if (!/^\d{1}\s\d{2}\s\d{2}\s\d{2}\s\d{3}\s\d{3}\s\d{2}$/.test(formData.socialSecurity)) {
      newErrors.socialSecurity = 'Le numéro de sécurité sociale n&apos;est pas valide';
    }
    
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Vous devez accepter les conditions';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        // TODO: Implement API call to save appointment
        // await saveAppointment(formData);
        router.push('/consultation/success');
      } catch (error) {
        console.error('Error saving appointment:', error);
        setErrors({ submit: "Une erreur est survenue. Veuillez réessayer." });
      }
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back button */}
        <Link 
          href="/consultation/doctor"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Retour
        </Link>

        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-indigo-600 font-semibold">Dernière étape</span>
            <span className="text-gray-400 text-sm">Confirmation</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full">
            <div className="h-2 bg-indigo-600 rounded-full w-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Appointment summary */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Récapitulatif du rendez-vous
            </h2>

            {/* Doctor info */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b">
              <Image
                src="https://randomuser.me/api/portraits/women/76.jpg"
                alt="Dr. Sophie Martin"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Dr. Sophie Martin</h3>
                <p className="text-gray-500">Dermatologie générale</p>
              </div>
            </div>

            {/* Appointment details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CalendarIcon className="w-6 h-6 text-indigo-600" />
                <div>
                  <p className="font-medium">Date</p>
                  <p className="text-gray-500">Mercredi 12 juin 2024</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <ClockIcon className="w-6 h-6 text-indigo-600" />
                <div>
                  <p className="font-medium">Heure</p>
                  <p className="text-gray-500">14:30</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPinIcon className="w-6 h-6 text-indigo-600" />
                <div>
                  <p className="font-medium">Lieu</p>
                  <p className="text-gray-500">Cabine Paris 11ème</p>
                  <p className="text-gray-500">125 Boulevard Voltaire, 75011 Paris</p>
                </div>
              </div>
            </div>
          </div>

          {/* Registration form */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Vos informations
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 ${
                    errors.fullName ? 'border-red-500' : ''
                  }`}
                  placeholder="Jean Dupont"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 ${
                    errors.email ? 'border-red-500' : ''
                  }`}
                  placeholder="jean.dupont@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 ${
                    errors.phone ? 'border-red-500' : ''
                  }`}
                  placeholder="06 12 34 56 78"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Numéro de sécurité sociale
                </label>
                <input
                  type="text"
                  value={formData.socialSecurity}
                  onChange={(e) => handleInputChange('socialSecurity', e.target.value)}
                  className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 ${
                    errors.socialSecurity ? 'border-red-500' : ''
                  }`}
                  placeholder="1 23 45 67 890 123 45"
                />
                {errors.socialSecurity && (
                  <p className="mt-1 text-sm text-red-600">{errors.socialSecurity}</p>
                )}
              </div>

              <div className="flex items-start gap-3 mt-6">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.acceptTerms}
                  onChange={(e) => handleInputChange('acceptTerms', e.target.checked)}
                  className={`mt-1 text-indigo-600 focus:ring-indigo-500 ${
                    errors.acceptTerms ? 'border-red-500' : ''
                  }`}
                />
                <label htmlFor="terms" className="text-sm text-gray-500">
                  J&apos;accepte les conditions générales d&apos;utilisation et la politique de confidentialité
                </label>
              </div>
              {errors.acceptTerms && (
                <p className="mt-1 text-sm text-red-600">{errors.acceptTerms}</p>
              )}

              {errors.submit && (
                <p className="text-sm text-red-600 text-center">{errors.submit}</p>
              )}

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
              >
                <CheckCircleIcon className="w-5 h-5" />
                Confirmer le rendez-vous
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 