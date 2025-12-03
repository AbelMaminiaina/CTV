import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FileText, Download, Clock, CheckCircle, AlertCircle, LogOut } from 'lucide-react';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import type { ClientFile, Certificate } from '../types';

const ClientSpace: React.FC = () => {
  const { user, login, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const success = await login(email, password);
      if (!success) {
        setError('Email ou mot de passe incorrect');
      }
    } catch {
      setError('Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Données de démonstration
  const clientFiles: ClientFile[] = [
    {
      id: '1',
      serviceType: 'Certification ISO 9001',
      date: '2025-11-15',
      status: 'completed',
      reference: 'CERT-2025-001',
    },
    {
      id: '2',
      serviceType: 'Inspection Bâtiment',
      date: '2025-11-28',
      status: 'in_progress',
      reference: 'INSP-2025-042',
    },
    {
      id: '3',
      serviceType: 'Test Électrique',
      date: '2025-12-05',
      status: 'pending',
      reference: 'TEST-2025-089',
    },
  ];

  const certificates: Certificate[] = [
    {
      id: '1',
      name: 'Certification ISO 9001:2015',
      issueDate: '2024-01-15',
      expiryDate: '2027-01-15',
      downloadUrl: '#',
    },
    {
      id: '2',
      name: 'Certification ISO 14001:2015',
      issueDate: '2024-03-20',
      expiryDate: '2027-03-20',
      downloadUrl: '#',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-green-600" size={20} />;
      case 'in_progress':
        return <Clock className="text-blue-600" size={20} />;
      case 'pending':
        return <AlertCircle className="text-yellow-600" size={20} />;
      default:
        return null;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return 'Terminé';
      case 'in_progress':
        return 'En cours';
      case 'pending':
        return 'En attente';
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in_progress':
        return 'bg-blue-100 text-blue-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Espace Client</h1>
            <p className="text-gray-600">Connectez-vous pour accéder à vos dossiers</p>
          </div>

          <Card>
            <form onSubmit={handleLogin}>
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                required
              />

              <Input
                label="Mot de passe"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 text-sm">{error}</p>
                </div>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? 'Connexion...' : 'Se connecter'}
              </Button>

              <div className="mt-4 text-center">
                <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
                  Mot de passe oublié ?
                </a>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800 font-medium mb-2">Compte de démonstration :</p>
                <p className="text-xs text-blue-700">Email: demo@example.com</p>
                <p className="text-xs text-blue-700">Mot de passe: 123456</p>
              </div>
            </form>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">Bienvenue, {user?.name}</h1>
              <p className="text-primary-100">{user?.email}</p>
              {user?.company && <p className="text-primary-100">{user.company}</p>}
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="bg-white text-primary-600 hover:bg-primary-50"
            >
              <LogOut className="mr-2" size={20} />
              Déconnexion
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Files Section */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Mes Dossiers</h2>
                <div className="space-y-4">
                  {clientFiles.map((file) => (
                    <Card key={file.id} hover>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileText className="text-primary-600" size={24} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-1">{file.serviceType}</h3>
                            <p className="text-sm text-gray-600 mb-2">Référence: {file.reference}</p>
                            <p className="text-sm text-gray-500">
                              Date: {new Date(file.date).toLocaleDateString('fr-FR')}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end space-y-2">
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(file.status)}
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                                file.status
                              )}`}
                            >
                              {getStatusLabel(file.status)}
                            </span>
                          </div>
                          {file.status === 'completed' && (
                            <Button size="sm" variant="outline">
                              <Download size={16} className="mr-1" />
                              Télécharger
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Certificates Section */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Mes Certificats</h2>
                <div className="space-y-4">
                  {certificates.map((cert) => (
                    <Card key={cert.id} hover>
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
                          <div className="space-y-1 text-sm text-gray-600">
                            <p>Date d'émission: {new Date(cert.issueDate).toLocaleDateString('fr-FR')}</p>
                            <p>Date d'expiration: {new Date(cert.expiryDate).toLocaleDateString('fr-FR')}</p>
                          </div>
                        </div>
                        <Button size="sm">
                          <Download size={16} className="mr-1" />
                          Télécharger
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card>
                <h3 className="text-lg font-semibold mb-4">Statistiques</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Dossiers actifs</span>
                      <span className="font-semibold">2</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Certificats valides</span>
                      <span className="font-semibold">2</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Services réalisés</span>
                      <span className="font-semibold">15</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Actions */}
              <Card>
                <h3 className="text-lg font-semibold mb-4">Actions rapides</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <FileText size={18} className="mr-2" />
                    Nouvelle demande
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download size={18} className="mr-2" />
                    Mes documents
                  </Button>
                </div>
              </Card>

              {/* Contact */}
              <Card className="bg-primary-50">
                <h3 className="text-lg font-semibold mb-2">Besoin d'aide ?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Notre équipe est à votre disposition
                </p>
                <Button variant="primary" className="w-full">
                  Contacter le support
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientSpace;
