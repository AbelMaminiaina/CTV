import React from 'react';
import { Award, Users, Globe, TrendingUp, Target, Heart, Shield } from 'lucide-react';
import Card from '../components/Card';

const About: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-12 h-12 text-gray-700" />,
      title: 'Sécurité',
      description: 'La sécurité est au cœur de nos préoccupations dans tous nos services et interventions.',
    },
    {
      icon: <Award className="w-12 h-12 text-gray-700" />,
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque projet et recherchons l\'amélioration continue.',
    },
    {
      icon: <Heart className="w-12 h-12 text-gray-700" />,
      title: 'Engagement',
      description: 'Engagement total envers nos clients et leurs objectifs de qualité et conformité.',
    },
    {
      icon: <Target className="w-12 h-12 text-gray-700" />,
      title: 'Précision',
      description: 'Rigueur et précision dans nos analyses, tests et processus de certification.',
    },
  ];

  const milestones = [
    { year: '1998', event: 'Création de l\'entreprise' },
    { year: '2005', event: 'Expansion internationale' },
    { year: '2010', event: '5,000+ clients satisfaits' },
    { year: '2015', event: 'Certification Excellence Service' },
    { year: '2020', event: 'Leader du marché français' },
    { year: '2025', event: 'Plus de 50 experts certifiés' },
  ];

  const team = [
    {
      name: 'Pierre Dubois',
      role: 'Directeur Général',
      description: '25 ans d\'expérience dans les services techniques',
    },
    {
      name: 'Marie Lambert',
      role: 'Directrice Technique',
      description: 'Experte en certification ISO et management qualité',
    },
    {
      name: 'Jean Martin',
      role: 'Responsable Inspections',
      description: 'Spécialiste en inspections industrielles et bâtiment',
    },
    {
      name: 'Sophie Bernard',
      role: 'Responsable Formation',
      description: 'Formatrice certifiée, 15 ans d\'expérience pédagogique',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner with Image */}
      <section className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80)' }}>
        {/* Overlay sombre pour lisibilité */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative h-full container-custom flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">À Propos de Nous</h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl">
            Leader des services techniques et certifications depuis plus de 25 ans, au service de l'excellence et de la conformité.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Notre Mission</h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              Accompagner les entreprises dans leur démarche qualité et conformité en offrant des services d\'inspection,
              de certification et de formation de classe mondiale. Nous nous engageons à garantir la sécurité,
              la qualité et la durabilité pour un monde meilleur.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">25+</div>
                <div className="text-gray-600">Années d\'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">10,000+</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">50+</div>
                <div className="text-gray-600">Experts certifiés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">98%</div>
                <div className="text-gray-600">Taux de satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} hover className="text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Notre Histoire</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <Card>
                      <p className="text-lg font-semibold text-gray-900">{milestone.event}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Notre Expertise</h2>
              <p className="text-lg text-gray-700 mb-6">
                Avec plus de 25 ans d\'expérience dans les services techniques, nous avons développé une expertise
                reconnue dans de nombreux secteurs industriels. Notre équipe d\'experts certifiés intervient
                partout en France et à l\'international.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Globe className="text-gray-700" size={24} />
                  <span className="text-gray-700">Présence internationale</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="text-gray-700" size={24} />
                  <span className="text-gray-700">Équipe pluridisciplinaire</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="text-gray-700" size={24} />
                  <span className="text-gray-700">Innovation continue</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="text-gray-700" size={24} />
                  <span className="text-gray-700">Accréditations et certifications</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-12 h-96 flex items-center justify-center">
              <div className="text-center">
                <Globe className="w-32 h-32 text-gray-700 mx-auto mb-4" />
                <p className="text-2xl font-bold text-gray-900">Excellence Mondiale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center mb-12">Notre Équipe de Direction</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} hover className="text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-700 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Nos Accréditations</h2>
            <p className="text-lg text-gray-700 mb-12">
              Nous sommes accrédités par les organismes nationaux et internationaux les plus reconnus,
              garantissant ainsi la qualité et la fiabilité de nos services.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['ISO 9001', 'ISO 14001', 'ISO 45001', 'COFRAC'].map((cert, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <Award className="w-12 h-12 text-gray-700 mx-auto mb-2" />
                  <p className="font-semibold text-gray-900">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
