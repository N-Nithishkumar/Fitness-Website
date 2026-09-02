import { useState } from 'react';
import { Play, Check, Trophy, Lock } from 'lucide-react';
import { useGlobalState } from '../context/GlobalState';

const Workout = () => {
  const { userProfile, addXp } = useGlobalState();
  const goal = userProfile.goal || 'general';

  // We track the active exercise index (0-indexed) and active set index within that exercise (1-indexed)
  const [activeExerciseIndex, setActiveExerciseIndex] = useState(0);
  const [activeSet, setActiveSet] = useState(1);
  const [completedSetsByExercise, setCompletedSetsByExercise] = useState<Record<number, number[]>>({});
  const [workoutFinished, setWorkoutFinished] = useState(false);

  const getWorkoutData = () => {
    switch (goal) {
      case 'bulking':
        return {
          title: 'Chest & Triceps',
          subtitle: 'Hypertrophy Focus',
          exercises: [
            { name: 'Bench Press', pr: '80 kg', sets: 4, type: 'strength' },
            { name: 'Incline Dumbbell Press', pr: '30 kg', sets: 3, type: 'strength' },
            { name: 'Tricep Dips', pr: '15 reps', sets: 3, type: 'cardio' }, // using cardio type just for reps without kg
            { name: 'Skull Crushers', pr: '25 kg', sets: 3, type: 'strength' },
          ]
        };
      case 'weight_loss':
        return {
          title: 'Full Body HIIT',
          subtitle: 'Fat Burn Circuit',
          exercises: [
            { name: 'Burpees', pr: '30 reps', sets: 4, type: 'cardio' },
            { name: 'Mountain Climbers', pr: '60 secs', sets: 4, type: 'cardio' },
            { name: 'Jump Squats', pr: '20 reps', sets: 3, type: 'cardio' },
            { name: 'High Knees', pr: '45 secs', sets: 3, type: 'cardio' },
          ]
        };
      case 'cardio':
        return {
          title: 'Endurance Builder',
          subtitle: 'Stamina & Heart Health',
          exercises: [
            { name: 'Tempo Run', pr: '4:30 /km', sets: 1, type: 'cardio' },
            { name: 'Sprint Intervals', pr: '20 secs', sets: 5, type: 'cardio' },
            { name: 'Jump Rope', pr: '3 mins', sets: 3, type: 'cardio' },
          ]
        };
      case 'strength':
        return {
          title: 'Heavy Deadlifts & Back',
          subtitle: 'Max Strength',
          exercises: [
            { name: 'Barbell Deadlift', pr: '140 kg', sets: 5, type: 'strength' },
            { name: 'Weighted Pull-ups', pr: '20 kg', sets: 4, type: 'strength' },
            { name: 'Barbell Rows', pr: '80 kg', sets: 4, type: 'strength' },
          ]
        };
      default:
        return {
          title: 'Balanced Full Body',
          subtitle: 'General Fitness',
          exercises: [
            { name: 'Squats', pr: '60 kg', sets: 3, type: 'strength' },
            { name: 'Push-ups', pr: '40 reps', sets: 3, type: 'cardio' },
            { name: 'Walking Lunges', pr: '20 reps', sets: 3, type: 'cardio' },
            { name: 'Plank', pr: '2 mins', sets: 3, type: 'cardio' },
          ]
        };
    }
  };

  const data = getWorkoutData();

  const handleCompleteSet = (exerciseIndex: number, set: number, totalSets: number) => {
    const currentCompletedSets = completedSetsByExercise[exerciseIndex] || [];
    
    if (!currentCompletedSets.includes(set)) {
      const newCompleted = [...currentCompletedSets, set];
      setCompletedSetsByExercise({
        ...completedSetsByExercise,
        [exerciseIndex]: newCompleted
      });
      
      addXp(10); // 10 XP per set

      // If all sets for this exercise are done, advance to next exercise
      if (newCompleted.length === totalSets) {
        if (exerciseIndex + 1 < data.exercises.length) {
          setActiveExerciseIndex(exerciseIndex + 1);
          setActiveSet(1);
        } else {
          // Entire workout is essentially done, but they still have to click FINISH
        }
      } else {
        setActiveSet(set + 1);
      }
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

      {data.exercises.map((exercise, index) => {
        const isLocked = index > activeExerciseIndex;
        const isActiveExercise = index === activeExerciseIndex;
        const isCompletedExercise = index < activeExerciseIndex;
        const completedSets = completedSetsByExercise[index] || [];

        return (
          <div key={index} className="glass-card" style={{ padding: '2rem', marginBottom: '2rem', opacity: isLocked ? 0.5 : 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h2 style={{ fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                {isLocked && <Lock size={20} />} {index + 1}. {exercise.name}
              </h2>
              {!isLocked && (
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', color: 'var(--primary)' }}>
                  <Trophy size={18} />
                  <span style={{ fontWeight: 'bold' }}>PR: {exercise.pr}</span>
                </div>
              )}
            </div>

            {isLocked ? (
              <p>Complete previous exercise to unlock.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {Array.from({ length: exercise.sets }).map((_, idx) => {
                  const set = idx + 1;
                  const isCompleted = completedSets.includes(set);
                  const isActive = isActiveExercise && activeSet === set;
                  
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
                        {exercise.type === 'strength' ? (
                          <>
                            <input type="number" defaultValue="60" disabled={isCompleted || isCompletedExercise} style={{ width: '80px', padding: '8px', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', borderRadius: '4px' }} />
                            <span style={{ alignSelf: 'center', color: 'var(--muted)' }}>kg</span>
                            <input type="number" defaultValue="10" disabled={isCompleted || isCompletedExercise} style={{ width: '80px', padding: '8px', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', borderRadius: '4px' }} />
                            <span style={{ alignSelf: 'center', color: 'var(--muted)' }}>reps</span>
                          </>
                        ) : (
                          <>
                            <input type="text" defaultValue="30" disabled={isCompleted || isCompletedExercise} style={{ width: '80px', padding: '8px', background: 'rgba(0,0,0,0.5)', border: 'none', color: 'white', borderRadius: '4px' }} />
                            <span style={{ alignSelf: 'center', color: 'var(--muted)' }}>mins / reps</span>
                          </>
                        )}
                      </div>
                      <button 
                        onClick={() => handleCompleteSet(index, set, exercise.sets)}
                        disabled={isCompleted || isCompletedExercise}
                        style={{ 
                          padding: '8px', 
                          background: isCompleted ? 'green' : 'rgba(255,255,255,0.1)', 
                          borderRadius: '50%',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          cursor: (isCompleted || isCompletedExercise) ? 'default' : 'pointer'
                        }}
                      >
                        {isCompleted ? <Check size={20} /> : <Play size={20} />}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      <button onClick={handleFinishWorkout} className="btn-primary" style={{ width: '100%', padding: '15px', fontSize: '1.2rem', justifyContent: 'center' }}>
        FINISH WORKOUT
      </button>

    </div>
  );
};

export default Workout;
