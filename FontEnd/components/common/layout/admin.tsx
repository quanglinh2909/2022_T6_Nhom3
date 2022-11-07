import { LayoutProps } from '@/models/index';
import { Box, Stack } from '@mui/material';
import * as React from 'react';

export function AdminLayout({ children }: LayoutProps) {
    return (
        <Stack minHeight="100vh">
            <Box component="main" flexGrow={1} padding={2}></Box>
        </Stack>
    );
}
