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
      case 'bulking': return { 
        cal: 3200, pro: 180, carb: 400, fat: 90,
        meals: {
          breakfast: { name: 'Peanut Butter Oats & 4 Whole Eggs', kcal: 650 },
          lunch: { name: 'Beef Mince, Rice & Avocado', kcal: 850 },
          pre: { natural: 'Banana & Honey Sandwich', supps: 'Pre-Workout & Rice Krispies', kcal: 250 },
          post: { natural: 'Chicken Breast & White Rice', supps: 'Mass Gainer Shake', kcal: 400 },
          dinner: { name: 'Salmon, Sweet Potato & Olive Oil', kcal: 1050 }
        }
      };
      case 'weight_loss': return { 
        cal: 1800, pro: 140, carb: 150, fat: 60,
        meals: {
          breakfast: { name: 'Egg Whites & Spinach Omelette', kcal: 300 },
          lunch: { name: 'Grilled Chicken Salad with Vinaigrette', kcal: 450 },
          pre: { natural: 'Black Coffee & Apple', supps: 'Fat Burner & BCAA', kcal: 100 },
          post: { natural: 'Tuna & Rice Cakes', supps: 'Whey Protein Isolate (Water)', kcal: 250 },
          dinner: { name: 'Lean Turkey & Roasted Zucchini', kcal: 700 }
        }
      };
      case 'cardio': return { 
        cal: 2400, pro: 120, carb: 320, fat: 70,
        meals: {
          breakfast: { name: 'Oatmeal with Berries & Honey', kcal: 450 },
          lunch: { name: 'Whole Wheat Pasta & Turkey Meatballs', kcal: 600 },
          pre: { natural: 'Dates & Beetroot Juice', supps: 'Electrolytes & Energy Gel', kcal: 150 },
          post: { natural: 'Chocolate Milk & Banana', supps: 'Recovery Carb-Protein Mix', kcal: 350 },
          dinner: { name: 'Quinoa, Tofu & Mixed Greens', kcal: 850 }
        }
      };
      case 'strength': return { 
        cal: 2800, pro: 170, carb: 300, fat: 85,
        meals: {
          breakfast: { name: 'Steak & Eggs with Sourdough Toast', kcal: 750 },
          lunch: { name: 'Chicken Thighs & Roasted Potatoes', kcal: 700 },
          pre: { natural: 'Oatmeal & Black Coffee', supps: 'High-Stim Pre-Workout & Carbs', kcal: 200 },
          post: { natural: 'Lean Beef Patties & Rice', supps: 'Whey Isolate & Dextrose', kcal: 350 },
          dinner: { name: 'Pork Chops, Asparagus & Butter', kcal: 800 }
        }
      };
      default: return { 
        cal: 2200, pro: 130, carb: 250, fat: 75,
        meals: {
          breakfast: { name: 'Scrambled Eggs & Toast', kcal: 450 },
          lunch: { name: 'Chicken Breast, Rice & Broccoli', kcal: 550 },
          pre: { natural: 'Black Coffee & Banana', supps: 'Pre-Workout Scoop & Banana', kcal: 150 },
          post: { natural: 'Greek Yogurt & Almonds', supps: '1 Scoop Whey Protein', kcal: 250 },
          dinner: { name: 'Grilled Fish & Salad', kcal: 800 }
        }
      };
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
            <p style={{ color: 'var(--muted)', marginTop: '0.3rem' }}>{macros.meals.breakfast.name}</p>
          </div>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{macros.meals.breakfast.kcal} kcal</span>
        </div>
        
        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>☀️ Lunch</h3>
            <p style={{ color: 'var(--muted)', marginTop: '0.3rem' }}>{macros.meals.lunch.name}</p>
          </div>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{macros.meals.lunch.kcal} kcal</span>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>🏋️ Pre Workout</h3>
            <p style={{ color: 'var(--muted)', marginTop: '0.3rem' }}>
              {dietType === 'supplements' ? macros.meals.pre.supps : macros.meals.pre.natural}
            </p>
          </div>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{macros.meals.pre.kcal} kcal</span>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>💪 Post Workout</h3>
            <p style={{ color: 'var(--muted)', marginTop: '0.3rem' }}>
              {dietType === 'supplements' ? macros.meals.post.supps : macros.meals.post.natural}
            </p>
          </div>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{macros.meals.post.kcal} kcal</span>
        </div>

        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>🌙 Dinner</h3>
            <p style={{ color: 'var(--muted)', marginTop: '0.3rem' }}>{macros.meals.dinner.name}</p>
          </div>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{macros.meals.dinner.kcal} kcal</span>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
