import { useState } from 'react';
import { ShoppingCart, Heart, Search } from 'lucide-react';
import { useGlobalState } from '../context/GlobalState';

const getImg = (name: string) => import.meta.env.BASE_URL + 'picsss/' + name;

const products = [
  { id: 1, name: 'Whey Protein', price: 2499, category: 'Protein', image: getImg('wheyyy.gif') },
  { id: 2, name: 'Mass Gainer', price: 2999, category: 'Protein', image: getImg('mass gainer.gif') },
  { id: 3, name: 'Creatine Monohydrate', price: 1499, category: 'Pre-Workout', image: getImg('createmon.jpg') },
  { id: 4, name: 'Pre-Workout Energy', price: 2199, category: 'Pre-Workout', image: getImg('prework.jpg') },
  { id: 5, name: 'Multivitamin Tablets', price: 899, category: 'Vitamins', image: getImg('multivitamins.jpg') },
  { id: 6, name: 'Omega 3 Capsules', price: 1199, category: 'Vitamins', image: getImg('omega3.jpg') }
];

const Store = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const { cart, addToCart } = useGlobalState();

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const filteredProducts = products.filter(p => 
    (filter === 'All' || p.category === filter) && 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h1 style={{ fontSize: '2rem' }}>MAX Store</h1>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '10px', top: '10px', color: 'var(--muted)' }} />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                padding: '10px 10px 10px 35px',
                borderRadius: '8px',
                color: 'white',
                outline: 'none'
              }}
            />
          </div>
          <button style={{ position: 'relative' }}>
            <ShoppingCart size={24} />
            <span style={{ position: 'absolute', top: '-5px', right: '-10px', background: 'var(--primary)', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '10px' }}>{cartItemsCount}</span>
          </button>
        </div>
      </header>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', overflowX: 'auto', paddingBottom: '1rem' }}>
        {['All', 'Protein', 'Pre-Workout', 'Vitamins'].map(cat => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              background: filter === cat ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
              whiteSpace: 'nowrap',
              transition: 'background 0.3s'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
        {filteredProducts.map(product => (
          <div key={product.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
            <div style={{ height: '200px', background: '#fff', position: 'relative' }}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              <button style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.5)', padding: '8px', borderRadius: '50%', color: 'white' }}>
                <Heart size={18} />
              </button>
            </div>
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 'bold' }}>{product.category}</span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: 'auto' }}>{product.name}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>₹{product.price}</span>
                <button className="btn-primary" onClick={() => addToCart(product)} style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
