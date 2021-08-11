import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

import { setPage } from "../store/actions/action";

const PLANETS_PER_PAGE = 10;

const Table = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.table.selPage);
  const planets = useSelector((state) => state.planets.planets);
  const [pagePlanets, setPagePlanets] = useState([]);

  useEffect(() => {
    const data = planets.slice(
      page * PLANETS_PER_PAGE,
      page * PLANETS_PER_PAGE + PLANETS_PER_PAGE
    );
    setPagePlanets(data);
  }, [planets, page]);

  const handlePageChange = (e) => {
    dispatch(setPage(e.selected));
  };

  const pageCount = planets ? Math.ceil(planets.length / PLANETS_PER_PAGE) : 0;
  return (
    <section className="planets planets-table">
      <h2>Planets</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Population</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Surface Water</th>
          </tr>
        </thead>

        <tbody>
          {pagePlanets &&
            pagePlanets.map((p) => (
              <tr key={p.name}>
                <td>{p.name}</td>
                <td>{p.population}</td>
                <td>{p.rotation_period}</td>
                <td>{p.orbital_period}</td>
                <td>{p.diameter}</td>
                <td>{p.climate}</td>
                <td>{p.surface_water}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {pageCount > 0 && (
        <ReactPaginate
          pageCount={pageCount}
          previousLabel="prev"
          nextLabel="next"
          forcePage={page}
          breakLabel={"..."}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      )}
    </section>
  );
};

export default Table;
