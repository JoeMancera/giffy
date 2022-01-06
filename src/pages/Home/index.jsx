import React from "react";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import { useGifs } from "hooks/useGifs";
import { Helmet } from "react-helmet";
import "./Home.css";

export default function Home() {
  // const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  // Para evitar problemas de renderizado cuando tenemos un handle podemos
  // usar useCallback para que no se vuelva a renderizar sin que las props de las que dependa cambien
  // const handleSubmit = useCallback(
  //   ({ keyword }) => {
  //     // navegamos
  //     pushLocation(`/search/${keyword}`);
  //   },
  //   [pushLocation]
  // );

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <SearchForm />
      <h3>Última busqueda</h3>
      <div className="App-content ">
        <section className="App-gifs">
          {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
        </section>
        <aside className="App-trends">
          <h3 className="App-section">Tendencias</h3>
          <TrendingSearches />
        </aside>
      </div>
    </>
  );
}
