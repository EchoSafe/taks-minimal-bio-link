
import { Github, Youtube, BookOpen } from "lucide-react";

const Index = () => {
  const socialLinks = [
    {
      title: "Did I am a coder?",
      description: "Check out my code repositories",
      url: "https://github.com/karitthorn",
      icon: <Github className="w-6 h-6" />,
      bgColor: "bg-gray-800 hover:bg-gray-700"
    },
    {
      title: "Did I am a blogger?",
      description: "Read my articles and thoughts",
      url: "https://medium.com/@karitthorn",
      icon: <BookOpen className="w-6 h-6" />,
      bgColor: "bg-green-700 hover:bg-green-600"
    },
    {
      title: "Did I am a youtuber?",
      description: "Watch my video content",  
      url: "https://www.youtube.com/@WelaDev",
      icon: <Youtube className="w-6 h-6" />,
      bgColor: "bg-red-500 hover:bg-red-400"
    }
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
              <span className="text-4xl font-bold text-white">T</span>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-md"></div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Hi I'm <span className="text-green-600">Tak</span>
          </h1>
          
          <p className="text-gray-600 text-lg mb-8">
            Who am I?
          </p>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          {socialLinks.map((link, index) => (
            <div
              key={index}
              onClick={() => handleLinkClick(link.url)}
              className={`block w-full ${link.bgColor} text-white rounded-xl p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer group`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors duration-300">
                  {link.icon}
                </div>
                <div className="flex-grow text-left">
                  <h3 className="font-semibold text-lg">{link.title}</h3>
                  <p className="text-sm opacity-90">{link.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm">
            Connect with me on social media
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
