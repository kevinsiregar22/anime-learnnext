import AnimeList from './components/AnimeList';

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );

  const anime = await response.json();

  // console.log('anime: ', anime);

  return (
    <div>
      <h1>Paling Populer</h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        {anime.data.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList
                title={data.title}
                images={data.images.webp.image_url}
                season={data.season}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
