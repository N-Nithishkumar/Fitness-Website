import { useState } from 'react';
import { Send, Bot, User } from 'lucide-react';

const MaxAI = () => {
  const [messages, setMessages] = useState<{role: 'user'|'ai', text: string}[]>([
    { role: 'ai', text: "Hi! I'm MAX AI. Ask me anything about your fitness, nutrition, or workout plans." }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    const newMessages = [...messages, { role: 'user' as const, text: input }];
    setMessages(newMessages);
    setInput('');
    
    // Mock AI response
    setTimeout(() => {
      setMessages([...newMessages, { 
        role: 'ai', 
        text: "Here's a personalized suggestion based on your goals: Since you're focusing on muscle gain (Bulking), I recommend a 4-day Upper/Lower split and ensuring you hit 165g of protein daily." 
      }]);
    }, 1000);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', height: 'calc(100vh - 100px)', display: 'flex', flexDirection: 'column' }}>
      <header style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
          <Bot color="var(--primary)" size={32} /> MAX AI
        </h1>
        <p style={{ color: 'var(--muted)' }}>Your Personal Fitness Assistant</p>
      </header>

      <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {messages.map((msg, idx) => (
            <div key={idx} style={{ 
              display: 'flex', 
              gap: '1rem',
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
              maxWidth: '80%'
            }}>
              <div style={{ 
                width: '36px', height: '36px', borderRadius: '50%', 
                background: msg.role === 'user' ? 'rgba(255,255,255,0.1)' : 'rgba(255, 60, 0, 0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: msg.role === 'user' ? 'white' : 'var(--primary)'
              }}>
                {msg.role === 'user' ? <User size={20} /> : <Bot size={20} />}
              </div>
              <div style={{ 
                background: msg.role === 'user' ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                padding: '1rem',
                borderRadius: '12px',
                borderTopRightRadius: msg.role === 'user' ? 0 : '12px',
                borderTopLeftRadius: msg.role === 'ai' ? 0 : '12px',
                lineHeight: 1.5
              }}>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: '1rem', background: 'rgba(0,0,0,0.3)' }}>
          <input 
            type="text" 
            placeholder="Ask me how to gain muscle..." 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            style={{ 
              flex: 1, padding: '12px 20px', 
              background: 'rgba(255,255,255,0.05)', 
              border: '1px solid rgba(255,255,255,0.1)', 
              color: 'white', borderRadius: '24px', outline: 'none' 
            }}
          />
          <button 
            onClick={handleSend}
            style={{ 
              width: '46px', height: '46px', borderRadius: '50%', 
              background: 'var(--primary)', color: 'white',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
          >
            <Send size={20} style={{ marginLeft: '-2px' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MaxAI;
