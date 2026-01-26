const animeData = [
  {
    title: "One Piece",
    cover: "covers/one_piece.jpg.jpg",
    episodes: 1155,
    url: "https://hianime.to/one-piece-100"
  },
  {
    title: "Naruto Shippuden",
    cover: "covers/ .jpg",
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
  }
];

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
  const q = animeSearch.value.toLowerCase();
  const filtered = animeData.filter(a=>a.title.toLowerCase().includes(q));
  renderGrid(animeGrid, filtered);
}

function renderManga(){
  const q = mangaSearch.value.toLowerCase();
  const filtered = mangaData.filter(m=>m.title.toLowerCase().includes(q));
  renderGrid(mangaGrid, filtered);
}

renderAnime();
renderManga();

animeSearch.addEventListener("input", renderAnime);
mangaSearch.addEventListener("input", renderManga);
