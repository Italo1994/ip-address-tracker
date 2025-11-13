import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setGeo } from "../../store/geoSlice";
//import { RootState } from "../../store/store";

interface GeoLocationProps {
    ip: string;
}

export default function GeoLocation({ip}: GeoLocationProps) {
  //const [geo, setGeo] = useState<GeoData | null>(null);
  const dispatch = useDispatch();
  //const geo = useSelector((state: RootState) => state.geo);
  //const api_key = "at_K9JsI7Rqpgjf6KbeHfbYHnaMMEr6J"

  useEffect(() => {
    const fetchGeo = async () => {
      try {
        const res = await axios.get(
           `https://geo.ipify.org/api/v2/country,city?apiKey=at_K9JsI7Rqpgjf6KbeHfbYHnaMMEr6J&ipAddress=${ip}`
        );

        const data = res.data || {};
        const loc = data.location || {};

        console.log(data)

        const payload = {
            ip: data.ip ?? "",
            latitude: loc.lat ?? null,
            longitude: loc.lng ?? null,
            country: loc.country ?? "",
            region: loc.region ?? "",
            city: loc.city ?? "",
            timezone: loc.timezone ?? "",
            isp: data.isp ?? "",
        };

        dispatch(setGeo(payload));
      } catch (err) {
        console.error("Erro ao buscar geolocalização:", err);
      }
    };

    fetchGeo();
  }, [dispatch]);

  return (
    <></>
  );
}
