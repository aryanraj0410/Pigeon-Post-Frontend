import axios from "axios";
import { PIGEON_API_END_POINT } from "../utils/constant";
import { useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { getAllPigeons } from "../redux/pigeonSlice";


const useGetMyPigeons = (id) => {
  const dispatch = useDispatch();
 // const { refresh, isActive } = useSelector((store) => store.pigeon);
  useEffect(() => {
    const fetchMyPigeon = async () => {
      try {
         const res = await axios.get(`${PIGEON_API_END_POINT}/allpigeons/${id}`,
          {
            withCredentials: true,
          }
        );
        console.log(res);
        dispatch(getAllPigeons(res.data.pigeons));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMyPigeon();
  },[id]);
};
export default useGetMyPigeons;
