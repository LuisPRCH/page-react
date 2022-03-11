import UseGifs from "../../hooks/UseGifs/UseGifs";
import Gif from "../Gif/Gif";
import Loader from "../Loader/Loader";

export default function ListOfGifs({ gifs, loading }) {

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        gifs.map((singleGif) => (
          <Gif
            key={singleGif.id}
            title={singleGif.title}
            url={singleGif.url}
            id={singleGif.id}
          />
        ))
      )}
    </>
  );
}
