import { ActionIcon } from "@mantine/core";
import { IconHome2 } from "@tabler/icons-react";

import HomeVM from "@arcgis/core/widgets/Home/HomeViewModel";
import { useContext, useEffect, useState } from "react";
import { MapContext } from "../map-context";

export function Home() {
    const [vm, setVM] = useState<InstanceType<typeof HomeVM>>();

    const { view } = useContext(MapContext);

    useEffect(() => {
        if (view) {
            setVM(new HomeVM({ view }));
        }
    }, [view]);

    return (
        <ActionIcon radius="xs" onClick={() => vm?.go()}>
            <IconHome2 />
        </ActionIcon>
    );
}
