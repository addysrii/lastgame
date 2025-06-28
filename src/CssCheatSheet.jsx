import React, { useState, useEffect } from 'react';
import { Play, Users, Calendar, ArrowRight, Menu, X, Youtube, Twitter, Instagram, Mail, Phone, ChevronDown, Star, TrendingUp, Award, Zap, Eye, Trophy, Globe, Clock, Heart, Share2, BookOpen, Mic, Video, Camera } from 'lucide-react';
import img from './assets/download.jpg'
const GameChangersFinalPart = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Added missing formData state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Added missing form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Sample data
  const latestVideos = [
    {
      id: 1,
      title: "IPL 2025 Analysis: Team Strategies Decoded",
      thumbnail: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=400&h=225&fit=crop",
      duration: "12:45",
      views: "156K",
      uploadDate: "2 days ago",
      trending: true
    },
    {
      id: 2,
      title: "India vs Australia: Key Players to Watch",
      thumbnail: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=225&fit=crop",
      duration: "15:30",
      views: "89K",
      uploadDate: "5 days ago",
      trending: false
    },
    {
      id: 3,
      title: "Football Transfer Window: Biggest Moves",
      thumbnail: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=225&fit=crop",
      duration: "18:22",
      views: "234K",
      uploadDate: "1 week ago",
      trending: true
    },
    {
      id: 4,
      title: "Olympic Preparation: Athletes to Watch",
      thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop",
      duration: "20:15",
      views: "345K",
      uploadDate: "3 days ago",
      trending: false
    }
  ];

  const heroSlides = [
    {
      title: "Breaking Sports Analysis",
      subtitle: "Your Premier Sports Journalism Destination",
      description: "In-depth coverage, expert analysis, and exclusive insights from the world of sports",
      image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1920&h=1080&fit=crop",
      cta: "Watch Latest"
    },
    {
      title: "Expert Commentary",
      subtitle: "Professional Sports Insights",
      description: "Deep dive into strategies, player analysis, and game-changing moments",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=1080&fit=crop",
      cta: "Explore Analysis"
    },
    {
      title: "Breaking News",
      subtitle: "Stay Ahead of the Game",
      description: "First to break stories, last to leave the field - comprehensive sports coverage",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&h=1080&fit=crop",
      cta: "Read Updates"
    }
  ];

  const sportsCategories = [
    { 
      name: 'Cricket', 
      count: 45, 
      icon: '🏏', 
      gradient: 'from-emerald-400 to-green-600',
      description: 'Comprehensive cricket coverage'
    },
    { 
      name: 'Football', 
      count: 23, 
      icon: '⚽', 
      gradient: 'from-blue-400 to-indigo-600',
      description: 'Global football insights'
    },
    { 
      name: 'Basketball', 
      count: 12, 
      icon: '🏀', 
      gradient: 'from-orange-400 to-red-600',
      description: 'NBA and international hoops'
    },
    { 
      name: 'Tennis', 
      count: 18, 
      icon: '🎾', 
      gradient: 'from-yellow-400 to-orange-600',
      description: 'Grand Slam coverage'
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Cricket in India: A Decade of Change",
      excerpt: "Exploring how Indian cricket has transformed over the past decade with new strategies, player development, and technological integration that's reshaping the game for future generations.",
      author: "Manoj Dimri",
      date: "June 25, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      category: "Cricket",
      featured: true,
      likes: 234,
      comments: 45
    },
    {
      id: 2,
      title: "Women's Cricket: Breaking Barriers and Setting Records",
      excerpt: "An in-depth look at the remarkable journey of women's cricket in India and the challenges that lie ahead for the next generation of female cricketers.",
      author: "Manoj Dimri",
      date: "June 22, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop",
      category: "Women's Sports",
      featured: false,
      likes: 189,
      comments: 32
    },
    {
      id: 3,
      title: "Technology in Sports: Game-Changing Innovations",
      excerpt: "From VAR in football to DRS in cricket, how technology is revolutionizing sports and changing the way we experience games in the modern era.",
      author: "Manoj Dimri",
      date: "June 20, 2025",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop",
      category: "Technology",
      featured: true,
      likes: 312,
      comments: 67
    }
  ];

  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Analysis",
      description: "In-depth video breakdowns of games, strategies, and player performances",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Live Commentary",
      description: "Real-time commentary and analysis during major sporting events",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Behind Scenes",
      description: "Exclusive behind-the-scenes content and interviews with athletes",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Sports Journalism",
      description: "Professional sports journalism with expert insights and reporting",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Cricket Enthusiast",
      content: "Game Changers provides the most insightful cricket analysis I've ever seen. Manoj's expertise really shows in every video.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "Sports Fan",
      content: "The coverage of women's sports is phenomenal. Finally, a channel that gives equal importance to all sports.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
      rating: 5
    },
    {
      name: "Amit Kumar",
      role: "Football Coach",
      content: "As a coach, I find the tactical analysis videos extremely helpful for understanding modern football strategies.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      rating: 5
    }
  ];
const Navigation = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900/95 backdrop-blur-xl shadow-2xl border-b border-gray-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-xl flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <span className="text-white font-bold text-xl">GC</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <span className=" font-bold text-2xl bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Game Changers</span>
              <div className="text-xs text-gray-400 font-medium">Sports Journalism</div>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'Videos', 'About', 'Blog', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`relative text-white hover:text-orange-400 transition-all duration-300 px-4 py-2 rounded-lg group ${
                  activeSection === item.toLowerCase() ? 'text-orange-400' : ''
                }`}
              >
                <span className="relative z-10">{item}</span>
                <div className={`absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  activeSection === item.toLowerCase() ? 'opacity-100' : ''
                }`}></div>
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/98 backdrop-blur-xl border-t border-gray-800">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {['Home', 'Videos', 'About', 'Blog', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item.toLowerCase());
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-3 text-white hover:text-orange-400 hover:bg-gray-800/50 rounded-lg transition-all duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/95 z-10"></div>
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt="Hero Background" 
              className="w-full h-full object-cover transform scale-105"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-orange-900/20 animate-pulse z-10"></div>
      </div>

      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="mb-8">
          {/* <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-6 py-2 mb-6"> */}
            {/* <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div> */}
            {/* <span className="text-orange-300 font-medium">Live Sports Coverage</span> */}
          {/* </div> */}
        </div>

        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 leading-tight">
          <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            {heroSlides[currentSlide].title}
          </span>
        </h1>
        
        <div className="mb-6">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-200 mb-4">
            {heroSlides[currentSlide].subtitle}
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {heroSlides[currentSlide].description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <button className="group relative bg-gradient-to-r from-red-500 via-orange-500 to-red-600 text-white px-12 py-5 rounded-full font-bold text-xl hover:from-red-600 hover:via-orange-600 hover:to-red-700 transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-red-500/25 flex items-center space-x-3">
            <Youtube className="w-7 h-7" />
            <span>{heroSlides[currentSlide].cta}</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
          <button className="border-3 border-white/80 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-gray-900 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm">
            Explore Content
          </button>
        </div>

        <div className="flex justify-center space-x-3 mb-8">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-orange-500 w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-4xl px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
          {/* {achievements.map((stat, index) => (
            <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
              <div className={`${stat.color} mb-3 flex justify-center group-hover:animate-bounce`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))} */}
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );

  const LatestVideosSection = () => (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-orange-500/20 rounded-full px-6 py-2 mb-6">
            <Zap className="w-5 h-5 text-orange-500" />
            <span className="text-orange-600 font-semibold">Latest Content</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Videos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dive into our most recent and trending sports analysis, breaking news coverage, and exclusive interviews
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          <div className="lg:col-span-1 group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
            <div className="relative">
              <img 
                src={latestVideos[0].thumbnail} 
                alt={latestVideos[0].title}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {latestVideos[0].trending && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>Trending</span>
                </div>
              )}
              
              <div className="absolute bottom-4 right-4 bg-black/90 text-white px-3 py-1 rounded-lg text-sm font-medium">
                {latestVideos[0].duration}
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                {latestVideos[0].title}
              </h3>
              <div className="flex items-center justify-between text-gray-500">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{latestVideos[0].views} views</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{latestVideos[0].uploadDate}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {latestVideos.slice(1, 4).map((video) => (
              <div key={video.id} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex">
                  <div className="relative w-48 h-32 flex-shrink-0">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-white ml-0.5" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-200 line-clamp-2">
                      {video.title}
                    </h4>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{video.views} views</span>
                      <span>{video.uploadDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Explore All Videos
          </button>
        </div>
      </div>
    </section>
  );
  // Complete About Section
  const AboutSection = () => (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full px-6 py-2 mb-8">
              <Star className="w-5 h-5 text-orange-400" />
              <span className="text-orange-300 font-semibold">About the Creator</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Meet <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Manoj Dimri</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              A passionate sports journalist with over 8 years of experience in covering cricket, football, and other major sports. 
              Manoj brings unique insights and deep analysis to every story, making complex sports strategies accessible to everyone.
            </p>
            
            <p className="text-lg text-gray-400 mb-10 leading-relaxed">
              From covering local matches to international tournaments, Game Changers has become a trusted source for 
              sports enthusiasts seeking authentic, engaging, and professionally crafted content that goes beyond the surface.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl border border-gray-600 hover:border-orange-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Expert Analysis</h3>
                <p className="text-gray-400 leading-relaxed">In-depth sports analysis with professional insights and data-driven commentary</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl border border-gray-600 hover:border-orange-500/50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Global Coverage</h3>
                <p className="text-gray-400 leading-relaxed">Comprehensive coverage of sports events from around the world</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-bold hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                Learn More About Manoj
              </button>
              <button className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all duration-300">
                Get In Touch
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
            
            <div className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl p-1 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src={img}
                alt="Manoj Dimri" 
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl p-6 shadow-2xl border border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">8+ Years</div>
                <div className="text-sm text-gray-600 font-medium">Sports Journalism</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Categories Section
  const CategoriesSection = () => (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-full px-6 py-2 mb-6">
            <Trophy className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-semibold">Sports Coverage</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Sports <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Categories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dive deep into our comprehensive coverage across multiple sports disciplines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sportsCategories.map((category, index) => (
            <div key={index} className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
              <div className="absolute inset-0 opacity-5">
                <div className={`w-full h-full bg-gradient-to-br ${category.gradient}`}></div>
              </div>
              
              <div className="relative p-8 text-center">
                <div className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{category.description}</p>
                
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{category.count}</div>
                    <div className="text-sm text-gray-500">Videos</div>
                  </div>
                </div>
                
                <button className="group w-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:from-gray-900 hover:to-gray-800 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Blog Section
  const BlogSection = () => (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full px-6 py-2 mb-6">
            <BookOpen className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-semibold">Latest Articles</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Expert <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Read our in-depth articles and analysis on the latest sports trends, strategies, and breaking stories
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={post.id} className={`group bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-600 ${post.featured ? 'lg:col-span-2 lg:row-span-1' : ''}`}>
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${post.featured ? 'h-64' : 'h-48'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {post.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4" />
                    <span>Featured</span>
                  </div>
                )}
                
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-4 text-white text-sm">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Share2 className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className={`font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300 leading-tight ${post.featured ? 'text-3xl' : 'text-xl'}`}>
                  {post.title}
                </h3>
                <p className={`text-gray-300 mb-6 leading-relaxed ${post.featured ? 'text-lg' : 'text-base'}`}>
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">MD</span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{post.author}</div>
                      <div className="text-gray-400 text-sm">{post.date}</div>
                    </div>
                  </div>
                  
                  <button className="text-green-400 font-semibold hover:text-green-300 transition-colors duration-200 flex items-center space-x-1">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );

  // Services Section
  const ServicesSection = () => (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full px-6 py-2 mb-6">
            <Trophy className="w-5 h-5 text-indigo-600" />
            <span className="text-indigo-700 font-semibold">Our Services</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What We <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive sports journalism services designed to keep you informed and engaged
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-100">
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Testimonials Section
  const TestimonialsSection = () => (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-full px-6 py-2 mb-6">
            <Users className="w-5 h-5 text-pink-600" />
            <span className="text-pink-700 font-semibold">Community</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            What People <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our amazing community of sports enthusiasts
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              <div className="flex items-center space-x-4">
               <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Contact Section
  const ContactSection = () => (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full px-6 py-2 mb-6">
            <Mail className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-300 font-semibold">Contact Us</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a story tip, collaboration idea, or just want to connect? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 text-lg">contact@gamechangers.com</p>
                <p className="text-gray-400">We'll get back to you within 24 hours</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300 text-lg">+91 98765 43210</p>
                <p className="text-gray-400">Monday to Friday, 9 AM to 6 PM IST</p>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Our Journey</h3>
              <div className="flex space-x-4">
                <button className="w-16 h-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg">
                  <Youtube className="w-8 h-8 text-white" />
                </button>
                <button className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg">
                  <Twitter className="w-8 h-8 text-white" />
                </button>
                <button className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg">
                  <Instagram className="w-8 h-8 text-white" />
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl p-6 border border-gray-600">
              <h4 className="text-lg font-bold text-white mb-4">Business Hours</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-3xl p-10 border border-gray-600">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">Send us a Message</h3>
              <p className="text-gray-400">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-3">Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-300 mb-3">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-3">Subject *</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-300 mb-3">Message *</label>
                <textarea 
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-gray-700/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell us your thoughts, ideas, or questions..."
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-2xl font-bold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <p className="text-gray-400 text-sm text-center">
                * Required fields. We respect your privacy and will never share your information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Newsletter Section
  const NewsletterSection = () => (
    <section className="py-16 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stay Updated with Game Changers
        </h3>
        <p className="text-xl text-white/90 mb-8">
          Get the latest sports news, analysis, and exclusive content delivered to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/20"
          />
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-300">
            Subscribe
          </button>
        </div>
        <p className="text-white/70 text-sm mt-4">
          Join 50,000+ sports enthusiasts. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );

  // Enhanced Footer
// Enhanced Footer
const Footer = () => {
  // Handler functions for social media clicks
  const handleYouTubeClick = () => {
    window.open('https://www.youtube.com/channel/UCaV29jT0qPF-0w1V9hUFSpw', '_blank', 'noopener,noreferrer');
  };

  const handleTwitterClick = () => {
    window.open('https://twitter.com/gamechangers', '_blank', 'noopener,noreferrer');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/gamechangers', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">GC</span>
              </div>
              <div>
                <span className="text-white font-bold text-2xl">Game Changers</span>
                <div className="text-orange-400 text-sm font-medium">Sports Journalism Excellence</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Your trusted source for comprehensive sports journalism, in-depth analysis, and breaking news. 
              Join our community of passionate sports enthusiasts and stay ahead of the game.
            </p>
            <div className="flex space-x-4">
              {/* YouTube Button */}
              <button 
                onClick={handleYouTubeClick}
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 transition-all duration-300 cursor-pointer"
                aria-label="Visit our YouTube channel"
              >
                <Youtube className="w-6 h-6" />
              </button>
              
              {/* Twitter Button */}
              <button 
                onClick={handleTwitterClick}
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300 cursor-pointer"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-6 h-6" />
              </button>
              
              {/* Instagram Button */}
              <button 
                onClick={handleInstagramClick}
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-600 transition-all duration-300 cursor-pointer"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          {/* Rest of your footer content remains the same */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-400">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Videos', 'About', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <button className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-400">Categories</h3>
            <ul className="space-y-3">
              {['Cricket', 'Football', 'Basketball', 'Tennis', 'Other Sports'].map((item) => (
                <li key={item}>
                  <button className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 text-orange-400">Support</h3>
            <ul className="space-y-3">
              {['Help Center', 'Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((item) => (
                <li key={item}>
                  <button className="text-gray-400 hover:text-white transition-colors duration-200 hover:translate-x-1 transform">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2025 Game Changers. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                Crafted with ❤️ for sports enthusiasts worldwide
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-sm">Live & Active</span>
              </div>
              <div className="text-gray-400 text-sm">
                Made in India 🇮🇳
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

  return (
    <div className="min-h-screen bg-white">
      <Navigation/>
      <HeroSection/>
      <LatestVideosSection/>
      <AboutSection/>
      <CategoriesSection/>
      <BlogSection/>
      <ServicesSection/>
      <TestimonialsSection/>
      <ContactSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default GameChangersFinalPart;