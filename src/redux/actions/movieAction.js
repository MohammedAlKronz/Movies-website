import { AllMOVIES, MovieApi } from "../types/moviesType";
import axios from "axios";

export const getAllMovies = () => {
  return async (dispatch) => {
    const res = await axios.get(MovieApi);
    // console.log(res.data);
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages
    });
  };
};

export const getMovieSearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=6e72d0482679c358b50e02f5ec671cff&query=${word}&language=ar`);
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages
    });
  };
};

export const getPages = (page) => {
  return async (dispatch) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=6e72d0482679c358b50e02f5ec671cff&language=ar&page=${page}`);
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages
    });
  };
};


/*
- الكود هاد الي جوا الاكشن عشان يتنفذ بيروح بالاول على الريديوسر فانا بدي اياه قبل ما يروح على الريديوسر يتاكد انه الداتا رجعتلي طب كيف ؟؟
- فعملنا حاجة اسمها ميدلويير بتنحط بينهم وهاي ما بستخدمها غير لو بتعامل مع حاجة فيها اسنك اويت وغالبا بتكون بيانات من اي بي اي
- Action ---- Middleware ----> Reducer.
- npm i redux-thunk ==> alter from (async await) in store.
- return other function (Higher Order Function).
- dispatch => بأستخدمها عشان اقله اقف استنى الريسبونس يرجع كله ثم ابعته للرديوسر 
- طبعا ممكن تسميه باي اسم متغير ثاني ، هان انا سميته ديسباتش عشانه نفس فكرتها
*/