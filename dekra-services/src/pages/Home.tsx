import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Shield, Users, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import type { Testimonial } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useCountUp } from '../hooks/useCountUp';

// Composant pour les statistiques animées
interface AnimatedStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({
  value,
  suffix = '',
  prefix = '',
  label,
  duration = 2000
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.3 });
  const count = useCountUp({ end: value, duration, isActive: isVisible });

  return (
    <div ref={ref} className="text-center">
      <div className="text-2xl md:text-4xl font-bold text-gray-800 mb-1 md:mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm md:text-base text-gray-600">{label}</div>
    </div>
  );
};

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [shouldAnimate] = useState(true);

  const heroSlides = [
    {
      title: 'Services Techniques et Certifications',
      subtitle: '',
      description: 'Planifiez dès maintenant pour prendre un service',
      primaryBtn: 'Contactez-nous',
      secondaryBtn: '',
      primaryLink: '/contact',
      secondaryLink: '',
      bgImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80',
      bgAlt: 'Route paisible en campagne',
      showRightCard: true,
    },
    {
      title: 'Votre Partenaire de Confiance',
      subtitle: 'Services Techniques et Certifications',
      description: 'Expertise, qualité et conformité pour garantir le succès de vos projets industriels et techniques.',
      primaryBtn: 'Découvrir nos services',
      secondaryBtn: 'Nous contacter',
      primaryLink: '/services',
      secondaryLink: '/contact',
      bgImage: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1920&q=80',
      bgAlt: 'Service technique automobile',
    },
    {
      title: 'Certification ISO',
      subtitle: 'Conformité aux Normes Internationales',
      description: 'Accompagnement complet pour vos certifications ISO 9001, 14001, 45001 et bien plus.',
      primaryBtn: 'Explorer',
      secondaryBtn: 'En savoir plus',
      primaryLink: '/services',
      secondaryLink: '/about',
      bgImage: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1920&q=80',
      bgAlt: 'Écologie verte',
    },
    {
      title: 'Inspections Techniques',
      subtitle: 'Digitalisation du Contrôle Technique',
      description: 'Inspections digitalisées avec technologies de pointe pour une traçabilité complète et des rapports en temps réel.',
      primaryBtn: 'Nos services',
      secondaryBtn: 'Contactez-nous',
      primaryLink: '/services',
      secondaryLink: '/contact',
      bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80',
      bgAlt: 'Digitalisation contrôle technique',
    },
  ];

  const services = [
    {
      icon: <Award className="w-12 h-12 text-gray-700 group-hover:text-white transition-colors" />,
      title: 'Certifications',
      description: 'Certifications ISO et conformité aux normes internationales pour votre entreprise.',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: <Shield className="w-12 h-12 text-gray-700 group-hover:text-white transition-colors" />,
      title: 'Inspections',
      description: 'Inspections techniques approfondies pour garantir la sécurité et la qualité.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-gray-700 group-hover:text-white transition-colors" />,
      title: 'Tests & Analyses',
      description: 'Tests de conformité et analyses techniques pour vos produits et services.',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    },
    {
      icon: <Users className="w-12 h-12 text-gray-700 group-hover:text-white transition-colors" />,
      title: 'Formation',
      description: 'Formations professionnelles et développement des compétences de vos équipes.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Marie Dubois',
      company: 'Industrie Moderne SA',
      content: 'Service exceptionnel ! L\'équipe a été très professionnelle et nous a accompagnés tout au long du processus de certification ISO 9001.',
      rating: 5,
    },
    {
      id: '2',
      name: 'Jean Martin',
      company: 'TechCorp France',
      content: 'Inspection technique minutieuse et rapport détaillé. Nous recommandons vivement leurs services.',
      rating: 5,
    },
    {
      id: '3',
      name: 'Sophie Laurent',
      company: 'Innovations Plus',
      content: 'Formation de qualité avec des formateurs experts. Nos équipes ont beaucoup appris.',
      rating: 5,
    },
  ];

  const stats = [
    { value: 25, suffix: '+', label: 'Années d\'expérience' },
    { value: 10000, suffix: '+', label: 'Clients satisfaits' },
    { value: 50, suffix: '+', label: 'Experts certifiés' },
    { value: 98, suffix: '%', label: 'Taux de satisfaction' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const currentHero = heroSlides[currentSlide];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Carousel */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        {/* Background Images - Dynamique */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center ${
                index === currentSlide && shouldAnimate
                  ? 'animate-zoom-in-mobile md:animate-zoom-in'
                  : ''
              }`}
              style={{
                backgroundImage: `url(${slide.bgImage})`,
              }}
            >
              {/* Overlay pour améliorer la lisibilité */}
              {!slide.hideContent && !slide.showRightCard && (
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
              )}
              {slide.showRightCard && (
                <div className="absolute inset-0 bg-black/30"></div>
              )}
            </div>
          </div>
        ))}

        {/* Overlay supplémentaire pour uniformiser */}
        {!currentHero.hideContent && !currentHero.showRightCard && (
          <div className="absolute inset-0 bg-black/10"></div>
        )}

        {/* Content - Card transparent centré */}
        {currentHero.showRightCard && (
          <div className="container-custom relative h-full flex items-center justify-center px-4">
            <div className="p-6 md:p-10 max-w-2xl w-full text-center transition-all duration-500">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight drop-shadow-lg">
                {currentHero.title}
              </h1>
              <p className="text-lg md:text-xl mb-6 md:mb-8 text-white leading-relaxed drop-shadow-md">
                {currentHero.description}
              </p>
              <Link to={currentHero.primaryLink} key={`primary-${currentSlide}`} className="inline-block">
                <button className="px-8 md:px-12 py-3 md:py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-all duration-200 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl text-base md:text-lg">
                  {currentHero.primaryBtn}
                  <ArrowRight size={20} className="md:w-6 md:h-6" />
                </button>
              </Link>
            </div>
          </div>
        )}

        {/* Content - Layout normal à gauche */}
        {!currentHero.hideContent && !currentHero.showRightCard && (
          <div className="container-custom relative h-full flex items-center px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
              {/* Left Content Box - Style blanc unifié avec taille réduite */}
              <div className="bg-white p-5 md:p-8 rounded-2xl shadow-2xl max-w-lg backdrop-blur-sm bg-opacity-95 transition-all duration-500">
                <h1 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 leading-tight text-gray-900 transition-all duration-500">
                  {currentHero.title}
                </h1>
                <h2 className="text-base md:text-xl font-medium mb-3 md:mb-4 text-gray-800 transition-all duration-500">
                  {currentHero.subtitle}
                </h2>
                <p className="text-sm md:text-base mb-5 md:mb-6 text-gray-700 leading-relaxed transition-all duration-500">
                  {currentHero.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-2 md:gap-3 transition-all duration-500">
                  <Link to={currentHero.primaryLink} key={`primary-${currentSlide}`} className="w-full sm:w-auto">
                    <button className="px-5 md:px-6 py-2 md:py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-full transition-all duration-200 flex items-center justify-center gap-2 w-full shadow-lg hover:shadow-xl text-sm md:text-base">
                      {currentHero.primaryBtn}
                      <ArrowRight size={16} className="md:w-5 md:h-5" />
                    </button>
                  </Link>
                  {currentHero.secondaryBtn && (
                    <Link to={currentHero.secondaryLink} key={`secondary-${currentSlide}`} className="w-full sm:w-auto">
                      <button className="px-5 md:px-6 py-2 md:py-2.5 border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-semibold rounded-full transition-all duration-200 flex items-center justify-center gap-2 w-full text-sm md:text-base">
                        {currentHero.secondaryBtn}
                        <ArrowRight size={16} className="md:w-5 md:h-5" />
                      </button>
                    </Link>
                  )}
                </div>
              </div>

              {/* Right Side - Espace pour équilibrer la grille */}
              <div className="hidden md:block">
                {/* Espace réservé - L'image de fond occupe tout l'arrière-plan */}
              </div>
            </div>
          </div>
        )}

        {/* Carousel Navigation */}
        <div className="absolute bottom-4 md:bottom-8 left-0 right-0">
          <div className="container-custom flex justify-between items-center px-4">
            {/* Dots */}
            <div className="flex gap-1.5 md:gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 md:h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'w-6 md:w-8 bg-white'
                      : 'w-1.5 md:w-2 bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Aller à la diapositive ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-2 md:gap-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
                aria-label="Diapositive précédente"
              >
                <ChevronLeft size={20} className="md:w-6 md:h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
                aria-label="Diapositive suivante"
              >
                <ChevronRight size={20} className="md:w-6 md:h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container-custom px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <AnimatedStat
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                duration={2500}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Nos Services</h2>
            <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
              Des solutions complètes pour répondre à tous vos besoins en matière de conformité et de qualité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contenu */}
                <div className="p-6 text-center bg-white group-hover:bg-primary-600 transition-colors duration-300">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 group-hover:text-white transition-colors">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="text-gray-700 group-hover:text-white font-semibold inline-flex items-center transition-colors"
                  >
                    En savoir plus
                    <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg">Voir tous les services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Pourquoi Nous Choisir ?
              </h2>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start space-x-3 md:space-x-4">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Expertise Reconnue</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Plus de 25 ans d'expérience dans les services techniques et certifications
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 md:space-x-4">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Normes Internationales</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Conformité aux standards ISO et aux réglementations internationales
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 md:space-x-4">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-1 md:mb-2">Accompagnement Personnalisé</h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Une équipe dédiée pour vous accompagner à chaque étape de votre projet
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <Award className="w-32 h-32 text-gray-700 mx-auto mb-4" />
                <p className="text-2xl font-bold text-gray-900">Certification Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Ce Que Disent Nos Clients</h2>
            <p className="text-base md:text-xl text-gray-600">
              La satisfaction de nos clients est notre priorité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 md:py-20 bg-cover bg-center overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80)' }}>
        {/* Overlay sombre pour la lisibilité */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container-custom text-center relative z-10 px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 text-white">Prêt à Commencer ?</h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 text-white max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider
          </p>
          <Link to="/contact" className="inline-block w-full sm:w-auto">
            <Button size="lg" className="bg-primary-600 text-white hover:bg-primary-700 w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base">
              Demander un devis gratuit
              <ArrowRight className="ml-2 inline" size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
