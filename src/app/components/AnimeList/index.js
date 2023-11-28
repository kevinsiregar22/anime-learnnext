import Image from 'next/image';

const AnimeList = ({ title, images, season }) => {
  return (
    <div className="">
      <Image src={images} alt="...." height={600} width={600} />
      <h3 className="font-bold md:text-xl text:md p-4">
        {title} - {season}
      </h3>
    </div>
  );
};

export default AnimeList;
