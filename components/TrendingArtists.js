"use client";

const artists = [
  {
    id: 1,
    name: "K. Maddox",
    genre: "Hip-Hop",
    followers: "2.4M followers",
    image: "/TA1.jpg",
  },
  {
    id: 2,
    name: "Mia Torres",
    genre: "R&B",
    followers: "1.8M followers",
    image: "/TA2.jpg",
  },
  {
    id: 3,
    name: "Lo Russell",
    genre: "Alternative",
    followers: "3.1M followers",
    image: "/TA3.jpg",
  },
  {
    id: 4,
    name: "River James",
    genre: "Indie Folk",
    followers: "890K followers",
    image: "/TA4.jpg",
  },
  {
    id: 5,
    name: "Beat Collective",
    genre: "Electronic",
    followers: "1.2M followers",
    image: "/TA5.jpg",
  },
];

export default function TrendingArtists() {
  return (
    <div className="bg-[#08080f] py-12 px-8 font-sans">
      <div className="max-w-6xl mx-auto"> {/* ← added mx-auto */}

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-white text-2xl font-bold">Trending Artists</h2>
          <button className="flex items-center gap-1 text-white/40 text-sm hover:text-white/70 transition-colors">
            Explore all
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Artists Row */}
        <div className="flex items-start justify-center gap-10"> {/* ← justify-center */}
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              {/* Circle image with hover: moves up + sky-blue ring */}
              <div
                className="
                  w-[155px] h-[155px] rounded-full overflow-hidden mb-4
                  ring-2 ring-transparent
                  group-hover:ring-sky-400
                  group-hover:-translate-y-2
                  transition-all duration-300 ease-in-out
                "
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Text */}
              <p className="text-white text-sm font-semibold mb-1">{artist.name}</p>
              <p className="text-white/40 text-xs mb-1">{artist.genre}</p>
              <p className="text-white/25 text-xs">{artist.followers}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}


