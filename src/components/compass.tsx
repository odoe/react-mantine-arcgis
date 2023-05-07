import { ActionIcon } from "@mantine/core";
import { IconCircleArrowUp } from "@tabler/icons-react";

import CompassVM from "@arcgis/core/widgets/Compass/CompassViewModel";
import { watch } from "@arcgis/core/core/reactiveUtils";

import { useContext, useEffect, useState } from "react";
import { MapContext } from "../map-context";

export function Compass() {
    const [vm, setVM] = useState<InstanceType<typeof CompassVM>>();
    const [rotation, setRotation] = useState(0);

    const { view } = useContext(MapContext);

    useEffect(() => {
        if (view) {
            setVM(new CompassVM({ view }));
        }
    }, [view]);

    useEffect(() => {
        let handle: __esri.WatchHandle;
        if (vm) {
            handle = watch(
                () => vm.orientation,
                () => {
                    setRotation(vm.orientation.z)
                }
            );
        }

        return () => {
            handle?.remove();
        }
    }, [vm]);

    return (
        <ActionIcon radius="xs" onClick={() => vm?.reset()}>
            <IconCircleArrowUp style={{ transform: `rotate(${rotation}deg)` }} />
        </ActionIcon>
    );
}
