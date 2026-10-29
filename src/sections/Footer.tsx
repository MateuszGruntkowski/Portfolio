import { ContactRows } from '../components/SocialLinks'
import { PROFILE } from '../data/profile'

export function Footer() {
  return (
    <footer id="contact" style={{ background: '#0E0F10', color: '#B9BBBC' }}>
      <div className="wrap" style={{ paddingTop: 88, paddingBottom: 32 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '48px 72px' }}>
          <div style={{ flex: '1 1 360px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: 22 }}>
            <div className="mono">// 07 · Contact</div>
            <h2 className="hd" style={{ fontSize: 'clamp(34px, 5vw, 60px)', lineHeight: 1.02, letterSpacing: '-0.02em' }}>
              Open to junior roles.
            </h2>
            <p className="body" style={{ fontSize: 19, color: '#D4D5D2' }}>
              Software Engineering, AI / ML Engineering and Full Stack.
            </p>
          </div>
          <div style={{ flex: '1 1 360px', minWidth: 0, display: 'flex', flexDirection: 'column', paddingTop: 6 }}>
            <ContactRows />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0 24px',
            marginTop: 80,
            paddingTop: 16,
            borderTop: '1px solid #2B2E31',
          }}
        >
          <span className="mono">
            {PROFILE.name} · {PROFILE.year}
          </span>
          <a className="plink" href="#top" style={{ fontSize: 13 }}>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}
