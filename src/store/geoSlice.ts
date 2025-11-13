import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GeoState {
  ip: string;
  latitude?: number | null;
  longitude?: number | null;
  country?: string;
  region?: string;
  city?: string;
  timezone?: string;
  isp?: string;
}

const initialState: GeoState = {
  ip: "",
  latitude: null,
  longitude: null,
  country: "",
  region: "",
  city: "",
  timezone: "",
  isp: ""
};

const geoSlice = createSlice({
  name: "geo",
  initialState,
  reducers: {
    setGeo(state, action: PayloadAction<GeoState>) {
      return { ...state, ...action.payload };
    },
    clearGeo(state) {
      state.ip = "";
      state.latitude = null;
      state.longitude = null;
      state.country = "";
      state.region = "";
      state.city = "";
      state.timezone = "";
      state.isp = "";
    },
  },
});

export const { setGeo, clearGeo } = geoSlice.actions;
export default geoSlice.reducer;
