import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Coordinates = {
    lat: number;
    lng: number;
} | null;

type LocationState = {
    coords: Coordinates;
};

const initialState: LocationState = {
    coords: null,
};

const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setCoords(state, action: PayloadAction<{ lat: number; lng: number }>) {
            state.coords = action.payload;
        },
        clearCoords(state) {
            state.coords = null;
        },
    },
});

export const { setCoords, clearCoords } = locationSlice.actions;
export default locationSlice.reducer;
