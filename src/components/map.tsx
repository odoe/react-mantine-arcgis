"use client";

import { useContext, useEffect, useRef } from "react";
import { MapContext } from "../map-context";

export function ArcGISMap() {
    const mapRef = useRef<HTMLDivElement>(null);
    const { loadMap } = useContext(MapContext)

    useEffect(() => {
        if (mapRef.current && loadMap) {
            loadMap(mapRef.current);
        }
    }, [mapRef, loadMap]);

    return (
        <div className="w-full h-full" ref={mapRef}></div>
    );
}
