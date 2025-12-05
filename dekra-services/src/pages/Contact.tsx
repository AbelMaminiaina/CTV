import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Card from '../components/Card';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Select from '../components/Select';
import Button from '../components/Button';
import type { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const serviceOptions = [
    { value: '', label: 'Sélectionnez un service' },
    { value: 'certification', label: 'Certification ISO' },
    { value: 'inspection', label: 'Inspection technique' },
    { value: 'testing', label: 'Tests & Analyses' },
    { value: 'training', label: 'Formation' },
    { value: 'consulting', label: 'Conseil & Audit' },
    { value: 'other', label: 'Autre' },
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    } else if (!/^[\d\s+()-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Numéro de téléphone invalide';
    }

    if (!formData.service) {
      newErrors.service = 'Veuillez sélectionner un service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner with Image */}
      <section className="relative h-[300px] md:h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80)' }}>
        {/* Overlay sombre pour lisibilité */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative h-full container-custom flex flex-col justify-center px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">Contactez-nous</h1>
          <p className="text-base md:text-xl lg:text-2xl text-white max-w-3xl">
            Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets.
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-8 md:py-12">
        <div className="container-custom px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-gray-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Adresse</h3>
                    <p className="text-gray-600">
                      123 Avenue de la République<br />
                      75011 Paris, France
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-gray-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Téléphone</h3>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                    <p className="text-sm text-gray-500 mt-1">Lun - Ven: 9h - 18h</p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-gray-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <p className="text-gray-600">contact@techservices.fr</p>
                    <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-gray-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Horaires</h3>
                    <p className="text-gray-600">
                      Lundi - Vendredi: 9h - 18h<br />
                      Samedi: 9h - 12h<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">
                      Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Nom complet *"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      error={errors.name}
                      placeholder="Jean Dupont"
                    />

                    <Input
                      label="Email *"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      placeholder="jean.dupont@exemple.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Téléphone *"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      error={errors.phone}
                      placeholder="+33 6 12 34 56 78"
                    />

                    <Select
                      label="Service concerné *"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      error={errors.service}
                      options={serviceOptions}
                    />
                  </div>

                  <TextArea
                    label="Message *"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={errors.message}
                    rows={6}
                    placeholder="Décrivez votre projet ou posez-nous vos questions..."
                  />

                  <div className="flex items-center justify-between mt-6">
                    <p className="text-sm text-gray-600">* Champs obligatoires</p>
                    <Button type="submit" size="lg">
                      Envoyer le message
                      <Send className="ml-2 inline" size={18} />
                    </Button>
                  </div>
                </form>
              </Card>

              {/* Map Placeholder */}
              <Card className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Notre localisation</h3>
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin size={48} className="mx-auto mb-2" />
                    <p>Carte interactive</p>
                    <p className="text-sm">Paris, France</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Questions Fréquentes</h2>
          <div className="max-w-3xl mx-auto space-y-4 md:space-y-6">
            <Card>
              <h3 className="font-semibold text-base md:text-lg mb-2">Quel est le délai de réponse ?</h3>
              <p className="text-sm md:text-base text-gray-600">
                Nous nous engageons à répondre à toutes les demandes dans un délai de 24 heures ouvrées.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-base md:text-lg mb-2">Proposez-vous des devis gratuits ?</h3>
              <p className="text-sm md:text-base text-gray-600">
                Oui, nous établissons des devis détaillés et gratuits pour tous nos services après étude de votre besoin.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-base md:text-lg mb-2">Intervenez-vous dans toute la France ?</h3>
              <p className="text-sm md:text-base text-gray-600">
                Oui, nous intervenons sur l'ensemble du territoire français et dans certains pays européens.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
