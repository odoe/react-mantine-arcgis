import config from '@arcgis/core/config';
import ArcGISMap from '@arcgis/core/Map'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import MapView from '@arcgis/core/views/MapView';

interface MapApp {
    view?: MapView;
}

const app: MapApp = {}

config.apiKey = import.meta.env.VITE_API_KEY;

export function init(container: HTMLDivElement) {
    if (app.view) {
        app.view.destroy()
    }

    const layer = new FeatureLayer({
        portalItem: {
            id: '848d61af726f40d890219042253bedd7'
        },
    });

    const map = new ArcGISMap({
        basemap: 'arcgis-dark-gray',
        layers: [layer]
    })

    const view = new MapView({
        map,
        container,
        ui: {
            components: ['attribution']
        }
    })

    layer.when(() => {
        view.extent = layer.fullExtent
    })

    return view;
}

