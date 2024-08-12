import { useState } from "react";
import Card from "./Card"
import { Pagination } from "antd";
import Aside from "./Aside";



function Main({movies ,genres}) {
    const [currentOne, setCurrentOne ] = useState(1)
    const [filtered ,setFiltered] =  useState()
    let x = 10
   
    const selectedMovie = filtered ? filtered : movies

    

    function change(page) {
      setCurrentOne(page)
    }
    let start = (currentOne - 1) * x

    return (
      <div className="flex justify-center flex-col"> 
        <div className="container py-5 flex mx-auto">
          <div className="w-[80%] flex flex-wrap">
            {selectedMovie?.slice(start, currentOne * x).map((item, i) => <Card item={item} key={i} />) }
          </div>
          <Aside genres={genres} movies={movies} setFiltered={setFiltered}  />
        </div> 
          <Pagination className="p-5" pageSize={x} current={currentOne} onChange={change} total={selectedMovie.length} />
      </div>
    );
  }
  

export default Main
