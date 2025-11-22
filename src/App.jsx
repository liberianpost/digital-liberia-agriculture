import React, { useState, useEffect } from 'react';
import Login from './components/Login';

// Firebase configuration - USING EXACT SAME CONFIG AS WORKING PROJECT
const firebaseConfig = {
  apiKey: "AIzaSyA4NndmuQHTCKh7IyQYAz3DL_r8mttyRYg",
  authDomain: "digitalliberia-notification.firebaseapp.com",
  projectId: "digitalliberia-notification",
  storageBucket: "digitalliberia-notification.appspot.com",
  messagingSenderId: "537791418352",
  appId: "1:537791418352:web:378b48439b2c9bed6dd735"
};

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setShowLogin(false);
    console.log('Agriculture system login successful:', userData);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('agricultureUser');
  };

  return (
    <div className="app">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">🌱</span>
            <span>Digital Liberia Agriculture</span>
          </div>
          
          {/* Liberia Flag and Login Section */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {/* Liberia Flag */}
            <div 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '0.5rem 1rem',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{ 
                fontSize: '1.5rem',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
              }}>
                🇱🇷
              </div>
              <span style={{ 
                color: 'var(--white)', 
                fontSize: '0.9rem',
                fontWeight: '600',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)'
              }}>
                Republic of Liberia
              </span>
            </div>

            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <span style={{ 
                  color: 'var(--white)', 
                  fontWeight: '600',
                  fontSize: '0.95rem'
                }}>
                  Welcome, {user.profile?.firstName} {user.profile?.lastName}
                </span>
                <button 
                  onClick={handleLogout}
                  className="btn btn-glass"
                  style={{ 
                    padding: '0.7rem 1.2rem', 
                    fontSize: '0.85rem',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                onClick={() => setShowLogin(true)}
                className="btn btn-agriculture"
                style={{ 
                  padding: '0.7rem 1.5rem', 
                  fontSize: '0.9rem',
                  boxShadow: '0 4px 15px rgba(34, 197, 94, 0.4)'
                }}
              >
                🌱 Agriculture Login
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {!user ? (
          <div className="hero-section">
            <div className="hero-text">
              <h1>
                Modern AgriTech
                <br />
                <span style={{ 
                  background: 'var(--agriculture-gradient)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent', 
                  backgroundClip: 'text' 
                }}>
                  Platform
                </span>
              </h1>
              <p>
                Revolutionizing Liberian agriculture with cutting-edge technology, 
                smart farming solutions, and sustainable agricultural practices.
              </p>

              {/* Enhanced Agriculture Features Grid */}
              <div className="agriculture-features-grid">
                {/* Smart Farming Card */}
                <div className="agriculture-feature-item floating" style={{
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(21, 128, 61, 0.1))',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0s'
                }}>
                  <div className="agriculture-feature-icon" style={{
                    background: 'linear-gradient(135deg, #22c55e, #15803d)',
                    boxShadow: '0 8px 25px rgba(34, 197, 94, 0.4)'
                  }}>🌿</div>
                  <div className="agriculture-feature-content">
                    <h4>Smart Farming</h4>
                    <p>IoT sensors and data-driven insights for optimized crop production</p>
                  </div>
                </div>

                {/* Market Access Card */}
                <div className="agriculture-feature-item floating" style={{
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(217, 119, 6, 0.1))',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0.2s'
                }}>
                  <div className="agriculture-feature-icon" style={{
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    boxShadow: '0 8px 25px rgba(245, 158, 11, 0.4)'
                  }}>📈</div>
                  <div className="agriculture-feature-content">
                    <h4>Market Access</h4>
                    <p>Direct market connections and real-time pricing for farmers</p>
                  </div>
                </div>

                {/* Crop Monitoring Card */}
                <div className="agriculture-feature-item floating" style={{
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(2, 132, 199, 0.1))',
                  border: '1px solid rgba(14, 165, 233, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0.4s'
                }}>
                  <div className="agriculture-feature-icon" style={{
                    background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                    boxShadow: '0 8px 25px rgba(14, 165, 233, 0.4)'
                  }}>🛰️</div>
                  <div className="agriculture-feature-content">
                    <h4>Crop Monitoring</h4>
                    <p>Satellite imagery and drone technology for field analysis</p>
                  </div>
                </div>

                {/* Supply Chain Card */}
                <div className="agriculture-feature-item floating" style={{
                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(147, 51, 234, 0.1))',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0.6s'
                }}>
                  <div className="agriculture-feature-icon" style={{
                    background: 'linear-gradient(135deg, #a855f7, #9333ea)',
                    boxShadow: '0 8px 25px rgba(168, 85, 247, 0.4)'
                  }}>🚚</div>
                  <div className="agriculture-feature-content">
                    <h4>Supply Chain</h4>
                    <p>Efficient logistics and distribution network management</p>
                  </div>
                </div>
              </div>

              <div className="hero-actions">
                <button 
                  onClick={() => setShowLogin(true)}
                  className="btn btn-agriculture"
                >
                  🌱 Access AgriTech Portal
                </button>
                <button className="btn btn-market">
                  📈 Market Prices
                </button>
                <button className="btn btn-resources">
                  📚 Farming Resources
                </button>
              </div>
            </div>

            <div className="hero-visual" style={{ position: 'relative' }}>
              <div 
                className="floating"
                style={{
                  background: 'var(--card-bg)',
                  padding: '3rem',
                  borderRadius: 'var(--border-radius-lg)',
                  boxShadow: 'var(--shadow-xl)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(20px)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Subtle background pattern */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `linear-gradient(45deg, 
                    rgba(34, 197, 94, 0.08) 0%, 
                    rgba(245, 158, 11, 0.08) 50%, 
                    rgba(14, 165, 233, 0.08) 100%)`,
                  zIndex: 0
                }}></div>
                
                {/* Agriculture Icon */}
                <div 
                  style={{
                    fontSize: '6rem',
                    marginBottom: '2rem',
                    color: '#22c55e',
                    filter: 'drop-shadow(0 4px 12px rgba(34, 197, 94, 0.4))',
                    position: 'relative',
                    zIndex: 1,
                    animation: 'pulse 2s ease-in-out infinite'
                  }}
                >
                  🌾
                </div>
                <h3 style={{ 
                  color: '#22c55e', 
                  marginBottom: '1rem',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  position: 'relative',
                  zIndex: 1,
                  textShadow: '0 2px 4px rgba(34, 197, 94, 0.2)'
                }}>
                  Growing Liberia's Future
                </h3>
                <p style={{ 
                  color: 'var(--text-light)', 
                  lineHeight: '1.6',
                  position: 'relative',
                  zIndex: 1
                }}>
                  Empowering farmers with technology for sustainable agriculture
                </p>
                
                {/* Liberia Flag Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: '8px',
                  padding: '0.5rem 0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  zIndex: 1
                }}>
                  <span style={{ fontSize: '1.2rem' }}>🇱🇷</span>
                  <span style={{ 
                    fontSize: '0.8rem', 
                    color: '#22c55e',
                    fontWeight: '600'
                  }}>
                    LIBERIA
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ 
            width: '100%', 
            maxWidth: '1200px',
            textAlign: 'center'
          }}>
            <div 
              style={{
                background: 'var(--card-bg)',
                padding: '4rem',
                borderRadius: 'var(--border-radius-lg)',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(20px)',
                marginBottom: '3rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background pattern */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, 
                  rgba(34, 197, 94, 0.03) 0%, 
                  rgba(245, 158, 11, 0.03) 50%, 
                  rgba(14, 165, 233, 0.03) 100%)`,
                zIndex: 0
              }}></div>
              
              <div 
                style={{
                  fontSize: '4rem',
                  marginBottom: '1.5rem',
                  background: 'var(--agriculture-gradient)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                🎉
              </div>
              <h1 style={{ 
                color: 'var(--text-dark)', 
                marginBottom: '1rem',
                fontSize: '2.5rem',
                fontWeight: '800',
                position: 'relative',
                zIndex: 1
              }}>
                Welcome to AgriTech Portal
              </h1>
              <p style={{ 
                color: 'var(--text-light)', 
                fontSize: '1.2rem',
                marginBottom: '2rem',
                position: 'relative',
                zIndex: 1
              }}>
                Access advanced farming tools and agricultural management systems
              </p>
              
              {/* Liberia Flag Welcome Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                background: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                borderRadius: '12px',
                padding: '0.8rem 1.2rem',
                marginBottom: '2rem',
                position: 'relative',
                zIndex: 1
              }}>
                <span style={{ fontSize: '1.5rem' }}>🇱🇷</span>
                <span style={{ 
                  fontSize: '0.9rem', 
                  color: '#22c55e',
                  fontWeight: '600'
                }}>
                  Ministry of Agriculture - Republic of Liberia
                </span>
              </div>
              
              {/* Enhanced Agriculture Action Grid for Logged-in Users */}
              <div className="agriculture-action-grid">
                {/* Farm Management Card */}
                <div className="agriculture-action-card floating" style={{
                  background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(21, 128, 61, 0.1))',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0s'
                }}>
                  <div className="agriculture-card-icon" style={{
                    background: 'linear-gradient(135deg, #22c55e, #15803d)',
                    boxShadow: '0 15px 30px rgba(34, 197, 94, 0.4)'
                  }}>🚜</div>
                  <h3 className="agriculture-card-title">Farm Management</h3>
                  <p className="agriculture-card-description">
                    Comprehensive farm planning, monitoring, and management tools
                  </p>
                  <button className="btn btn-agriculture">
                    Manage Farm
                  </button>
                </div>
                
                {/* Market Intelligence Card */}
                <div className="agriculture-action-card floating" style={{
                  background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(217, 119, 6, 0.1))',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0.2s'
                }}>
                  <div className="agriculture-card-icon" style={{
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    boxShadow: '0 15px 30px rgba(245, 158, 11, 0.4)'
                  }}>📊</div>
                  <h3 className="agriculture-card-title">Market Intelligence</h3>
                  <p className="agriculture-card-description">
                    Real-time market prices, trends, and trading opportunities
                  </p>
                  <button className="btn btn-market">
                    View Markets
                  </button>
                </div>
                
                {/* Crop Analytics Card */}
                <div className="agriculture-action-card floating" style={{
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(2, 132, 199, 0.1))',
                  border: '1px solid rgba(14, 165, 233, 0.3)',
                  backdropFilter: 'blur(20px)',
                  animationDelay: '0.4s'
                }}>
                  <div className="agriculture-card-icon" style={{
                    background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                    boxShadow: '0 15px 30px rgba(14, 165, 233, 0.4)'
                  }}>🌡️</div>
                  <h3 className="agriculture-card-title">Crop Analytics</h3>
                  <p className="agriculture-card-description">
                    Advanced analytics for crop health, yield prediction, and optimization
                  </p>
                  <button className="btn btn-agriculture">
                    View Analytics
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Login Modal */}
      {showLogin && (
        <Login 
          onLoginSuccess={handleLoginSuccess}
          onBack={() => setShowLogin(false)}
        />
      )}
    </div>
  );
}

export default App;
