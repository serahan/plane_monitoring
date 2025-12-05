"use client";

import Map from "react-map-gl/mapbox";
import { useSelector } from "react-redux";
import store from "../redux/store";

const INITIAL_VIEW = {
    longitude: 127.096032,
    latitude: 35.85966,
    zoom: 10,
};

type RootState = ReturnType<typeof store.getState>;

function MapComponent() {
    const mapType = useSelector((state: RootState) => state.mapType.value);

    return (
        <Map
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
            style={{ width: "100%", height: "100%" }}
            projection="globe"
            initialViewState={INITIAL_VIEW}
            mapStyle={mapType}
        />
    );
}

export default MapComponent;
