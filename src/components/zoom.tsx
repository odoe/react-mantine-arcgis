import { useContext, useEffect, useState } from "react";
import { ActionIcon } from "@mantine/core";
import { IconCircleMinus, IconCirclePlus } from "@tabler/icons-react";

import ZoomVM from "@arcgis/core/widgets/Zoom/ZoomViewModel";
import { watch } from "@arcgis/core/core/reactiveUtils";

import { MapContext } from "../map-context";

export function Zoom() {
    const [vm, setVM] = useState<InstanceType<typeof ZoomVM>>();
    const [disableZoomIn, setDisableZoomIn] = useState(false);
    const [disableZoomOut, setDisableZoomOut] = useState(false);

    const { view } = useContext(MapContext);

    useEffect(() => {
        if (view) {
            setVM(new ZoomVM({ view }));
        }
    }, [view]);

    useEffect(() => {
        let handle: __esri.WatchHandle;
        if (vm) {
            handle = watch(
                () => [vm.canZoomOut, vm.canZoomIn],
                () => {
                    setDisableZoomIn(!vm?.canZoomIn);
                    setDisableZoomOut(!vm?.canZoomOut);
                }
            );
        }

        return () => {
            handle?.remove();
        }
    }, [vm]);

    return (
        <>
            <ActionIcon radius="xs" onClick={() => vm?.zoomIn()} disabled={disableZoomIn}>
                <IconCirclePlus />
            </ActionIcon>
            <ActionIcon radius="xs" onClick={() => vm?.zoomOut()} disabled={disableZoomOut}>
                <IconCircleMinus />
            </ActionIcon>
        </>
    );
}
