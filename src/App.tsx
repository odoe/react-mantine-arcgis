import './App.css'
import { MapProvider } from './map-context'
import { AppShell, Header, MantineProvider } from '@mantine/core'
import { AppNav } from './components/app-nav'
import { ArcGISMap } from './components/map'

function App() {
    return (
        <MapProvider>
            <MantineProvider>
                <AppShell
                    padding="xs"
                    navbar={
                        <AppNav />
                    }
                    header={<Header height={60} p="xs" className='text-gray-950'><h2>ArcGIS Demo App</h2></Header>}
                    styles={(theme) => ({
                        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
                    })}
                >
                    <ArcGISMap />
                </AppShell>
            </MantineProvider>
        </MapProvider>
    )
}

export default App
