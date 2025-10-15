import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, Box, Typography } from '@mui/material';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <Box
      sx={{
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" mb={2}>
        Welcome to FitFlex
      </Typography>

      {!isAuthenticated && (
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#FF2625',
            color: 'white',
            '&:hover': { backgroundColor: '#e02020' },
          }}
          onClick={() => loginWithRedirect()}
        >
          Login with Auth0
        </Button>
      )}
    </Box>
  );
};

export default Login;
