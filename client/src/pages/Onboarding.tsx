import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGlobalState, type FitnessGoal } from '../context/GlobalState';
import { Dumbbell, Flame, Activity, ChevronRight } from 'lucide-react';

const Onboarding = () => {
  const { updateProfile } = useGlobalState();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState<FitnessGoal | null>(null);

  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [experience, setExperience] = useState('Intermediate');
  const [analysisText, setAnalysisText] = useState('');

  const handleNext = () => {
    if (step === 1 && !selectedGoal) return;
    if (step === 2 && (!age || !weight)) return;
    
    if (step === 2) {
      setStep(3);
      startAnalysis();
    } else {
      setStep(step + 1);
    }
  };

  const startAnalysis = () => {
    const steps = [
      "✓ Understanding your goal...",
      "✓ Calculating calorie requirements...",
      "✓ Planning your workouts...",
      "✓ Organizing your nutrition...",
      "✓ Preparing your progress targets..."
    ];
    
    let currentStep = 0;
    const interval = setInterval(() => {
      setAnalysisText(steps.slice(0, currentStep + 1).join('\n'));
      currentStep++;
      if (currentStep === steps.length) {
        clearInterval(interval);
        setTimeout(() => {
          updateProfile({
            goal: selectedGoal,
            stats: { age: Number(age), weight: Number(weight), experience }
          });
          navigate('/dashboard');
        }, 1500);
      }
    }, 800);
  };

  return (
    <div style={{ minHeight: '100vh', padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="glass-card" style={{ width: '100%', maxWidth: '800px', padding: '3rem', minHeight: '500px', display: 'flex', flexDirection: 'column' }}>
        
        {step === 1 && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>WHAT IS YOUR MAIN FITNESS GOAL?</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', flex: 1 }}>
              
              <div 
                onClick={() => setSelectedGoal('bulking')}
                style={{ padding: '1.5rem', border: selectedGoal === 'bulking' ? '2px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', cursor: 'pointer', background: selectedGoal === 'bulking' ? 'rgba(255,60,0,0.1)' : 'rgba(0,0,0,0.3)', transition: '0.3s' }}
              >
                <Dumbbell color="var(--primary)" size={32} style={{ marginBottom: '1rem' }} />
                <h3>BULKING</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Build muscle, increase strength and gain healthy body mass.</p>
              </div>

              <div 
                onClick={() => setSelectedGoal('weight_loss')}
                style={{ padding: '1.5rem', border: selectedGoal === 'weight_loss' ? '2px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', cursor: 'pointer', background: selectedGoal === 'weight_loss' ? 'rgba(255,60,0,0.1)' : 'rgba(0,0,0,0.3)', transition: '0.3s' }}
              >
                <Flame color="var(--primary)" size={32} style={{ marginBottom: '1rem' }} />
                <h3>WEIGHT LOSS</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Reduce body fat while maintaining muscle and improving fitness.</p>
              </div>

              <div 
                onClick={() => setSelectedGoal('cardio')}
                style={{ padding: '1.5rem', border: selectedGoal === 'cardio' ? '2px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', cursor: 'pointer', background: selectedGoal === 'cardio' ? 'rgba(255,60,0,0.1)' : 'rgba(0,0,0,0.3)', transition: '0.3s' }}
              >
                <Activity color="var(--primary)" size={32} style={{ marginBottom: '1rem' }} />
                <h3>CARDIO & ENDURANCE</h3>
                <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Improve stamina, cardiovascular fitness and overall endurance.</p>
              </div>

            </div>
            
            <button 
              onClick={handleNext}
              disabled={!selectedGoal}
              className="btn-primary" 
              style={{ padding: '15px 30px', alignSelf: 'center', marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: selectedGoal ? 1 : 0.5 }}
            >
              CONTINUE <ChevronRight />
            </button>
          </div>
        )}

        {step === 2 && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>ABOUT YOU</h1>
            
            <div style={{ maxWidth: '400px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', color: 'var(--muted)', marginBottom: '0.5rem' }}>Age</label>
                <input 
                  type="number" value={age} onChange={e => setAge(e.target.value)}
                  style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', color: 'var(--muted)', marginBottom: '0.5rem' }}>Current Weight (kg)</label>
                <input 
                  type="number" value={weight} onChange={e => setWeight(e.target.value)}
                  style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', color: 'var(--muted)', marginBottom: '0.5rem' }}>Fitness Experience</label>
                <select 
                  value={experience} onChange={e => setExperience(e.target.value)}
                  style={{ width: '100%', padding: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }}
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
            </div>

            <button 
              onClick={handleNext}
              disabled={!age || !weight}
              className="btn-primary" 
              style={{ padding: '15px 30px', alignSelf: 'center', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: (age && weight) ? 1 : 0.5 }}
            >
              CREATE MY PLAN <ChevronRight />
            </button>
          </div>
        )}

        {step === 3 && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '2rem', color: 'var(--primary)' }}>ANALYZING YOUR FITNESS PROFILE...</h1>
            <pre style={{ color: '#4ade80', fontSize: '1.2rem', lineHeight: '2', whiteSpace: 'pre-wrap', textAlign: 'left', minHeight: '200px' }}>
              {analysisText}
            </pre>
            {analysisText.includes("targets") && (
              <h2 style={{ fontSize: '2rem', marginTop: '2rem', animation: 'pulse 2s infinite' }}>YOUR MAX PLAN IS READY</h2>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default Onboarding;
