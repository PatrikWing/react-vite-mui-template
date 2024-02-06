import { Box, Container, useTheme } from "@mui/material";
import Error from "../components/Error";

export default function ErrorPage(): React.ReactElement {
    const theme = useTheme();
    return (
        <Box
            sx={{
                px: 1,
                height: "100vh",
                backgroundColor: theme.palette.background.default,
                overflow: "auto",
            }}
        >
            <Container maxWidth="lg">
                <Error message="Unexpected error" />
            </Container>
        </Box>
    );
}