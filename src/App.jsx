
import { useState } from 'react';
import './App.css';

const stories = [
  { title: 'เสียงเรียกจากห้องหมายเลข 404', category: 'เรื่องเล่าจากประสบการณ์', time: '12 นาที', tag: 'ยอดนิยม', image: 'room' },
  { title: 'บ้านหลังสุดท้ายในหมู่บ้าน', category: 'เรื่องผีไทย', time: '8 นาที', tag: 'เรื่องใหม่', image: 'house' },
  { title: 'เงาที่เดินตามในคืนฝนตก', category: 'เรื่องลึกลับ', time: '15 นาที', tag: 'ยอดนิยม', image: 'rain' },
];

function App() {
  const [search, setSearch] = useState('');

  const filtered = stories.filter(story =>
    story.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="navbar">
        <a className="logo" href="#">
          MOOD <span>PHEE.</span>
        </a>
        <nav>
          <a href="#home">หน้าแรก</a>
          <a href="#popular">เรื่องยอดนิยม</a>
          <a href="#latest">เรื่องล่าสุด</a>
          <a href="#categories">หมวดหมู่</a>
        </nav>
        <button className="login-btn">เข้าสู่ระบบ</button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">✦ THE WORLD OF DARKNESS ✦</div>
            <h1>
              เรื่องเล่า<br />
              จาก<span>ความมืด</span>
            </h1>
            <p>
              บางเรื่องอาจเป็นเพียงตำนาน<br />
              แต่บางเรื่อง...อาจเกิดขึ้นจริงกับใครบางคน
            </p>
            <a href="#popular" className="main-btn">
              เริ่มอ่านเรื่องผี <span>→</span>
            </a>
            <div className="hero-status">
              <span className="live-dot"></span>
              THE NIGHT IS STILL ALIVE
            </div>
          </div>
          <div className="hero-number">01 / 13</div>
        </section>

        <section className="stats">
          <div><strong>∞</strong><span>เรื่องราวไร้ขีดจำกัด</span></div>
          <div><strong>24/7</strong><span>เปิดประตูสู่ความหลอน</span></div>
          <div><strong>TH</strong><span>ชุมชนเรื่องผีจากทั่วไทย</span></div>
        </section>

        <section className="content-section" id="popular">
          <div className="section-heading">
            <div>
              <span className="section-label">DISCOVER THE UNKNOWN</span>
              <h2>เรื่องเล่า<span>ยอดนิยม</span></h2>
              <p>เรื่องราวที่ทำให้หลายคนต้องนอนไม่หลับ</p>
            </div>
            <a href="#latest" className="view-all">ดูเรื่องทั้งหมด →</a>
          </div>

          <div className="story-grid">
            {stories.map((story, index) => (
              <article className="story-card" key={story.title}>
                <div className={`story-image ${story.image}`}>
                  <span className="story-tag">{story.tag}</span>
                  <span className="story-index">0{index + 1}</span>
                </div>
                <div className="story-info">
                  <span>{story.category}</span>
                  <h3>{story.title}</h3>
                  <div className="story-meta">
                    <span>◷ {story.time}</span>
                    <a href="#latest">อ่านเรื่อง →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section latest" id="latest">
          <div className="section-heading">
            <div>
              <span className="section-label">FRESH FROM THE DARK</span>
              <h2>ค้นหา<span>เรื่องหลอน</span></h2>
              <p>ค้นพบเรื่องราวที่คุณอาจไม่เคยได้ยิน</p>
            </div>
          </div>
          <input
            className="search-box"
            placeholder="ค้นหาชื่อเรื่องที่คุณอยากอ่าน..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <div className="search-results">
            {filtered.map(story => (
              <div className="search-item" key={story.title}>
                <span>☠</span>
                <div><h3>{story.title}</h3><p>{story.category}</p></div>
                <span>→</span>
              </div>
            ))}
            {filtered.length === 0 && <p>ไม่พบเรื่องที่ค้นหา...</p>}
          </div>
        </section>

        <section className="categories" id="categories">
          <span className="section-label">CHOOSE YOUR NIGHTMARE</span>
          <h2>คุณกลัว<span>อะไรที่สุด?</span></h2>
          <div className="category-grid">
            <div>👻<h3>ผีไทย</h3><p>ตำนานและความเชื่อ</p></div>
            <div>🏚️<h3>สถานที่หลอน</h3><p>เรื่องราวจากสถานที่จริง</p></div>
            <div>🌑<h3>เรื่องเหนือธรรมชาติ</h3><p>สิ่งที่วิทยาศาสตร์อธิบายไม่ได้</p></div>
            <div>📖<h3>ประสบการณ์จริง</h3><p>เรื่องเล่าจากผู้พบเจอ</p></div>
          </div>
        </section>

        <section className="share-section">
          <span>YOUR STORY MATTERS</span>
          <h2>คุณมีเรื่องหลอน<br />อยากเล่าให้เราฟังไหม?</h2>
          <p>ทุกเรื่องราวมีคุณค่า แม้แต่เรื่องที่ไม่มีใครกล้าพูดถึง</p>
          <button onClick={() => alert('ระบบส่งเรื่องจะเปิดให้บริการเร็ว ๆ นี้')}>
            แบ่งปันเรื่องราวของคุณ +
          </button>
        </section>
      </main>

      <footer>
        <a className="logo" href="#">MOOD <span>PHEE.</span></a>
        <p>เรื่องเล่าจากความมืด...ที่คุณอาจไม่มีวันลืม</p>
        <small>© 2026 MOOD PHEE. ALL RIGHTS RESERVED.</small>
      </footer>
    </div>
  );
}

export default App;
