import { useRef, useState } from "react";
import "./App.css";

function App() {
  const musicRef = useRef(null);

  const [isOpened, setIsOpened] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const openInvitation = () => {
    setIsOpened(true);

    if (musicRef.current) {
      musicRef.current.volume = 0.8;

      musicRef.current
        .play()
        .then(() => {
          setIsMusicPlaying(true);
        })
        .catch((error) => {
          console.log("Music could not start:", error);
        });
    }
  };

  const toggleMusic = () => {
    if (!musicRef.current) return;

    if (isMusicPlaying) {
      musicRef.current.pause();
      setIsMusicPlaying(false);
    } else {
      musicRef.current
        .play()
        .then(() => {
          setIsMusicPlaying(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className={`invitation ${isOpened ? "opened" : ""}`}>

      {/* ================= MUSIC ================= */}

      <audio
        ref={musicRef}
        src={`${import.meta.env.BASE_URL}music/music.mpeg`}
        loop
      />

      {/* ================= OPENING ================= */}

      <section className="opening-screen">

        <div
          className="envelope-opening"
          onClick={openInvitation}
        >

          <img
          src={`${import.meta.env.BASE_URL}images/kart.jfif`}
            alt="دعوة الزفاف"
            className="envelope-image"
          />

          <div className="opening-hint">
            <span>✦</span>
            <p>اضغط لفتح الدعوة</p>
            <span>✦</span>
          </div>

        </div>

      </section>


      {/* ================= MAIN INVITATION ================= */}

      <main className="main-invitation">

        {/* HERO */}

        <section className="hero">

          <div className="hero-overlay"></div>

          <div className="hero-light"></div>

          <div className="hero-content">

            <div className="hero-ornament">
              ✦
            </div>

            <p className="hero-small">
              WEDDING INVITATION
            </p>

            <h1 className="hero-names">
              هبة
              <span>&</span>
              محمد
            </h1>

            <div className="gold-line"></div>

            <p className="hero-date">
              20 JUNE 2027
            </p>

            <p className="hero-time">
              7:00 PM
            </p>

            <p className="hero-message">
              يسعدنا أن تشاركونا أجمل لحظاتنا
            </p>

          </div>

          <div className="hero-scroll">
            <span>SCROLL</span>
            <i></i>
          </div>

        </section>


        {/* MUSIC BUTTON */}

        <button
          className={`music-button ${
            isMusicPlaying ? "playing" : ""
          }`}
          onClick={toggleMusic}
          aria-label="تشغيل أو إيقاف الموسيقى"
        >
          {isMusicPlaying ? "♫" : "♪"}
        </button>


        {/* STORY */}

        <section
          id="details"
          className="story-section"
        >

          <div className="section-decoration">
            <span></span>
            ✦
            <span></span>
          </div>

          <p className="section-label">
            OUR STORY
          </p>

          <h2>
            قصتنا
          </h2>

          <div className="small-gold-line"></div>

          <div className="story-image-wrapper">

            <div className="image-frame"></div>

            <img
              src={`${import.meta.env.BASE_URL}images/wedding2.jfif`}
              alt="العروسين"
              className="couple-image"
            />

          </div>

          <p className="story-text">
            حكاية بدأت بلقاء جميل،
            وكبرت مع الأيام حتى أصبحت
            وعدًا بأن نبقى معًا إلى الأبد.
          </p>

        </section>


        {/* DETAILS */}

        <section className="details-section">

          <div className="section-decoration">
            <span></span>
            ✦
            <span></span>
          </div>

          <p className="section-label">
            THE WEDDING DAY
          </p>

          <h2>
            تفاصيل يومنا
          </h2>

          <div className="details-list">

            <div className="detail-item">

              <div className="detail-icon">
                ♡
              </div>

              <span>
                التاريخ
              </span>

              <strong>
                20
              </strong>

              <p>
                يونيو 2027
              </p>

            </div>


            <div className="detail-item">

              <div className="detail-icon">
                ◷
              </div>

              <span>
                الوقت
              </span>

              <strong>
                7:00
              </strong>

              <p>
                مساءً
              </p>

            </div>


            <div className="detail-item">

              <div className="detail-icon">
                ✦
              </div>

              <span>
                المكان
              </span>

              <strong className="venue-symbol">
                ♡
              </strong>

              <p>
                قاعة الزفاف
              </p>

            </div>

          </div>

        </section>


        {/* QUOTE */}

        <section className="quote-section">

          <div className="quote-ornament">
            ✦
          </div>

          <p>
            "ومن آياته أن خلق لكم
            <br />
            من أنفسكم أزواجًا
            <br />
            لتسكنوا إليها"
          </p>

          <div className="small-gold-line"></div>

        </section>


        {/* FINAL */}

        <section className="final-section">

          <div className="final-glow"></div>

          <div className="final-content">

            <div className="final-ornament">
              ✦
            </div>

            <p className="section-label">
              WITH LOVE
            </p>

            <h2>
              ننتظركم
            </h2>

            <p className="final-text">
              وجودكم معنا يجعل فرحتنا
              <br />
              أجمل وأكمل
            </p>

            <div className="final-line"></div>

            <div className="final-names">
              هبة
              <span>&</span>
              محمد
            </div>

            <p className="final-date">
              20 · 06 · 2027
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;