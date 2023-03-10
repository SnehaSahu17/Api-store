import { useEffect } from "react";
import ButtonFilter from "./components/ButtonFilter";
import Jumbotron from "./components/Jumbotron";
import ListApi from "./components/ListApi";
import useAxios from "./hooks/useAxios";

function App() {
  const { fetchData, response, loading } = useAxios('entries');

  useEffect(() => {
    fetchData({ params: { category: 'Animals' } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Jumbotron fetchData={fetchData} />
      <div className="container mx-auto max-w-4xl">
        <ButtonFilter fetchData={fetchData} />
        <ListApi response={response} loading={loading} />
      </div>
    </div>
  );
}
export default App;