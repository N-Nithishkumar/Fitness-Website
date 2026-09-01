import { createContext, useContext, useState, type ReactNode } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
};

type CartItem = Product & { quantity: number };

export type FitnessGoal = 'bulking' | 'weight_loss' | 'cardio' | 'strength' | 'general' | null;

export interface UserProfile {
  goal: FitnessGoal;
  stats: {
    age?: number;
    weight?: number;
    height?: number;
    experience?: string;
  };
  xp: number;
  level: number;
  streak: number;
}

interface GlobalStateContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  userProfile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
  addXp: (amount: number) => void;
}

const GlobalStateContext = createContext<GlobalStateContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    goal: null,
    stats: {},
    xp: 0,
    level: 1,
    streak: 0
  });

  const updateProfile = (updates: Partial<UserProfile>) => {
    setUserProfile(prev => ({ ...prev, ...updates }));
  };

  const addXp = (amount: number) => {
    setUserProfile(prev => {
      const newXp = prev.xp + amount;
      const newLevel = Math.floor(newXp / 1000) + 1;
      return { ...prev, xp: newXp, level: newLevel };
    });
  };

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };

  return (
    <GlobalStateContext.Provider value={{ cart, addToCart, removeFromCart, userProfile, updateProfile, addXp }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalProvider');
  }
  return context;
};
