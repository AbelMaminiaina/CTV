import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Award, Shield, CheckCircle, Users, FileCheck, Wrench, ArrowRight } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import type { Service } from '../types';

const Services: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const services: Service[] = [
    {
      id: '1',
      title: 'Certification ISO 9001',
      description: 'Certification de système de management de la qualité',
      category: 'certification',
      icon: 'Award',
      details: 'Accompagnement complet pour l\'obtention de la certification ISO 9001, audit initial, mise en conformité et suivi.',
    },
    {
      id: '2',
      title: 'Certification ISO 14001',
      description: 'Certification environnementale pour votre entreprise',
      category: 'certification',
      icon: 'Award',
      details: 'Management environnemental selon la norme ISO 14001 pour réduire votre impact écologique.',
    },
    {
      id: '3',
      title: 'Certification ISO 45001',
      description: 'Santé et sécurité au travail',
      category: 'certification',
      icon: 'Shield',
      details: 'Système de management de la santé et sécurité au travail conforme à l\'ISO 45001.',
    },
    {
      id: '4',
      title: 'Inspection Technique Bâtiment',
      description: 'Inspection complète de vos infrastructures',
      category: 'inspection',
      icon: 'CheckCircle',
      details: 'Diagnostic technique complet : structure, électricité, plomberie, sécurité incendie.',
    },
    {
      id: '5',
      title: 'Inspection Machines Industrielles',
      description: 'Contrôle et vérification de vos équipements',
      category: 'inspection',
      icon: 'Wrench',
      details: 'Inspection périodique de machines industrielles, équipements de levage et installations techniques.',
    },
    {
      id: '6',
      title: 'Contrôle Véhicules Professionnels',
      description: 'Contrôle technique pour flotte automobile',
      category: 'inspection',
      icon: 'CheckCircle',
      details: 'Inspection technique des véhicules professionnels et flotte d\'entreprise.',
    },
    {
      id: '7',
      title: 'Tests de Conformité Électrique',
      description: 'Vérification des installations électriques',
      category: 'testing',
      icon: 'FileCheck',
      details: 'Tests et mesures électriques selon les normes NF C 15-100 et vérifications périodiques.',
    },
    {
      id: '8',
      title: 'Analyse des Matériaux',
      description: 'Tests et analyses en laboratoire',
      category: 'testing',
      icon: 'FileCheck',
      details: 'Analyses physico-chimiques, tests de résistance mécanique et caractérisation des matériaux.',
    },
    {
      id: '9',
      title: 'Tests Environnementaux',
      description: 'Mesure et analyse de la qualité',
      category: 'testing',
      icon: 'Shield',
      details: 'Tests de qualité de l\'air, de l\'eau, mesures acoustiques et analyse environnementale.',
    },
    {
      id: '10',
      title: 'Formation Qualité & Sécurité',
      description: 'Formation des équipes aux normes',
      category: 'training',
      icon: 'Users',
      details: 'Formations certifiantes en management de la qualité et sécurité au travail.',
    },
    {
      id: '11',
      title: 'Formation Technique',
      description: 'Développement des compétences techniques',
      category: 'training',
      icon: 'Users',
      details: 'Formations techniques spécialisées : maintenance, inspection, méthodes de contrôle.',
    },
    {
      id: '12',
      title: 'Audit & Conseil',
      description: 'Accompagnement stratégique qualité',
      category: 'consulting',
      icon: 'FileCheck',
      details: 'Audits internes, conseils en organisation et optimisation des processus qualité.',
    },
  ];

  const categories = [
    { id: 'all', label: 'Tous les services' },
    { id: 'certification', label: 'Certifications' },
    { id: 'inspection', label: 'Inspections' },
    { id: 'testing', label: 'Tests & Analyses' },
    { id: 'training', label: 'Formations' },
    { id: 'consulting', label: 'Conseil & Audit' },
  ];

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.JSX.Element } = {
      Award: <Award className="w-8 h-8 text-gray-700" />,
      Shield: <Shield className="w-8 h-8 text-gray-700" />,
      CheckCircle: <CheckCircle className="w-8 h-8 text-gray-700" />,
      Users: <Users className="w-8 h-8 text-gray-700" />,
      FileCheck: <FileCheck className="w-8 h-8 text-gray-700" />,
      Wrench: <Wrench className="w-8 h-8 text-gray-700" />,
    };
    return icons[iconName] || icons['Award'];
  };

  const filteredServices =
    selectedCategory === 'all'
      ? services
      : services.filter((service) => service.category === selectedCategory);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner with Image */}
      <section className="relative h-[300px] md:h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80)' }}>
        {/* Overlay sombre pour lisibilité */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative h-full container-custom flex flex-col justify-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">Nos Services</h1>
          <p className="text-base md:text-xl lg:text-2xl text-white max-w-3xl">
            Des solutions complètes de certification, inspection, tests et formation pour garantir la conformité et la qualité de vos activités.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white shadow-md sticky top-16 z-40 py-4 md:py-6">
        <div className="container-custom px-4">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-4 md:px-6 py-1.5 md:py-2 rounded-full font-medium transition-all text-sm md:text-base ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 md:py-12">
        <div className="container-custom px-4">
          <div className="mb-4 md:mb-6">
            <p className="text-sm md:text-base text-gray-600">
              {filteredServices.length} service{filteredServices.length > 1 ? 's' : ''} trouvé{filteredServices.length > 1 ? 's' : ''}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} hover>
                <div className="mb-4">{getIcon(service.icon)}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="border-t pt-4 mt-4">
                  <p className="text-sm text-gray-600 mb-4">{service.details}</p>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full">
                      Demander un devis
                      <ArrowRight className="ml-2 inline" size={16} />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Besoin d'un Service Personnalisé ?</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Notre équipe d'experts est à votre disposition pour vous proposer une solution sur mesure adaptée à vos besoins spécifiques.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
                Contactez nos experts
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
