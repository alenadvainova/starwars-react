import "../css/App.css";
import "../css/Spinner.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import Spinner from "./UI/Spinner";
import Sidebar from "./Sidebar";
import { setPlanets } from "../store/actions/action";

const fetchPlanets = async (page) => {
  const response = await axios.get(
    `https://swapi.dev/api/planets/?page=${page}`
  );

  const data = response.data.results;
  if (response.data.next !== null) {
    return data.concat(await fetchPlanets(page + 1));
  }
  return data;
};

const fetchAllPlanets = () => {
  return fetchPlanets(1);
};

const RouteWithSidebar = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAllPlanets()
      .then((result) => {
        dispatch(
          setPlanets(
            result.sort((a, b) => {
              return a.name > b.name ? 1 : -1;
            })
          )
        );
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, [dispatch]);

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Sidebar />
          <main className="App">
            {loading && <Spinner />}
            <Component {...props} />
          </main>
        </>
      )}
    />
  );
};

export default RouteWithSidebar;
