import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function Github() {
    //   const [data, setData] = useState([]);

    const data = useLoaderData()
    
    //   useEffect(() => {
        //     fetch(`http://api.github.com/users/${userid}`)
        //       .then((res) => res.json())
        //       .then((res) => setData(res))
        //       .catch((err) => console.log(err));
        //   }, []);
        return (
            <div className="text-center bg-gray-700 text-white m-4 p-4 text-3xl">
      Github Followers : {data?.followers}
      <img src={data?.avatar_url} alt="git picture" width={300} />
    </div>
  );
  }

  export default Github;
  
  export const useGithubInfoLoader = async ({params}) => {
    const res = await fetch(`http://api.github.com/users/${params.userid}`)

    return res.json()
}
