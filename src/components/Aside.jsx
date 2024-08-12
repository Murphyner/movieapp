function Aside({genres ,movies ,setFiltered}) {

    function  filter(a) {
       const filteredData = movies?.filter(item => item.genres.includes(a))
       setFiltered(filteredData)
    }
console.log(genres);
  return (
    <div className="border-2 mx-2 rounded-lg h-[70%]"> 
      <ul>
        {genres?.map((item, i) => <li onClick={() => filter(item)}  className="p-4 hover:bg-gray-100 cursor-pointer rounded-lg m-2" key={i}>{item}</li>)}
      </ul>
    </div>
  )
}

export default Aside
