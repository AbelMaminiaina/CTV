import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Factory, Truck, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import Card from '../components/Card';
import Button from '../components/Button';
import type { Solution } from '../types';

const Solutions: React.FC = () => {
  const solutions: Solution[] = [
    {
      id: '1',
      title: 'Solutions pour l\'Industrie Automobile',
      description: 'Solutions complètes pour l\'industrie automobile : certification, tests de sécurité, contrôle qualité des composants et véhicules.',
      image: 'automotive',
      features: [
        'Certification des composants automobiles',
        'Tests de sécurité et crash tests',
        'Contrôle qualité des processus de production',
        'Inspection technique des véhicules',
        'Formation des équipes techniques',
      ],
    },
    {
      id: '2',
      title: 'Solutions pour l\'Industrie Manufacturière',
      description: 'Accompagnement des industries manufacturières dans leur démarche qualité et conformité aux normes internationales.',
      image: 'manufacturing',
      features: [
        'Certification ISO 9001, 14001, 45001',
        'Audit de processus industriels',
        'Tests et analyses des matériaux',
        'Optimisation des chaînes de production',
        'Management de la qualité totale',
      ],
    },
    {
      id: '3',
      title: 'Solutions pour le Secteur du Bâtiment',
      description: 'Services techniques et certifications pour le secteur du bâtiment et des travaux publics.',
      image: 'construction',
      features: [
        'Inspection technique des bâtiments',
        'Certification HQE et labels environnementaux',
        'Tests de conformité électrique et plomberie',
        'Diagnostic de performance énergétique',
        'Contrôle des matériaux de construction',
      ],
    },
    {
      id: '4',
      title: 'Solutions pour la Logistique et Transport',
      description: 'Expertise en certification et contrôle pour les entreprises de transport et logistique.',
      image: 'logistics',
      features: [
        'Certification ISO 9001 transport',
        'Inspection de flotte de véhicules',
        'Audit des entrepôts et plateformes',
        'Formation sécurité routière',
        'Optimisation des processus logistiques',
      ],
    },
    {
      id: '5',
      title: 'Solutions Export & International',
      description: 'Accompagnement pour l\'export et la conformité aux normes internationales.',
      image: 'international',
      features: [
        'Certifications internationales (CE, UL, CCC)',
        'Tests et essais pour l\'export',
        'Conseil réglementaire par pays',
        'Documentation technique internationale',
        'Support pour audits clients étrangers',
      ],
    },
    {
      id: '6',
      title: 'Solutions Environnement & Énergie',
      description: 'Services spécialisés pour la transition énergétique et le management environnemental.',
      image: 'energy',
      features: [
        'Certification ISO 14001 et ISO 50001',
        'Audit énergétique et bilan carbone',
        'Tests environnementaux (air, eau, sol)',
        'Conseil en transition énergétique',
        'Accompagnement RSE',
      ],
    },
  ];

  const getIcon = (image: string) => {
    const icons: { [key: string]: React.JSX.Element } = {
      automotive: <Truck className="w-16 h-16" />,
      manufacturing: <Factory className="w-16 h-16" />,
      construction: <Building2 className="w-16 h-16" />,
      logistics: <Truck className="w-16 h-16" />,
      international: <Globe className="w-16 h-16" />,
      energy: <Building2 className="w-16 h-16" />,
    };
    return icons[image] || icons['manufacturing'];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner with Image */}
      <section className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80)' }}>
        {/* Overlay sombre pour lisibilité */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative h-full container-custom flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Nos Solutions par Secteur</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Des solutions techniques sur mesure adaptées à chaque secteur d'activité pour garantir votre conformité et votre excellence opérationnelle.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Des Solutions Sectorielles Complètes
            </h2>
            <p className="text-lg text-gray-600">
              Fort de notre expertise multi-sectorielle, nous proposons des solutions techniques adaptées aux spécificités et exigences réglementaires de chaque industrie.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-12">
        <div className="container-custom space-y-16">
          {solutions.map((solution, index) => (
            <div
              key={solution.id}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="flex-1">
                <Card className="h-full bg-gradient-to-br from-gray-50 to-gray-100">
                  <div className="flex items-center justify-center h-64 text-gray-700">
                    {getIcon(solution.image)}
                  </div>
                </Card>
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{solution.description}</p>

                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact">
                  <Button>
                    En savoir plus
                    <ArrowRight className="ml-2 inline" size={16} />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Les Avantages de Nos Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-gray-700" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expertise Sectorielle</h3>
              <p className="text-gray-600">
                Nos experts connaissent parfaitement les spécificités et réglementations de chaque secteur.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-gray-700" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Normes Internationales</h3>
              <p className="text-gray-600">
                Conformité aux standards internationaux pour faciliter votre développement à l'export.
              </p>
            </Card>

            <Card className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-gray-700" size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Solutions Sur Mesure</h3>
              <p className="text-gray-600">
                Approche personnalisée pour répondre précisément à vos besoins et contraintes.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Discutons de Votre Projet</h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Nos experts sectoriels sont à votre écoute pour élaborer la solution la plus adaptée à votre activité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
                  Demander une étude
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Voir nos services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
