// app/auth/signup/page.js
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

export default function SignUp({ onSignIn }) {
  return (
    <Container component="main" maxWidth="xs">
      <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar style={{ margin: 1, backgroundColor: 'secondary' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={(e) => e.preventDefault()} style={{ width: '100%', marginTop: 3 }} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField autoComplete="fname" name="firstName" variant="outlined" required fullWidth id="firstName" label="First Name" autoFocus />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField variant="outlined" required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="lname" />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
            </Grid>
            <Grid item xs={12}>
              <TextField variant="outlined" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="I want to receive inspiration, marketing promotions and updates via email." />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" style={{ margin: '3, 0, 2' }} onClick={onSignIn}>
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/auth/signin">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
