import React from 'react';
import { Box } from '@mui/material';
import FooterDesktop from './footer-desktop';

export interface FooterProps {}

export default function Footer(props: FooterProps) {
    return <>
        <FooterDesktop />
    </>;
}
