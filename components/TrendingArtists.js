"use client";

const artists = [
  {
    id: 1,
    name: "K. Maddox",
    genre: "Hip-Hop",
    followers: "2.4M followers",
    image: "https://placehold.co/200x200/1a1a2e/ffffff?text=KM",
  },
  {
    id: 2,
    name: "Mia Torres",
    genre: "R&B",
    followers: "1.8M followers",
    image: "https://placehold.co/200x200/0d0d30/4466ff?text=MT",
  },
  {
    id: 3,
    name: "Lo Russell",
    genre: "Alternative",
    followers: "3.1M followers",
    image: "https://placehold.co/200x200/111111/cccccc?text=LR",
  },
  {
    id: 4,
    name: "River James",
    genre: "Indie Folk",
    followers: "890K followers",
    image: "https://placehold.co/200x200/1a2a1a/aaccaa?text=RJ",
  },
  {
    id: 5,
    name: "Beat Collective",
    genre: "Electronic",
    followers: "1.2M followers",
    image: "https://placehold.co/200x200/0a1a0a/33aa55?text=BC",
  },
];

export default function TrendingArtists() {
  return (
    <div className="bg-[#08080f] py-12 px-8 font-sans">
      <div className="max-w-6xl mx-auto">

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
        <div className="flex items-start justify-between gap-4">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              {/* Circle image */}
              <div className="w-[155px] h-[155px] rounded-full overflow-hidden mb-4 ring-1 ring-white/10 group-hover:ring-white/25 transition-all">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
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


