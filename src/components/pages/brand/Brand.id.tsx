import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import AddIcon from "@mui/icons-material/Add";

type Props = {};

type brand = {
  brand: {
    id: string;
    name: string;
  };
  headphone: {
    id: string;
    name: string;
  };
};

const Brand_id = (props: Props) => {
  const { id } = useParams();
  const [data, setData] = useState<brand | any>();
  const [loading, setLoading] = useState<boolean>(true);

  const getBrand = async () => {
    const res = await axios.get(`${import.meta.env.VITE_URL}/shop/brand/${id}`);
    setData(res.data);
    // console.log(res.data)
    setLoading(false);
  };
  useEffect(() => {
    getBrand();
  }, []);

  return (
    <div className="grid h-screen place-items-center">
      {loading ? (
        <div>loading...</div>
      ) : (
        <div className="grid h-screen place-items-center">
          <AddIcon
            className="text-white mx-3 cursor-pointer absolute top-50 right-24 rounded-full bg-slate-800"
            sx={{
              fontSize: 36,
              "&:hover": { color: "#b9bdff", background: "#0b006d75" },
            }}
          />
          <div>
            <p className="uppercase bg-slate-50 p-3 rounded-lg select-none text-center font-bold">
              {data.brand.name}
            </p>
            <div className="flex mt-5 flex-col">
              {data.headphones.map((headphone: any) => (
                <li
                  className="m-2 text-center  rounded-lg text-white cursor-pointer"
                  key={headphone.id}
                >
                  {headphone.name}
                </li>
              ))}
            </div>
          </div>
          <Link to={"/brand"} className="bg-slate-100 p-2 rounded-md mt-5">
            Back
          </Link>
        </div>
      )}
    </div>
  );
};

export default Brand_id;
