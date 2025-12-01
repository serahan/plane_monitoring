"use client";

import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
import { useEffect, useRef, useState } from 'react';

const INITIAL_VIEW = {
    longitude: 127.096032,
    latitude: 35.85966,
    zoom: 10,
};

function MapComponent() {
    const mapRef = useRef<mapboxgl.Map | null>(null);
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const [viewState, setViewState] = useState(INITIAL_VIEW);

    useEffect(() => {
        if (!mapContainerRef.current) return;
        if (mapRef.current) return;

        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN ?? '';

        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [INITIAL_VIEW.longitude, INITIAL_VIEW.latitude],
            zoom: INITIAL_VIEW.zoom,
        });

        mapRef.current = map;

        map.on('move', () => {
            const center = map.getCenter();
            setViewState({
                longitude: Number(center.lng.toFixed(6)),
                latitude: Number(center.lat.toFixed(6)),
                zoom: Number(map.getZoom().toFixed(2)),
            });
        });

        return () => {
            map.remove();
            mapRef.current = null;
        };
    }, []);

    // 외부에서 viewState를 바꿀 필요가 있으면 아래 이펙트로 지도를 동기화합니다.
    // useEffect(() => {
    //     const map = mapRef.current;
    //     if (!map) return;
    //     map.easeTo({ center: [viewState.longitude, viewState.latitude], zoom: viewState.zoom });
    // }, [viewState.longitude, viewState.latitude, viewState.zoom]);

    return (
        <div style={{ width: '100vw', height: '100vh', backgroundColor: "#123456", padding: 0 }}>
            <div ref={mapContainerRef} style={{ width: '100%', height: '100%', padding: 0 }} />
        </div>
    );
}

export default MapComponent;