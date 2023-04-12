import { Typography, Box } from '@mui/material'
import { CustomCard } from './components/CustomCard'
import { dataCards } from './mook/data'

function App() {
    return (
        <Box display="flex" flexDirection="column" minHeight={800} gap={2}>
            <Typography variant="h2">Painel de Cards</Typography>
            <Box display="flex" minHeight={800} gap={2} flexWrap="wrap">
                <CustomCard
                    label={dataCards.users.message}
                    value={dataCards.users.value}
                    color={dataCards.users.color}
                />
                <CustomCard
                    label={dataCards.products.message}
                    value={dataCards.products.value}
                    color={dataCards.products.color}
                />
                <CustomCard
                    label={dataCards.services.message}
                    value={dataCards.services.value}
                    color={dataCards.services.color}
                />
                <CustomCard
                    label={dataCards.fruits.message}
                    value={dataCards.fruits.value}
                    color={dataCards.fruits.color}
                />
            </Box>
        </Box>
    )
}

export default App
