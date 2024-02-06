import { Container, Box, AppBar, Toolbar, Typography, useTheme, useMediaQuery } from '@mui/material';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Container maxWidth={isMobile ? 'sm' : 'md'}>
                    <Outlet />
                </Container>
            </Box>
        </Box>
    );
};

export default Layout;