import React, { useState, useEffect } from "react";
import CardMovie from "./CardMovie";
import { Row } from "react-bootstrap";
import PaginationComponent from "./PaginationComponent";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies } from "../redux/actions/movieAction";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  // const [pageCount, setPageCount] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovies());
  }, []);
  const dataMovies = useSelector((state) => state.movies);
  // عشان ما يصير لووب كل ما يصير ريريندر البيانات تتغير فبدي تنعرض اول ما يتنفذ الكود فقط
  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <CardMovie key={mov.id} mov={mov} />;
        })
      ) : (
        <h2 className="text-center p-5">لا يوجد أفلام لعرضها ...</h2>
      )}
      {movies.length >= 1 ? <PaginationComponent /> : null}
    </Row>
  );
};

export default MoviesList;
