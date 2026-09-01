import { useState } from 'react';
import { Play, Check, Trophy } from 'lucide-react';
import { useGlobalState } from '../context/GlobalState';

const Workout = () => {
  const { userProfile, addXp } = useGlobalState();
  const goal = userProfile.goal || 'general';

  const [activeSet, setActiveSet] = useState(1);
  const [completedSets, setCompletedSets] = useState<number[]>([]);
  const [workoutFinished, setWorkoutFinished] = useState(false);

  const getWorkoutData = () => {
    switch (goal) {
      case 'bulking':
        return { title: 'Chest & Triceps', subtitle: 'Hypertrophy Focus', exercise: 'Bench Press', pr: '80 kg', sets: 4, type: 'strength' };
      case 'weight_loss':
        return { title: 'Full Body HIIT', subtitle: 'Fat Burn Circuit', exercise: 'Burpees', pr: '30 reps', sets: 4, type: 'cardio' };
      case 'cardio':
        return { title: '10km Tempo Run', subtitle: 'Endurance Building', exercise: 'Pace Running', pr: '4:30 /km', sets: 1, type: 'cardio' };
      case 'strength':
        return { title: 'Heavy Deadlifts', subtitle: 'Max Strength', exercise: 'Barbell Deadlift', pr: '140 kg', sets: 5, type: 'strength' };
      default:
        return { title: 'Balanced Full Body', subtitle: 'General Fitness', exercise: 'Squats', pr: '60 kg', sets: 3, type: 'strength' };
    }
  };

  const data = getWorkoutData();

  const handleCompleteSet = (set: number) => {
    if (!completedSets.includes(set)) {
      setCompletedSets([...completedSets, set]);
      setActiveSet(set + 1);
      addXp(10); // 10 XP per set
    }
  };

  const handleFinishWorkout = () => {
    setWorkoutFinished(true);
    addXp(100); // 100 XP for finishing workout
  };

  if (workoutFinished) {
    return (
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)' }}>🎉 WORKOUT COMPLETED</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--muted)' }}>You crushed {data.title} today!</p>
        <div className="glass-card" style={{ padding: '2rem', marginTop: '2rem', display: 'inline-block' }}>
          <h2 style={{ fontSize: '2rem', color: '#4ade80' }}>+100 XP</h2>
          <p>Earned towards next level</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2rem' }}>{data.title}</h1>
          <p style={{ color: 'var(--muted)' }}>{data.subtitle}</p>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.1)', padding: '10px 20px', borderRadius: '20px', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div style={{ width: '10px', height: '10px', background: 'red', borderRadius: '50%', animation: 'pulse 1s infinite' }}></div>
          <span>ACTIVE</span>
        </div>
      </header>

      <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem' }}>1. {data.exercise}</h2>
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--primary)' }}>
            <Trophy size={18} />
            <span style={{ fontWeight: 'bold' }}>PR: {data.pr}</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {Array.from({ length: data.sets }).map((_, idx) => {
            const set = idx + 1;
            const isCompleted = completedSets.includes(set);
            const isActive = activeSet === set;
            return (
              <div 
                key={set} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem', 
                  padding: '1rem', 
                  background: isActive ? 'rgba(255, 60, 0, 0.1)' : 'rgba(255,255,255,0.05)', 
                  borderRadius: '8px',
                  border: isActive ? '1px solid var(--primary)' : '1px solid transparent',
                  opacity: isCompleted ? 0.5 : 1
                }}
              >
                <div style={{ width: '30px', fontWeight: 'bold' }}>{set}</div>
                <div style={{ flex: 1, display: 'flex', gap: '1rem' }}>
                  {data.type === 'strength' ? (
                    <>
                      <input type="number" defaultValue="60" disabled={isCompleted} style={{ width: '80px', padding: '8px', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', borderRadius: '4px' }} />
                      <span style={{ alignSelf: 'center', color: 'var(--muted)' }}>kg</span>
                      <input type="number" defaultValue="10" disabled={isCompleted} style={{ width: '80px', padding: '8px', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', borderRadius: '4px' }} />
                      <span style={{ alignSelf: 'center', color: 'var(--muted)' }}>reps</span>
                    </>
                  ) : (
                    <>
                      <input type="text" defaultValue="30" disabled={isCompleted} style={{ width: '80px', padding: '8px', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', borderRadius: '4px' }} />
                      <span style={{ alignSelf: 'center', color: 'var(--muted)' }}>mins / reps</span>
                    </>
                  )}
                </div>
                <button 
                  onClick={() => handleCompleteSet(set)}
                  disabled={isCompleted}
                  style={{ 
                    padding: '8px', 
                    background: isCompleted ? 'green' : 'rgba(255,255,255,0.1)', 
                    borderRadius: '50%',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: isCompleted ? 'default' : 'pointer'
                  }}
                >
                  {isCompleted ? <Check size={20} /> : <Play size={20} />}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem', opacity: 0.5 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem' }}>2. Next Exercise</h2>
        </div>
        <p>Complete previous exercise to unlock.</p>
      </div>

      <button onClick={handleFinishWorkout} className="btn-primary" style={{ width: '100%', padding: '15px', fontSize: '1.2rem', justifyContent: 'center' }}>
        FINISH WORKOUT
      </button>

    </div>
  );
};

export default Workout;
