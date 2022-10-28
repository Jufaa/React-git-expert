import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifCreate = ({ categoria }) => {
  const { imagenes, isLoading } = useFetchGifs(categoria);
  console.log(imagenes, isLoading);

  return (
    <>
      <h3>{categoria}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {imagenes.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
