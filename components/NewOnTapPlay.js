export default function NewOnTapPlay() {
  const tracks = [
    { title: "Concrete Poetry", artist: "K. Maddox", type: "Album", img: "/1.png" },
    { title: "Afterglow", artist: "Iris Chen", type: "Single", img: "/2.png" },
    { title: "Pulse", artist: "Beat Collective", type: "EP", img: "/3.png" },
    { title: "Uprising", artist: "Neon Circuit", type: "Album", img: "/4.png" },
    { title: "Analog Heart", artist: "The Originals", type: "Album", img: "/5.png" },
  ];

  return (
    <section style={{
      backgroundColor: "#0a0d1a",
      padding: "60px 24px 80px",
      maxWidth: "1280px",
      margin: "0 auto",
    }}>

      {/* Header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "32px",
      }}>
        <h2 style={{
          color: "white",
          fontSize: "26px",
          fontWeight: 800,
          margin: 0,
          letterSpacing: "-0.5px",
        }}>
          New on TapPlay
        </h2>
        <a href="#" style={{
          color: "rgba(255,255,255,0.5)",
          textDecoration: "none",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}>
          See all <span style={{ fontSize: "16px" }}>›</span>
        </a>
      </div>

      {/* Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "20px",
      }}>
        {tracks.map((track, i) => (
          <div key={i} style={{ cursor: "pointer" }}>

            {/* Thumbnail */}
            <div style={{
              borderRadius: "14px",
              overflow: "hidden",
              height: "180px",
              position: "relative",
              marginBottom: "12px",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              {/* Actual image */}
              <img
                src={track.img}
                alt={track.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* NFC badge — wifi/signal icon matching screenshot */}
              <div style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                backgroundColor: "rgba(16,185,129,0.15)",
                border: "1px solid rgba(16,185,129,0.4)",
                borderRadius: "999px",
                padding: "4px 10px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                backdropFilter: "blur(6px)",
              }}>
                {/* NFC / wifi signal icon — matches screenshot exactly */}
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.2">
                  <path d="M5 12.55a11 11 0 0114.08 0"/>
                  <path d="M1.42 9a16 16 0 0121.16 0"/>
                  <path d="M8.53 16.11a6 6 0 016.95 0"/>
                  <circle cx="12" cy="20" r="1" fill="#10b981"/>
                </svg>
                <span style={{ color: "#10b981", fontSize: "9px", fontWeight: 700, letterSpacing: "0.4px" }}>NFC</span>
              </div>
            </div>

            {/* Info */}
            <p style={{ color: "white", fontSize: "14px", fontWeight: 700, margin: "0 0 3px 0" }}>
              {track.title}
            </p>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", margin: 0 }}>
              {track.artist} · {track.type}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}



