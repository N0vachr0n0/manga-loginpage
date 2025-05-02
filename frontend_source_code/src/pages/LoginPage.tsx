import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import { Sparkles, Zap } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated, error, clearError } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
    clearError();
  }, [isAuthenticated, navigate, clearError]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-manga-pattern bg-cover bg-center bg-fixed p-4">
      <div className="absolute inset-0 bg-manga-dark bg-opacity-50 backdrop-blur-sm"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 relative">
            <div className="absolute -top-4 -right-4 transform rotate-12">
              <Sparkles className="w-12 h-12 text-manga-accent" />
            </div>
            <div className="absolute -bottom-4 -left-4 transform -rotate-12">
              <Zap className="w-12 h-12 text-manga-primary" />
            </div>
            
            <div className="text-center mb-8">
              <h1 className="font-manga text-4xl text-manga-primary mb-2 transform -rotate-2">MANGA LOGIN</h1>
              <div className="h-1 w-32 bg-manga-secondary mx-auto mb-4"></div>
              <p className="text-lg">Enter your details to begin your adventure!</p>
            </div>
            
            {error && (
              <div className="mb-6 bg-red-100 border-l-4 border-manga-error p-4 rounded">
                <p className="text-manga-error font-bold">{error}</p>
              </div>
            )}
            
            <LoginForm />
          </div>
          
          <div className="manga-speech-bubble mt-6 max-w-xs mx-auto">
            <p className="text-center font-bold">Ready to join the adventure? Login now!</p>
          </div>
          
          <div className="text-center mt-8 text-white font-manga">
            <p>© MANGA AUTH SYSTEM 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;