import { constants } from "@/src/constants/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface mapTypeState {
    value: string;
}

const initialState: mapTypeState = {
    value: constants.MAP_STYLES.STREETS,
};

export const mapTypeSlice = createSlice({
    name: "mapType",
    initialState,
    reducers: {
        changeMapType: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { changeMapType } = mapTypeSlice.actions;
export default mapTypeSlice.reducer;
