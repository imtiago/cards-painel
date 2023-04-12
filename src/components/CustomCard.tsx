import { Box, BoxProps, Typography } from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment'

interface IInfoCard extends BoxProps {
    label: string
    value: number
    color: string
    // icon: amy;
}

export const CustomCard = ({ label, value, color }: IInfoCard) => {
    return (
        <Box
            width={250}
            height={140}
            bgcolor={color}
            display="flex"
            alignItems="center"
            borderRadius={4}
        >
            <Box
                width={0.4}
                height={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
                color="#334155"
            >
                <Box
                    width={80}
                    height={80}
                    bgcolor="white"
                    borderRadius={'50%'}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <AssignmentIcon color="primary" fontSize="large" />
                </Box>
            </Box>
            <Box>
                <Typography variant="h3">{value}</Typography>
                <Typography textOverflow="ellipsis">{label}</Typography>
            </Box>
        </Box>
    )
}
