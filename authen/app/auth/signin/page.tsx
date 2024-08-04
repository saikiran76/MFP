'use client';

import React from 'react';
import { Avatar, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography, Box } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link href="/">Your Website</Link> {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn({ onSignIn }) {
  return (
    <Container component="main" maxWidth="xs">
      <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar style={{ margin: 1, backgroundColor: 'secondary' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={(e) => e.preventDefault()} style={{ width: '100%', marginTop: 1 }} noValidate>
          <TextField variant="outlined" margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus />
          <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained" color="primary" style={{ margin: '3, 0, 2' }} onClick={onSignIn}>
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/auth/signup">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
