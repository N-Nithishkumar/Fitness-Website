import { Link } from 'react-router-dom';
import { Flame, Droplets, Activity, ShieldCheck } from 'lucide-react';
import { useGlobalState } from '../context/GlobalState';

const Dashboard = () => {
  const { userProfile } = useGlobalState();
  const goal = userProfile.goal || 'general';
  
  const getGoalData = () => {
    switch (goal) {
      case 'bulking':
        return {
          title: '💪 MUSCLE GAIN',
          targetCal: 3200,
          targetProtein: '180 g',
          message: 'BUILD. EAT. RECOVER. REPEAT.',
          workoutTitle: 'Chest + Triceps (Hypertrophy)',
          workoutDuration: '60 min',
          workoutSets: '4 × 10'
        };
      case 'weight_loss':
        return {
          title: '🔥 FAT LOSS',
          targetCal: 1800,
          targetProtein: '140 g',
          message: 'BURN FAT. KEEP MUSCLE. GET STRONGER.',
          workoutTitle: 'Full Body HIIT',
          workoutDuration: '45 min',
          workoutSets: 'HIIT Intervals'
        };
      case 'cardio':
        return {
          title: '❤️ ENDURANCE',
          targetCal: 2400,
          targetProtein: '120 g',
          message: 'GO FARTHER. GO FASTER. GO STRONGER.',
          workoutTitle: '10km Tempo Run',
          workoutDuration: '55 min',
          workoutSets: 'Distance'
        };
      case 'strength':
        return {
          title: '🏋️ STRENGTH',
          targetCal: 2800,
          targetProtein: '170 g',
          message: 'LIFT HEAVY. GET STRONGER.',
          workoutTitle: 'Heavy Deadlifts + Core',
          workoutDuration: '75 min',
          workoutSets: '5 × 5'
        };
      default:
        return {
          title: '🧘 GENERAL FITNESS',
          targetCal: 2200,
          targetProtein: '130 g',
          message: 'STAY CONSISTENT. STAY HEALTHY.',
          workoutTitle: 'Balanced Full Body',
          workoutDuration: '50 min',
          workoutSets: '3 × 12'
        };
    }
  };

  const data = getGoalData();

  const xpPercentage = ((userProfile.xp % 1000) / 1000) * 100;
  const fitnessScore = Math.min(85 + (userProfile.streak * 2), 100);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem' }}>Good Morning, User 👋</h1>
          <p style={{ color: 'var(--primary)', fontSize: '1.2rem', fontWeight: 'bold' }}>YOUR GOAL: {data.title}</p>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '15px 25px', borderRadius: '12px', display: 'flex', gap: '2rem' }}>
          <div>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>MAX Level {userProfile.level}</p>
            <div style={{ width: '150px', height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', marginTop: '5px' }}>
              <div style={{ width: `${xpPercentage}%`, height: '100%', background: 'var(--primary)', borderRadius: '4px' }}></div>
            </div>
            <p style={{ fontSize: '0.8rem', textAlign: 'right', marginTop: '3px' }}>{userProfile.xp} XP</p>
          </div>
          <div style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Fitness Score</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck color="#4ade80" />
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#4ade80' }}>{fitnessScore}/100</span>
            </div>
          </div>
        </div>
      </header>

      <div style={{ padding: '1.5rem', background: 'rgba(255,60,0,0.1)', borderLeft: '4px solid var(--primary)', borderRadius: '8px', marginBottom: '2rem' }}>
        <h3 style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>MAX Says:</h3>
        <p style={{ fontSize: '1.1rem', marginTop: '0.5rem' }}>{data.message}</p>
      </div>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(255,60,0,0.2)', padding: '15px', borderRadius: '50%', color: 'var(--primary)' }}><Flame size={32} /></div>
          <div>
            <h3 style={{ color: 'var(--muted)', fontSize: '1rem' }}>Daily Target</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{data.targetCal} <span style={{ fontSize: '1rem' }}>kcal</span></p>
          </div>
        </div>
        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '15px', borderRadius: '50%', color: '#3b82f6' }}><Droplets size={32} /></div>
          <div>
            <h3 style={{ color: 'var(--muted)', fontSize: '1rem' }}>Protein Goal</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{data.targetProtein}</p>
          </div>
        </div>
        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ background: 'rgba(74, 222, 128, 0.2)', padding: '15px', borderRadius: '50%', color: '#4ade80' }}><Activity size={32} /></div>
          <div>
            <h3 style={{ color: 'var(--muted)', fontSize: '1rem' }}>Workout Streak</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>🔥 {userProfile.streak} Days</p>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Today's Plan</h2>
        <div className="glass-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{data.workoutTitle}</h3>
              <p style={{ color: 'var(--muted)' }}>Estimated Time: {data.workoutDuration}</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '20px' }}>
              <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{data.workoutSets}</span>
            </div>
          </div>
          
          <Link to="/workout" className="btn-primary" style={{ width: '100%', fontSize: '1.2rem', padding: '15px', display: 'block', textAlign: 'center' }}>
            START WORKOUT
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
