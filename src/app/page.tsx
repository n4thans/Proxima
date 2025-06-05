/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { ArrowRightIcon, CalendarIcon, MapPinIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-secondary-100">
      {/* Header */}
      <header className="w-full max-w-7xl px-6 py-4 flex justify-between items-center">
        <Image
          src="/images/logo.svg"
          alt="Proxima"
          width={96.375}
          height={38.25}
          className="h-10 w-auto"
        />
        <Link
          href="/consultation"
          className="bg-[#066959] text-[#FFF] px-[10px] py-[10px] rounded-[10px] hover:opacity-90 transition-opacity inline-flex items-center justify-center w-[167px] h-[44px] font-poppins text-base font-semibold leading-6 text-center"
        >
          Où téléconsulter ?
        </Link>
      </header>

      {/* Hero Section */}
      <section className="w-full min-h-screen relative">
        <div 
          className="absolute inset-0 bg-[url('/images/hero-background.jpg')] bg-cover bg-center"
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 flex items-center min-h-screen">
          <div className="max-w-2xl bg-white rounded-2xl p-12 shadow-xl">
            <h1 className="font-inter text-4xl lg:text-5xl font-semibold text-primary leading-tight mb-6">
              La gestion de rendez-vous pensée pour les cabines de téléconsultation en dermatologie.
            </h1>
            <p className="text-text-400 text-lg mb-8">
              Proxima fluidifie vos journées en synchronisant rendez-vous, disponibilité patient et temps médical réel.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#008264] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#006E56] transition-all duration-200 hover:shadow-lg"
            >
              Demander une démo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-primary text-static-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-inter font-semibold text-h2 mb-12">
            Des résultats concrets sur le terrain
          </h2>
          <div className="grid grid-cols-4 gap-8">
            {[
              {
                stat: '93%',
                text: 'des consultations réalisées à l\'heure',
                description: 'Grâce à une gestion dynamique des rendez-vous, on réduit les retards et optimise le temps médical.'
              },
              {
                stat: '90%',
                text: 'de créneaux réalisés',
                description: 'En cas de retard ou d\'empêchement, les opérateurs sont optimisés automatiquement.'
              },
              {
                stat: '+25%',
                text: 'de taux de rendez-vous honorés',
                description: 'La confirmation dynamique + automatisation des rappels réduit le taux d\'absentéisme.'
              },
              {
                stat: 'Zéro',
                text: 'friction avec vos outils existants',
                description: 'Proxima s\'intègre avec les systèmes de Doctolib déjà en place.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-inter font-bold mb-2">{item.stat}</div>
                <div className="font-medium mb-4">{item.text}</div>
                <p className="text-sm text-static-100/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {/* Feature 1 */}
          <div className="flex items-center gap-16">
            <div className="flex-1">
              <Image
                src="/images/headset-icon.svg"
                alt="Support"
                width={64}
                height={64}
                className="mb-6"
              />
              <h2 className="font-inter font-semibold text-h2 text-primary mb-4">
                Conçu pour la réalité des cabines de téléconsultation
              </h2>
              <p className="text-text-400">
                Proxima s'est créé en étroite collaboration avec un réseau de dermatologues pour offrir une performance pour vos cabines.
              </p>
              <Link
                href="/en-savoir-plus"
                className="inline-flex items-center text-primary hover:text-primary-600 mt-6"
              >
                En savoir plus
              </Link>
            </div>
            <div className="flex-1">
              <Image
                src="/images/feature-1.svg"
                alt="Feature illustration"
                width={500}
                height={400}
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-16 flex-row-reverse">
            <div className="flex-1">
              <h2 className="font-inter font-semibold text-h2 text-primary mb-4">
                Un planning qui s'adapte au réel
              </h2>
              <p className="text-text-400">
                Proxima ajuste ses créneaux en fonction des retards observés et intègre le planning des déroulés automatiquement pour éviter les pertes de temps.
              </p>
              <Link
                href="/en-savoir-plus"
                className="inline-flex items-center text-primary hover:text-primary-600 mt-6"
              >
                En savoir plus
              </Link>
            </div>
            <div className="flex-1">
              <Image
                src="/images/feature-2.svg"
                alt="Feature illustration"
                width={500}
                height={400}
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-16">
            <div className="flex-1">
              <h2 className="font-inter font-semibold text-h2 text-primary mb-4">
                Moins de friction dans vos équipes
              </h2>
              <p className="text-text-400">
                Facilitez les échanges entre toutes les parties prenantes. Nativement lié à vos logiciels existants, vous gagnez en efficacité sans changer votre infrastructure.
              </p>
              <Link
                href="/en-savoir-plus"
                className="inline-flex items-center text-primary hover:text-primary-600 mt-6"
              >
                En savoir plus
              </Link>
            </div>
            <div className="flex-1">
              <Image
                src="/images/feature-3.svg"
                alt="Feature illustration"
                width={500}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full bg-secondary-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-inter font-semibold text-h2 text-primary mb-12 text-center">
            Les bénéfices pour vos patients
          </h2>
          <div className="grid grid-cols-4 gap-8">
            {[
              {
                icon: '/images/clock-icon.svg',
                title: 'Consultation à l\'heure prévue',
                description: 'Les patients n\'attendent plus des heures dans une salle d\'attente bondée.'
              },
              {
                icon: '/images/doc-icon.svg',
                title: 'Des rappels clairs et efficaces',
                description: 'Le patient est informé à chaque étape de son parcours de téléconsultation.'
              },
              {
                icon: '/images/path-icon.svg',
                title: 'Un parcours simple du début à la fin',
                description: 'Proxima guide le patient de la prise de rendez-vous jusqu\'à la consultation.'
              },
              {
                icon: '/images/smile-icon.svg',
                title: 'Moins de bugs, plus d\'efficacité',
                description: 'Notre solution permet aux patients de se concentrer sur leur santé.'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-static-100 p-6 rounded-xl">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  width={48}
                  height={48}
                  className="mb-4"
                />
                <h3 className="font-inter font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-text-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-inter font-semibold text-h2 text-primary mb-4">
            Optimisez dès maintenant la performance de vos cabines
          </h2>
          <p className="text-text-400 mb-8">
            Proxima vous aide à réduire les retards, simplifier la gestion et améliorer l'expérience patient. Une solution pensée pour l'avenir de la téléconsultation.
          </p>
          <Link
            href="/contact"
            className="bg-primary text-static-100 px-8 py-3 rounded-full font-medium hover:bg-primary-600 transition-colors inline-flex items-center"
          >
            Planifier un démo
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-primary text-static-100 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <Image
                src="/images/logo-white.svg"
                alt="Proxima"
                width={96.375}
                height={38.25}
                className="mb-6"
              />
            </div>
            {[
              {
                title: 'Produit',
                links: ['Fonctionnalités', 'Tarifs', 'Cas d\'usage', 'Nouveautés']
              },
              {
                title: 'Ressources',
                links: ['Blog', 'Guides', 'Support', 'API']
              },
              {
                title: 'Entreprise',
                links: ['À propos', 'Carrières', 'Contact', 'Mentions légales']
              }
            ].map((column, index) => (
              <div key={index}>
                <h3 className="font-inter font-semibold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href="#" className="text-static-100/80 hover:text-static-100">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
