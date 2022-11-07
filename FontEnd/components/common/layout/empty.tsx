import { LayoutProps } from '@/models/index';
import { Box, Container, Stack } from '@mui/material';
import * as React from 'react';

export function EmptyLayout({ children }: LayoutProps) {
    return (
        // }
        <Stack minHeight="100vh">
            <Box component="main" flexGrow={1}>
                <Container maxWidth={false}>{children}</Container>
            </Box>
        </Stack>
    );
}
