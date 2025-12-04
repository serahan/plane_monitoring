import { configureStore } from "@reduxjs/toolkit";
import mapTypeReducer from "@/src/redux/slices/mapTypeSlice";

export default configureStore({
    reducer: {
        mapType: mapTypeReducer,
    },
});
