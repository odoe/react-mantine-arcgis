import { createContext, useState } from "react";
import type MapView from "@arcgis/core/views/MapView";

type MapContextProps = {
    view?: MapView,
    loadMap?: (container: HTMLDivElement) => Promise<void>
};

export const MapContext = createContext<MapContextProps>({});

export function MapProvider({ children }: { children: React.ReactNode }) {
    const [view, setView] = useState<MapView>();

    async function loadMap(container: HTMLDivElement) {
        if (view) return;
        const { init } = await import("./data/mapping");
        setView(init(container));
    }

    return (
        <MapContext.Provider value={{ view, loadMap }} >
            {children}
        </MapContext.Provider>
    );
}

