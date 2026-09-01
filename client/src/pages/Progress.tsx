import { TrendingUp } from 'lucide-react';

const Progress = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Analytics & Progress</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--primary)' }}>
          <h3 style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>Current Weight</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>72.5 <span style={{ fontSize: '1rem' }}>kg</span></p>
          <span style={{ color: '#4ade80', fontSize: '0.9rem' }}>↓ 1.2 kg this month</span>
        </div>
        <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--primary)' }}>
          <h3 style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>Body Fat</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>14.2 <span style={{ fontSize: '1rem' }}>%</span></p>
          <span style={{ color: '#4ade80', fontSize: '0.9rem' }}>↓ 0.5% this month</span>
        </div>
        <div className="glass-card" style={{ padding: '1.5rem', borderLeft: '4px solid var(--primary)' }}>
          <h3 style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>Workouts</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>128</p>
          <span style={{ color: 'var(--primary)', fontSize: '0.9rem' }}>Top 10% active</span>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '2rem', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <TrendingUp color="var(--primary)" /> Weight Journey
        </h2>
        
        {/* Mock Chart */}
        <div style={{ height: '300px', display: 'flex', alignItems: 'flex-end', gap: '5%', padding: '1rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)', borderLeft: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ width: '15%', height: '80%', background: 'linear-gradient(to top, var(--primary), var(--secondary))', borderRadius: '4px 4px 0 0', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.8rem' }}>75kg</span>
          </div>
          <div style={{ width: '15%', height: '75%', background: 'linear-gradient(to top, var(--primary), var(--secondary))', borderRadius: '4px 4px 0 0', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.8rem' }}>74kg</span>
          </div>
          <div style={{ width: '15%', height: '70%', background: 'linear-gradient(to top, var(--primary), var(--secondary))', borderRadius: '4px 4px 0 0', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.8rem' }}>73.5kg</span>
          </div>
          <div style={{ width: '15%', height: '60%', background: 'linear-gradient(to top, var(--primary), var(--secondary))', borderRadius: '4px 4px 0 0', position: 'relative' }}>
            <span style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', fontSize: '0.8rem' }}>72.5kg</span>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1rem 0 1rem', color: 'var(--muted)', fontSize: '0.9rem' }}>
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
        </div>
      </div>
      
    </div>
  );
};

export default Progress;
