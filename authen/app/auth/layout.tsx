import React from 'react';
import { CssBaseline, Container } from '@mui/material';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) : JSX.Element => {
  return (
    <Container>
      <CssBaseline/>
      {children}
    </Container>
  );
}

export default AuthLayout;
