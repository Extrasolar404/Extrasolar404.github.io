const animeData = [
  {
    title: "One Piece",
    cover: "covers/one_piece.jpg.jpg",
    episodes: 1155,
    url: "https://hianime.to/one-piece-100"
  },
  {
    title: "Naruto Shippuden",
    cover: "covers/naruto.jpg.jpg",
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


const grid = document.getElementById("animeGrid");
const search = document.getElementById("search");

function render(list){
  grid.innerHTML = "";

  list.forEach(a=>{
    const card=document.createElement("div");
    card.className="card";

    card.innerHTML=`
      <img class="cover-img" src="${a.cover}">
      <div class="tile-info">
        <h3>${a.title}</h3>
        <span>${a.episodes} Episodes</span>
      </div>
    `;

    card.onclick=()=>window.open(a.url,"_blank");
    grid.appendChild(card);
  });
}

render(animeData);

search.addEventListener("input",()=>{
  const q=search.value.toLowerCase();
  render(animeData.filter(a=>a.title.toLowerCase().includes(q)));
});
