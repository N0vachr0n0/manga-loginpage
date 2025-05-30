import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Star, Award, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const DashboardPage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showAnimation, setShowAnimation] = useState(false);
  
  useEffect(() => {
    // Trigger animation after component mount
    setShowAnimation(true);
  }, []);
  
  const handleLogout = () => {
    logout();
    toast.success('Logged out successfully!');
    navigate('/login');
  };
  
  return (
    <div className="min-h-screen bg-manga-dots bg-cover bg-fixed p-4">
      <div className="container mx-auto py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-10 px-4">
          <h1 className="font-manga text-3xl md:text-4xl text-manga-primary">MANGA DASHBOARD</h1>
          <button 
            onClick={handleLogout} 
            className="manga-btn-secondary flex items-center"
          >
            <LogOut className="mr-2" size={18} />
            Logout
          </button>
        </header>
        
        {/* Main content */}
        <div className="manga-panel relative mb-8 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 transform -rotate-12">
            <Star className="w-16 h-16 text-manga-accent" />
          </div>
          
          <div className={`text-center py-10 transition-all duration-700 transform ${
            showAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <Award className="w-24 h-24 text-manga-primary mx-auto mb-6" />
            <h2 className="manga-title mb-4 text-center">FÉLICITATIONS!</h2>
            <div className="h-1 w-48 bg-manga-secondary mx-auto mb-6"></div>
            <p className="text-xl mb-4">
              Vous êtes maintenant connecté au dashboard manga!
            </p>
            
            <div className="manga-speech-bubble inline-block mt-6 mx-auto">
              <p className="font-bold">
                Welcome, {user?.name || user?.email || 'Manga Hero'}!
              </p>
            </div>
          </div>
        </div>
        
        {/* Manga Stats Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Panel 1 */}
          <div className={`manga-panel transform transition-all duration-500 ${
            showAnimation ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <h3 className="font-manga text-xl text-manga-secondary mb-4">MY PROFILE</h3>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-bold">{user?.email}</p>
                <p className="text-sm text-gray-600">Account ID: {user?.id || 'SYS_{n1c3}'}</p>
              </div>
              <ChevronRight className="text-manga-primary" />
            </div>
          </div>
          
          {/* Panel 2 */}
          <div className={`manga-panel transform transition-all duration-500 delay-100 ${
            showAnimation ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <h3 className="font-manga text-xl text-manga-secondary mb-4">MANGA STATS</h3>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-bold">100% Success!</p>
                <p className="text-sm text-gray-600">Authentication complete</p>
              </div>
              <ChevronRight className="text-manga-primary" />
            </div>
          </div>
          
          {/* Panel 3 */}
          <div className={`manga-panel transform transition-all duration-500 delay-200 ${
            showAnimation ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <h3 className="font-manga text-xl text-manga-secondary mb-4">NEXT STEPS</h3>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-bold">Continue Adventure</p>
                <p className="text-sm text-gray-600">Explore more manga features</p>
              </div>
              <ChevronRight className="text-manga-primary" />
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-12 text-center">
          <p className="font-manga text-sm text-manga-dark">© MANGA AUTH SYSTEM 2025</p>
        </footer>
      </div>
    </div>
  );
};

export default DashboardPage;
