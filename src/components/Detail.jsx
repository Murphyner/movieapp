import { Link, useParams } from "react-router-dom";

function Detail({movies}) {
    const { id } = useParams();
    const item = movies?.find(item => item.id.toString() === id)
    console.log(item);
    return (
        <div className="container">
            <div className="grid grid-rows-[50px_50px_auto] grid-cols-2 border-2 border-black w-[80%] mx-auto my-5">
                <h3 className="col-span-2 bg-gray-100 px-3 flex items-center">
                    {item?.title}
                </h3>
                <Link to="/" className="px-3 text-blue-400 col-span-2 flex items-center">
                    Main Page
                </Link>
                <div className="col-span-2 flex items-center">
                    <img src={item?.posterUrl} alt="" className="w-[20%] p-2" />
                    <div className="flex flex-col w-[80%]">
                        <p className="p-5">
                            {item?.plot}
                        </p>
                        <div className="grid grid-rows-4 grid-cols-4 p-5">
                            <p className="col-span-1 bg-gray-200 p-2">Director</p>
                            <p className="col-span-3 bg-gray-200 p-2">{item?.director}</p>
                            <p className="col-span-1 bg-gray-200 p-2">Actors</p>
                            <p className="col-span-3 bg-gray-200 p-2">{item?.actors}</p>
                            <p className="col-span-1 bg-gray-200 p-2">Year</p>
                            <p className="col-span-3 bg-gray-200 p-2">{item?.year}</p>
                            <p className="col-span-1 bg-gray-200 p-2">Genres</p>
                            <p className="col-span-3 bg-gray-200 p-2">{item?.genres}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
