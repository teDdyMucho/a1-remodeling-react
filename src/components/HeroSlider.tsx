const SLIDES = [
  '/Slide/img_1.avif',
  '/Slide/img_3.avif',
  '/Slide/img_5.avif',
  '/Slide/img_6.avif',
  '/Slide/img_7.avif',
  '/Slide/img_8.avif',
  '/Slide/img_9.avif',
  '/Slide/img_11.avif',
  '/Slide/img_13.avif',
  '/Slide/img_15.avif',
  '/Slide/img_18.avif',
]

export default function HeroSlider() {
  // Duplicate for seamless loop
  const track = [...SLIDES, ...SLIDES]

  return (
    <section style={{ paddingTop: '64px' }}>
      {/* Big heading */}
      <div style={{ padding: '40px 32px 32px', textAlign: 'left' }}>
        <h1 style={{
          fontFamily: "'HelveticaNeue-CondensedBlack', 'Helvetica Neue', Helvetica, Arial, sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(2.5rem, 8vw, 6rem)',
          letterSpacing: '0.05em',
          lineHeight: 1,
          color: '#111',
          textTransform: 'uppercase',
          margin: 0,
        }}>
          A1 Home Remodeling Inc
        </h1>
      </div>

      {/* Sliding strip */}
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            gap: '12px',
            width: 'max-content',
            animation: 'slide-left 60s linear infinite',
          }}
        >
          {track.map((src, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: '480px',
                height: '320px',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <img
                src={src}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes slide-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
