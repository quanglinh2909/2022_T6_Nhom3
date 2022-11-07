import { version } from '@/constants/index';
import facebookIcon from '@/images/social/facebook.png';
import groupIcon from '@/images/social/group.png';
import messengerIcon from '@/images/social/messenger.png';
import { Box, Container, Stack, Link as MuiLink, Typography } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function FooterDesktop() {
    const router = useRouter();
    return (
        <Container>
            <Stack>
                <hr
                    style={{
                        width: '100%',
                        backgroundImage:
                            'linear-gradient(to right, rgba(255,255,255,.2), rgba(255,255,255,1), rgba(255,255,255,.2))',
                        opacity: 0.3,
                        border: 0,
                        height: '1px',
                    }}
                />

                <Stack justifyContent="center" alignItems="center">
                    <Typography sx={{ fontFamily: 'Rajdhani', color: '#fff' }}>
                        @ {new Date().getFullYear()}, *Oryza* Version {version}
                    </Typography>
                </Stack>
            </Stack>
        </Container>
    );
}
