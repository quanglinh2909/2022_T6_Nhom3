import { LayoutProps } from '@/models/common';
import { Container, Stack } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import Footer from '../footer';
import Header from '../header';

export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
    return (
        <Stack minHeight="100vh" position="relative">
            <Header />

            <Box component="main" flexGrow={1} mt={{ xs: 2, md: 0 }}>
                <Container maxWidth={false}>{children}</Container>
            </Box>
            <Footer />
            {/* <Stack display={{sm: 'flex', md: 'none'}} position='fixed' sx={{bottom: 0, right: 0}}>
        
      </Stack> */}
        </Stack>
    );
}
