import { Github, Youtube, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const socialLinks = [
    {
      title: "Did I am a coder?",
      description: "Check out my code repositories",
      url: "https://github.com/karitthorn",
      icon: <Github className="w-6 h-6" />,
      bgColor: "bg-gray-900 hover:bg-gray-800",
    },
    {
      title: "Did I am a blogger?",
      description: "Read my articles and thoughts",
      url: "https://medium.com/@karitthorn",
      icon: <BookOpen className="w-6 h-6" />,
      bgColor: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "Did I am a youtuber?",
      description: "Watch my video content",
      url: "https://www.youtube.com/@WelaDev",
      icon: <Youtube className="w-6 h-6" />,
      bgColor: "bg-red-600 hover:bg-red-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Profile Section */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 rounded-full mx-auto overflow-hidden shadow-xl">
              <img
                src="/myphoto.png"
                alt="Tak's profile photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Hi I'm <span className="text-blue-600">Tak</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8">Who am I?</p>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full ${link.bgColor} text-white rounded-xl p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-lg group`}
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
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10">
          <a
            href="https://holopin.io/@karitthorn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://holopin.me/karitthorn"
              alt="An image of @karitthorn's Holopin badges, which is a link to view their full Holopin profile"
              className="rounded-2xl"
            />
          </a>
        </div>

        {/* Footer */}
        <div className="text-center mt-10">
          <div className="mb-3">
        <Link to="/a" className="text-blue-600 hover:text-blue-800  underline ">
            🏆 My Achievements
          </Link>
          </div>
          <p className="text-gray-500 text-sm">
            Connect with me on social media
          </p>

        </div>
      </div>
    </div>
  );
};

export default Index;
