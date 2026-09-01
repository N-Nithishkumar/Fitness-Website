import { Settings, LogOut, Award, Calendar } from 'lucide-react';

const Profile = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <div className="glass-card" style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>
          NK
        </div>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Nithish Kumar</h1>
          <p style={{ color: 'var(--primary)', fontSize: '1.2rem', fontWeight: 'bold' }}>Level 12 • 🔥 17 Day Streak</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button style={{ padding: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}><Settings /></button>
          <button style={{ padding: '10px', background: 'rgba(255,60,0,0.2)', color: 'var(--primary)', borderRadius: '8px' }}><LogOut /></button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <div className="glass-card" style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Award style={{ color: 'var(--primary)' }} /> Achievements
          </h2>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
              <strong>🔥 7 Day Warrior</strong>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Maintained a 7-day workout streak.</p>
            </li>
            <li style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px' }}>
              <strong>💪 Iron Lifter</strong>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Lifted 1,000 KG total.</p>
            </li>
            <li style={{ background: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', opacity: 0.5 }}>
              <strong>👑 MAX Legend</strong>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Reach Level 20.</p>
            </li>
          </ul>
        </div>

        <div className="glass-card" style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar style={{ color: 'var(--primary)' }} /> Information
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--muted)' }}>Height</span>
              <span>175 cm</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--muted)' }}>Weight</span>
              <span>72 kg</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--muted)' }}>Goal</span>
              <span>Muscle Gain</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem' }}>
              <span style={{ color: 'var(--muted)' }}>Diet Preference</span>
              <span>Natural</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
