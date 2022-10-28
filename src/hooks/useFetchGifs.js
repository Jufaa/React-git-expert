import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (categoria) => {
  const [imagenes, setImagenes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getImagnes = async () => {
    const nuevasImagenes = await getGifs(categoria);
    setImagenes(nuevasImagenes);
    setIsLoading(false);
  };

  useEffect(() => {
    getImagnes();
  }, []);
  return {
    imagenes,
    isLoading,
  };
};
