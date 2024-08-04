import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Container, Typography } from '@mui/material';

const AuthLayout = dynamic(() => import('nextjsApp/AuthLayout'));
const SignInPage = dynamic(() => import('nextjsApp/SignInPage'));
const SignUpPage = dynamic(() => import('nextjsApp/SignUpPage'));

export default function HomePage() {
  return (
    <Container>
      <Typography variant="h4">Welcome to the Home Page</Typography>
      <Link href="/auth/signin">Sign In</Link>
      <br />
      <Link href="/auth/signup">Sign Up</Link>
    </Container>
  );
}
