'use client';

import { Button, Container, Typography } from '@mui/material';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Home() {
  const { data: session } = useSession();

  return (
    <Container maxWidth="sm" sx={{ mt: 10, textAlign: 'center' }}>
      {session ? (
        <>
          <Typography variant="h5">Welcome, {session.user?.name}</Typography>
          <Button variant="contained" color="error" onClick={() => signOut()} sx={{ mt: 2 }}>
            Sign Out
          </Button>
        </>
      ) : (
        <>
          <Typography variant="h4" gutterBottom>
            Sign in with Google  <Image src="/google.png" alt="Google" width={32} height={32} />
          </Typography>
          <Button variant="contained" onClick={() => signIn('google')}>
            Sign in
          </Button>
        </>
      )}
    </Container>
  );
}
