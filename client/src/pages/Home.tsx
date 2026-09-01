import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      textAlign: 'center',
      padding: '2rem',
      overflow: 'hidden'
    }}>
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      >
        <source src="/picsss/videoplayback.webm" type="video/webm" />
      </video>
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        zIndex: 1
      }}></div>
      
      <div style={{ zIndex: 2, maxWidth: '800px' }} className="glass-card">
        <div style={{ padding: '3rem' }}>
          <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>
            BUILD YOUR STRONGEST SELF
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#e0e0e0' }}>
            Personalized workouts. Smarter nutrition. Real progress.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/onboarding" className="btn-primary" style={{ padding: '15px 30px', fontSize: '1.2rem' }}>
              START YOUR FITNESS JOURNEY
            </Link>
            <Link to="/store" className="btn-primary" style={{ 
              padding: '15px 30px', 
              fontSize: '1.1rem',
              background: 'transparent',
              border: '2px solid var(--primary)',
              color: 'var(--primary)'
            }}>
              EXPLORE STORE
            </Link>
          </div>
        </div>
      </div>

      <div style={{ 
        zIndex: 2, 
        display: 'flex', 
        gap: '3rem', 
        marginTop: '4rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center', minWidth: '150px' }}>
          <h2 className="text-gradient" style={{ fontSize: '2.5rem' }}>10K+</h2>
          <p style={{ color: 'var(--muted)' }}>Members</p>
        </div>
        <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center', minWidth: '150px' }}>
          <h2 className="text-gradient" style={{ fontSize: '2.5rem' }}>500+</h2>
          <p style={{ color: 'var(--muted)' }}>Workouts</p>
        </div>
        <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center', minWidth: '150px' }}>
          <h2 className="text-gradient" style={{ fontSize: '2.5rem' }}>95%</h2>
          <p style={{ color: 'var(--muted)' }}>Success Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
