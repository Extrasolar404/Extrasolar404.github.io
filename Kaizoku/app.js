const animeData = [
  {
    title: "One Piece",
    cover: "covers/one_piece.jpg.jpg",
    episodes: 1155,
    url: "https://hianime.to/one-piece-100"
  },

  {
    title: "Naruto Shippuden",
    cover: "https://via.placeholder.com/300x400?text=No+Image",
    episodes: 500,
    url: "https://hianime.to/naruto-shippuden-355"
  },
  {
    title: "Jujutsu Kaisen",
    cover: "covers/jujutsu_kaisen.jpg.jpg",
    episodes: 60,
    url: "https://hianime.to/jujutsu-kaisen-tv-534"
  },
  {
    title: "Demon Slayer",
    cover: "covers/demon_slayer.jpg.jpg",
    episodes: 55,
    url: "https://hianime.to/demon-slayer-kimetsu-no-yaiba-47"
  },
  {
    title: "Your Name",
    cover: "covers/your_name.jpg.jpg",
    episodes: 0,
    url: "https://hianime.to/your-name-10"
  },
  {
    title: "Blue Lock",
    cover: "covers/blue_lock.jpg.jpg",
    episodes: 0,
    url: "https://hianime.to/blue-lock-17889"
  },
  {
    title: "Mushoku Tensei",
    cover: "covers/mushoku_tensei.jpg.jpg",
    episodes: 0,
    url: "https://hianime.to/mushoku-tensei-jobless-reincarnation-15820"
  },
  {
    title: "Gintama",
    cover: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/557c4c18257fd706c7ab480ce75fdd6f.jpg",
    episodes: 201,
    genre: "action",
    url: "https://hianime.to/gintama-13"
  },
  {
    title: "Haikyu!!",
    cover: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/126756b57f51180a156a6895b0166643.jpg",
    episodes: 25,
    genre: "sports",
    url: "https://hianime.to/haikyu-76"
  },
  {
    title: "Dragon Ball",
    cover: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/cbe9999ab6606992fb000566ebf5d99b.jpg",
    episodes: 153,
    genre: "adventure",
    url: "https://hianime.to/dragon-ball-509"
  },
  {
    title: "Dragon Ball Z",
    cover: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/2ac32c050b4dff7747fcc7f64c01edbd.jpg",
    episodes: 291,
    genre: "action",
    url: "https://hianime.to/dragon-ball-z-325"
  },
  {
    title: "Dragon Ball GT",
    cover: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/aa150fd93887a7cbdc4be0882584dc53.jpg",
    episodes: 64,
    genre: "action",
    url: "https://hianime.to/dragon-ball-gt-5743"
  },
  {
    title: "Dragon Ball Z Kai",
    cover: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/f1d8865bb1dd83e9d23dc4087c523b28.jpg",
    episodes: 98,
    genre: "action",
    url: "https://hianime.to/dragon-ball-z-kai-896"
  },
  {
    title: "Dragon Ball Z Kai: The Final Chapters",
    cover: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/74f078de00de9d1fd75fd3bcd148141b.jpg",
    episodes: 69,
    genre: "action",
    url: "https://hianime.to/dragon-ball-z-kai-the-final-chapters-953"
  },
  {
    title: "Dragon Ball Super",
    cover: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/6908f85a069414d40530042f2cdd8c8a.jpg",
    episodes: 131,
    genre: "action",
    url: "https://hianime.to/dragon-ball-super-1692"
  },
  {
    title: "Super Dragon Ball Heroes",
    cover: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/fc1904280b9effa1624c0d2b2652aa52.jpg",
    episodes: 20,
    genre: "action",
    tags: ["action"],
    url: "https://hianime.to/super-dragon-ball-heroes-9688"
  },
  {
    title: "Haikyu!! 2nd Season",
    cover: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b2689b8a2aa02e73c9d75ebcea66f7b0.jpg",
    episodes: 25,
    genre: "comedy, drama, school, shounen, sports",
    tags: ["comedy","drama","school","shounen","sports"],
    url: "https://hianime.to/haikyu-2nd-season-29"
  },
  {
    title: "Haikyu!! 3rd Season",
    cover: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/d478edb8170087ac0171f62bda7acc43.jpg",
    episodes: 10,
    genre: "comedy, drama, school, shounen, sports",
    tags: ["comedy","drama","school","shounen","sports"],
    url: "https://hianime.to/haikyu-3rd-season-18"
  },
  {
    title: "Haikyuu!!: To the Top (Part 1+2)",
    cover: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/d06cbf986db351bdba9ccce24ede67ff.jpg",
    episodes: 25,
    genre: "comedy, drama, school, shounen, sports",
    tags: ["comedy","drama","school","shounen","sports"],
    url: "https://hianime.to/haikyuu-to-the-top-part-12-122"
  },
  {
    title: "Mushoku Tensei: Jobless Reincarnation Part 2",
    cover: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/3cbe09489cbc6666bc9fb6f221a3b8c5.jpg",
    episodes: 12,
    genre: "drama, ecchi, fantasy, magic",
    tags: ["drama","ecchi","fantasy","magic"],
    url: "https://hianime.to/mushoku-tensei-jobless-reincarnation-part-2-17633"
  },
  {
    title: "Mushoku Tensei: Isekai Ittara Honki Dasu Special",
    cover: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/224d942822334deba9542b4260642559.jpg",
    episodes: 1,
    genre: "drama, ecchi, fantasy",
    tags: ["drama","ecchi","fantasy"],
    url: "https://hianime.to/mushoku-tensei-isekai-ittara-honki-dasu-special-17953"
  },
  {
    title: "Mushoku Tensei: Specials - Episode 0",
    cover: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/60a801845f55ad185014e69238ec989f.jpg",
    episodes: 1,
    genre: "drama, ecchi, fantasy, isekai",
    tags: ["drama","ecchi","fantasy","isekai"],
    url: "https://hianime.to/mushoku-tensei-jobless-reincarnation-specials-episode-0-18495"
  },
  {
    title: "Mushoku Tensei: Jobless Reincarnation Season 2",
    cover: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/1cf9bdf58f5d0d2db7bd856b15e3835f.png",
    episodes: 12,
    genre: "adventure, drama, ecchi, fantasy, isekai",
    tags: ["adventure","drama","ecchi","fantasy","isekai"],
    url: "https://hianime.to/mushoku-tensei-jobless-reincarnation-season-2-18418"
  },
  {
    title: "Demon Slayer: Entertainment District Arc",
    cover: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/3e13d0ab2ce8799c9da8ed59548b96e9.jpg",
    episodes: 11,
    genre: "action, demons, historical, shounen, supernatural",
    tags: ["action","demons","historical","shounen","supernatural"],
    url: "https://hianime.to/demon-slayer-entertainment-district-arc-17483"
  },
  {
    title: "Demon Slayer: Swordsmith Village Arc",
    cover: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/db2f3ce7b9cab7fdc160b005bffb899a.png",
    episodes: 11,
    genre: "action, adventure, demons, historical, shounen, super power",
    tags: ["action","adventure","demons","historical","shounen","super power"],
    url: "https://hianime.to/demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc-18056"
  },
  {
    title: "Demon Slayer: Hashira Training Arc",
    cover: "https://cdn.noitatnemucod.net/thumbnail/300x400/100/1f06eb0baf5520aa639b546fc189400d.jpg",
    episodes: 8,
    genre: "action, adventure, drama, fantasy, historical, shounen, supernatural",
    tags: ["action","adventure","drama","fantasy","historical","shounen","supernatural"],
    url: "https://hianime.to/demon-slayer-kimetsu-no-yaiba-hashira-training-arc-19107"
  }
 ];

function normalizeAnimeTags(){ animeData.forEach(item=>{ if(!item.tags){ if(item.genre) item.tags = item.genre.split(',').map(s=>s.trim().toLowerCase()); else item.tags = []; } else { item.tags = item.tags.map(t=>t.toString().trim().toLowerCase()); } item.tags = Array.from(new Set(item.tags.filter(Boolean))); }); }
normalizeAnimeTags();


const mangaData = []; 
const animeGrid = document.getElementById("animeGrid");
const mangaGrid = document.getElementById("mangaGrid");
const animeSearch = document.getElementById("animeSearch");
const mangaSearch = document.getElementById("mangaSearch");

function renderGrid(grid, list){
  grid.innerHTML = "";

  list.forEach(item=>{
    const card=document.createElement("div");
    card.className="card";

    const episodeText = item.type === "manga" ? `${item.chapters} Chapters` : `${item.episodes} Episodes`;

    card.innerHTML=`
      <img class="cover-img" src="${item.cover}">
      <div class="tile-info">
        <h3>${item.title}</h3>
        <span>${episodeText}</span>
      </div>
    `;

    card.onclick=()=>window.open(item.url,"_blank");
    grid.appendChild(card);
  });
}

function renderAnime(){
  if(!animeGrid || !animeSearch) return;
  const q = (animeSearch.value || '').toLowerCase().trim();
  const genreVal = (document.getElementById('genreSearch')?.value || document.getElementById('animeGenreFilter')?.value || document.getElementById('genreFilter')?.value || '').toLowerCase().trim();
  const letter = window.currentLetter || '';
  const filtered = animeData.filter(a=>{
    const titleMatch = a.title.toLowerCase().includes(q);
    const tags = a.tags && Array.isArray(a.tags) ? a.tags.map(t=>t.toLowerCase()) : (a.genre? a.genre.split(',').map(s=>s.trim().toLowerCase()):[]);
    const tagMatch = tags.some(t=>t.includes(q));
    if(!(titleMatch||tagMatch)) return false;
    if(genreVal && !tags.includes(genreVal)) return false;
    if(letter && a.title.charAt(0).toLowerCase() !== letter) return false;
    return true;
  });
  renderGrid(animeGrid, filtered);
}

function renderManga(){
  if(!mangaGrid || !mangaSearch) return;
  const q = (mangaSearch.value || '').toLowerCase();
  const filtered = mangaData.filter(m=>m.title.toLowerCase().includes(q));
  renderGrid(mangaGrid, filtered);
}

if(animeSearch){
  animeSearch.addEventListener("input", renderAnime);
  renderAnime();
}
if(mangaSearch){
  mangaSearch.addEventListener("input", renderManga);
  renderManga();
}
