import { Loader } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-manga-background z-50">
      <div className="animate-pulse mb-4">
        <h2 className="font-manga text-4xl text-manga-primary">LOADING...</h2>
      </div>
      
      <div className="manga-panel flex items-center justify-center p-8 animate-bounce">
        <Loader className="w-10 h-10 text-manga-secondary animate-spin" />
      </div>
      
      <div className="mt-6 manga-speech-bubble pop-in">
        <p className="text-center font-bold text-lg">Please wait while we prepare your manga adventure!</p>
      </div>
    </div>
  );
};

export default LoadingScreen;