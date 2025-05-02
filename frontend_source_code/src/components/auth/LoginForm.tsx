import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email.trim() || !password.trim()) {
      toast.error('Please enter both email and password');
      return;
    }
    
    try {
      await login({ email, password });
      toast.success('Login successful!');
      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6 bg-white p-6 rounded-lg">
      <div>
        <label htmlFor="email" className="block text-manga-dark font-bold mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-4 py-2 border-2 border-manga-dark rounded-lg focus:outline-none focus:border-manga-primary"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={isLoading}
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-manga-dark font-bold mb-2">
          Password
        </label>
        <div className="relative">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            className="w-full px-4 py-2 border-2 border-manga-dark rounded-lg focus:outline-none focus:border-manga-primary"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            disabled={isLoading}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-manga-dark"
            onClick={() => setShowPassword(!showPassword)}
            disabled={isLoading}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>
      </div>
      
      <button
        type="submit"
        className="w-full bg-manga-primary text-white font-bold py-3 px-6 rounded-lg border-2 border-manga-dark hover:bg-manga-primary/90 transition-colors disabled:opacity-50"
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="animate-pulse">Loading...</span>
        ) : (
          <div className="flex items-center justify-center">
            <LogIn className="mr-2" size={20} />
            Login
          </div>
        )}
      </button>
    </form>
  );
};

export default LoginForm;