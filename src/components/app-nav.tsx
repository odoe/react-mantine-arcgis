import { Navbar } from "@mantine/core";
import { Zoom } from "./zoom";
import { Home } from "./home";
import { Compass } from "./compass";

export function AppNav() {
    return (
        <Navbar width={{ base: 50 }} p="xs">
            <Navbar.Section mt="lg">
                <Compass />
            </Navbar.Section>
            <Navbar.Section mt="lg">
                <Home />
            </Navbar.Section>
            <Navbar.Section mt="lg">
                <Zoom />
            </Navbar.Section>
        </Navbar>)
}
