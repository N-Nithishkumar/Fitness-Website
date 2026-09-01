import { useState } from 'react';

const Calculators = () => {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(72);
  
  const bmi = (weight / ((height / 100) * (height / 100))).toFixed(1);
  
  let bmiCategory = 'Normal Weight';
  let bmiColor = '#4ade80'; // green
  if (Number(bmi) < 18.5) {
    bmiCategory = 'Underweight';
    bmiColor = '#fbbf24'; // yellow
  } else if (Number(bmi) > 25) {
    bmiCategory = 'Overweight';
    bmiColor = '#fbbf24';
  } else if (Number(bmi) > 30) {
    bmiCategory = 'Obese';
    bmiColor = '#ef4444'; // red
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Fitness Calculators</h1>
      
      <div className="glass-card" style={{ padding: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '2px solid var(--primary)', display: 'inline-block', paddingBottom: '0.5rem' }}>
          BMI Calculator
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--muted)' }}>Height (cm)</label>
              <input 
                type="number" 
                value={height} 
                onChange={(e) => setHeight(Number(e.target.value))}
                style={{ width: '100%', padding: '10px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--muted)' }}>Weight (kg)</label>
              <input 
                type="number" 
                value={weight} 
                onChange={(e) => setWeight(Number(e.target.value))}
                style={{ width: '100%', padding: '10px', background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }}
              />
            </div>
          </div>
          
          <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '12px' }}>
            <p style={{ color: 'var(--muted)', marginBottom: '0.5rem' }}>Your BMI</p>
            <h3 style={{ fontSize: '3.5rem', fontWeight: 'bold', color: bmiColor }}>{bmi}</h3>
            <p style={{ fontSize: '1.2rem', color: bmiColor, marginTop: '0.5rem' }}>{bmiCategory}</p>
          </div>
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', opacity: 0.5 }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>BMR Calculator</h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Calculate your Basal Metabolic Rate.</p>
          <button style={{ marginTop: '1rem', padding: '8px 16px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px' }}>Open</button>
        </div>
        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', opacity: 0.5 }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>TDEE Calculator</h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Calculate your Total Daily Energy Expenditure.</p>
          <button style={{ marginTop: '1rem', padding: '8px 16px', background: 'rgba(255,255,255,0.1)', borderRadius: '20px' }}>Open</button>
        </div>
      </div>
    </div>
  );
};

export default Calculators;
