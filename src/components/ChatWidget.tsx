import { useState, useRef, useEffect } from 'react';
import './ChatWidget.css';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  time: string;
}

const RESPONSES: { keywords: string[]; reply: string }[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'howdy'],
    reply: "Hello! Welcome to A1 Home Remodeling. I can help you with questions about our services, pricing, or scheduling a free estimate. What can I help you with today?",
  },
  {
    keywords: ['price', 'cost', 'how much', 'pricing', 'quote', 'estimate', 'free estimate', 'budget'],
    reply: "We offer completely FREE in-home estimates with no obligation. Project costs vary depending on scope and materials — a kitchen remodel can range from partial updates to a full renovation. Would you like to schedule your free consultation?",
  },
  {
    keywords: ['kitchen'],
    reply: "Our kitchen remodels cover everything — custom cabinetry, countertops, tile backsplash, lighting, flooring, and full layout redesigns. We handle all permits and inspections. Want to book a free kitchen consultation?",
  },
  {
    keywords: ['bathroom', 'bath', 'shower', 'vanity'],
    reply: "We do complete bathroom renovations: custom tile showers, vanities, soaking tubs, flooring, and lighting. We pull all necessary permits and meet LA County codes. Ready to transform your bathroom?",
  },
  {
    keywords: ['adu', 'garage conversion', 'addition', 'accessory dwelling unit', 'granny flat'],
    reply: "ADUs are one of the best investments you can make in California! We handle full ADU construction and garage conversions — including architectural plans, permits, foundation, framing, plumbing, and electrical. Shall I connect you with our ADU specialist?",
  },
  {
    keywords: ['roof', 'roofing', 'shingle', 'tile roof'],
    reply: "Our Heat Reflecting Roofing carries a 30-year warranty and can lower your cooling costs significantly. We use certified materials and handle all city inspections. Want a free roofing assessment?",
  },
  {
    keywords: ['window', 'windows', 'sliding door', 'glass'],
    reply: "Our High Performance Windows come with a Lifetime Warranty. They reduce heat gain, block UV rays, and cut noise. Energy Star certified. We install all major brands. Want a free window quote?",
  },
  {
    keywords: ['paint', 'painting', 'exterior', 'coating', 'stucco', 'siding'],
    reply: "Our Weather Defense Exterior Coating is a Lifetime Warranteed product — it protects against moisture, UV, and weather damage while giving your home a fresh, polished look. Very popular in the LA climate!",
  },
  {
    keywords: ['full home', 'whole house', 'complete remodel', 'gut', 'renovation'],
    reply: "We specialize in full home remodels — from concept to completion. We can handle every trade: demo, framing, electrical, plumbing, tile, drywall, cabinets, flooring, and paint. One contractor, no headaches.",
  },
  {
    keywords: ['contact', 'phone', 'call', 'number', 'reach', 'talk to someone'],
    reply: "You can reach us directly at:\n\n424-345-2274\n855-247-1019\n\nOr schedule online through our contact page — we'll call you back within a few hours!",
  },
  {
    keywords: ['location', 'address', 'where', 'area', 'serve', 'los angeles', 'culver city', 'la'],
    reply: "We're based in Culver City and serve the greater Los Angeles area — including Santa Monica, Venice, West LA, Inglewood, Hawthorne, Torrance, and beyond. Give us a call to confirm your area!",
  },
  {
    keywords: ['license', 'licensed', 'bonded', 'insured', 'cslb', 'credentials'],
    reply: "Yes — we are fully Licensed (CSLB #1059945), Bonded, and Insured. We've operated in compliance with California building codes since 2002. You can verify our license at cslb.ca.gov.",
  },
  {
    keywords: ['warranty', 'guarantee', 'guaranteed'],
    reply: "We stand behind every project:\n• Weather Defense Coating — Lifetime Warranty\n• High Performance Windows — Lifetime Warranty\n• Heat Reflecting Roofing — 30-Year Warranty\n\nAll work meets California building codes and passes city inspection.",
  },
  {
    keywords: ['appointment', 'schedule', 'book', 'consultation', 'visit', 'meeting', 'come out'],
    reply: "Booking is easy! Click 'CONTACT' in the menu to fill out our appointment form, or call us at 424-345-2274. We offer flexible scheduling including evenings and Saturdays.",
  },
  {
    keywords: ['experience', 'years', 'since', 'how long', 'established'],
    reply: "A1 Home Remodeling has been serving Los Angeles since 2002 — that's over 21 years of experience. We've completed hundreds of kitchen, bathroom, ADU, and full home projects across the region.",
  },
  {
    keywords: ['green', 'eco', 'energy', 'environment', 'sustainable', 'efficient'],
    reply: "We specialize in eco-friendly home improvements! Our green product line — energy-efficient windows, heat-reflecting roofing, and weather defense coatings — is designed to lower utility bills and reduce your carbon footprint.",
  },
  {
    keywords: ['permit', 'permits', 'inspection', 'city', 'code', 'building code'],
    reply: "We handle ALL permits and city inspections. Every project we complete is fully code-compliant with LA County and Culver City building departments. No shortcuts — ever.",
  },
  {
    keywords: ['timeline', 'how long', 'duration', 'weeks', 'months'],
    reply: "Project timelines vary by scope. A bathroom remodel typically takes 2–4 weeks, a kitchen 4–8 weeks, and a full home remodel 3–6 months. We'll give you a clear schedule during your free consultation.",
  },
];

const DEFAULT =
  "Great question! For the most accurate answer, please call us at 424-345-2274 or schedule a free in-home consultation. We're happy to walk through your project in person.";

function getReply(input: string): string {
  const lower = input.toLowerCase();
  for (const { keywords, reply } of RESPONSES) {
    if (keywords.some((k) => lower.includes(k))) return reply;
  }
  return DEFAULT;
}

function nowTime() {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hi! I'm your A1 Home Remodeling assistant. Ask me about our services, pricing, scheduling, or anything about your project — I'm here to help!",
      sender: 'bot',
      time: nowTime(),
    },
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250);
  }, [open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { id: Date.now(), text, sender: 'user', time: nowTime() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      const reply = getReply(text);
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, text: reply, sender: 'bot', time: nowTime() },
      ]);
    }, 800 + Math.random() * 700);
  };

  return (
    <>
      {/* ── Chat Panel ── */}
      <div className={`cw-panel ${open ? 'cw-open' : ''}`}>
        <div className="cw-header">
          <div className="cw-avatar">A1</div>
          <div className="cw-header-info">
            <div className="cw-name">A1 Assistant</div>
            <div className="cw-status">
              <span className="cw-status-dot"></span> Online
            </div>
          </div>
          <button className="cw-close-btn" onClick={() => setOpen(false)} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="cw-body">
          {messages.map((m) => (
            <div key={m.id} className={`cw-row ${m.sender === 'user' ? 'cw-row-user' : 'cw-row-bot'}`}>
              {m.sender === 'bot' && <div className="cw-bot-avatar">A1</div>}
              <div className="cw-bubble-wrap">
                <div className="cw-bubble">{m.text}</div>
                <div className="cw-time">{m.time}</div>
              </div>
            </div>
          ))}
          {typing && (
            <div className="cw-row cw-row-bot">
              <div className="cw-bot-avatar">A1</div>
              <div className="cw-bubble-wrap">
                <div className="cw-bubble cw-typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="cw-quick-replies">
          {['Free estimate', 'Kitchen', 'Bathroom', 'ADU', 'Contact'].map((q) => (
            <button key={q} className="cw-quick" onClick={() => { setInput(q); }}>
              {q}
            </button>
          ))}
        </div>

        <div className="cw-footer">
          <input
            ref={inputRef}
            className="cw-input"
            placeholder="Ask me anything…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
          />
          <button className="cw-send" onClick={send} aria-label="Send">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Toggle Button ── */}
      <button
        className={`cw-toggle ${open ? 'cw-toggle-active' : ''}`}
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        <span className="cw-toggle-icon cw-icon-chat">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </span>
        <span className="cw-toggle-icon cw-icon-close">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </span>
        {!open && <span className="cw-badge">1</span>}
      </button>
    </>
  );
}
