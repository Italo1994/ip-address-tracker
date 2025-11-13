import { useDispatch } from "react-redux";
import { setGeo } from "../../store/geoSlice";

import { InputContainer, InputField, InputIcon } from "./InputStyles";
import { useState } from "react";
import axios from "axios";


export function Input() {
    const dispatch = useDispatch();
    const [ip, setIp] = useState("");
    const [searchIp, setSearchIp] = useState("");

    const handleSearch = async () => {
        if(!ip) return

        setSearchIp(ip)
        
        try {
            const res = await axios.get(
                `https://geo.ipify.org/api/v2/country,city?apiKey=at_K9JsI7Rqpgjf6KbeHfbYHnaMMEr6J&ipAddress=${ip}`
            );

            const data = res.data || {};
            const loc = data.location || {};

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
    }

    return (
        <>
        <InputContainer>
            <InputField 
                placeholder="search for any ip address or domain" 
                onChange={(e) => setIp(e.target.value)}
            />
            <InputIcon onClick={handleSearch}>
                search
            </InputIcon>
        </InputContainer>
        </>
    )
}