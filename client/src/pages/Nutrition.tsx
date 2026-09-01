import { useState } from 'react';
import { Droplets, Plus, Leaf, Beaker } from 'lucide-react';
import { useGlobalState } from '../context/GlobalState';

const Nutrition = () => {
  const { userProfile, addXp } = useGlobalState();
  const goal = userProfile.goal || 'general';
  const [water, setWater] = useState(1.8);
  const [dietType, setDietType] = useState<'natural' | 'supplements'>('natural');

  const getNutritionData = () => {
    switch (goal) {
      case 'bulking': return { cal: 3200, pro: 180, carb: 400, fat: 90 };
      case 'weight_loss': return { cal: 1800, pro: 140, carb: 150, fat: 60 };
      case 'cardio': return { cal: 2400, pro: 120, carb: 320, fat: 70 };
      case 'strength': return { cal: 2800, pro: 170, carb: 300, fat: 85 };
      default: return { cal: 2200, pro: 130, carb: 250, fat: 75 };
    }
  };

  const macros = getNutritionData();

  const handleDrinkWater = (amount: number) => {
    setWater(w => Math.min(w + amount, 3));
    addXp(5);
  };
  
  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Nutrition & Diet</h1>
      
      <div className="glass-card" style={{ padding: '2rem', marginBottom: '3rem', display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        <div style={{ flex: 1, minWidth: '250px' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>YOUR DAILY TARGET</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <p style={{ color: 'var(--muted)' }}>Calories</p>
              <h3 style={{ fontSize: '1.5rem' }}>{macros.cal} kcal</h3>
            </div>
            <div>
              <p style={{ color: 'var(--muted)' }}>Protein</p>
              <h3 style={{ fontSize: '1.5rem' }}>{macros.pro} g</h3>
            </div>
            <div>
              <p style={{ color: 'var(--muted)' }}>Carbs</p>
              <h3 style={{ fontSize: '1.5rem' }}>{macros.carb} g</h3>
            </div>
            <div>
              <p style={{ color: 'var(--muted)' }}>Fats</p>
              <h3 style={{ fontSize: '1.5rem' }}>{macros.fat} g</h3>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, minWidth: '250px', background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Droplets color="#3b82f6" /> Daily Hydration
          </h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span>{water.toFixed(1)} L</span>
            <span style={{ color: 'var(--muted)' }}>3.0 L</span>
          </div>
          <div style={{ width: '100%', height: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '5px', overflow: 'hidden', marginBottom: '1.5rem' }}>
            <div style={{ width: `${(water / 3) * 100}%`, height: '100%', background: '#3b82f6', transition: 'width 0.3s' }}></div>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button 
              onClick={() => handleDrinkWater(0.25)}
              style={{ flex: 1, padding: '10px', background: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6', borderRadius: '8px', display: 'flex', justifyContent: 'center', gap: '5px' }}
            >
              <Plus size={18} /> 250ml
            </button>
            <button 
              onClick={() => handleDrinkWater(0.5)}
              style={{ flex: 1, padding: '10px', background: '#3b82f6', color: 'white', borderRadius: '8px', display: 'flex', justifyContent: 'center', gap: '5px' }}
            >
              <Plus size={18} /> 500ml
            </button>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h2 style={{ fontSize: '1.8rem', borderBottom: '2px solid var(--primary)', paddingBottom: '0.5rem' }}>
          Meal Plan
        </h2>
        <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '24px', padding: '4px' }}>
          <button 
            onClick={() => setDietType('natural')}
            style={{ padding: '8px 16px', borderRadius: '20px', background: dietType === 'natural' ? 'var(--primary)' : 'transparent', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Leaf size={16} /> Natural
          </button>
          <button 
            onClick={() => setDietType('supplements')}
            style={{ padding: '8px 16px', borderRadius: '20px', background: dietType === 'supplements' ? 'var(--primary)' : 'transparent', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <Beaker size={16} /> Supplements
          </button>
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>🌅 Breakfast</h3>
            <p style={{ color: 'var(--muted)', marginTop: '0.3rem' }}>Oats + Banana + Eggs</p>
          </div>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>520 kcal</span>
        </div>
        
        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>☀️ Lunch</h3>
            <p style={{ color: 'var(--muted)', marginTop: '0.3rem' }}>Rice + Chicken + Vegetables</p>
          </div>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>680 kcal</span>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>🏋️ Pre Workout</h3>
            <p style={{ color: 'var(--muted)', marginTop: '0.3rem' }}>
              {dietType === 'supplements' ? 'Pre-Workout Scoop + Banana' : 'Black Coffee + Banana'}
            </p>
          </div>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>180 kcal</span>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>💪 Post Workout</h3>
            <p style={{ color: 'var(--muted)', marginTop: '0.3rem' }}>
              {dietType === 'supplements' ? '1 Scoop Whey Protein' : '5 Egg Whites + Apple'}
            </p>
          </div>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>140 kcal</span>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>🌙 Dinner</h3>
            <p style={{ color: 'var(--muted)', marginTop: '0.3rem' }}>Chicken + Roti + Salad</p>
          </div>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>620 kcal</span>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
