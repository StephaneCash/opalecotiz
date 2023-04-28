import React, { useState, useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import axios from 'axios';
import { baseUrl } from '../bases/basesUrl';
import Loader from '../components/loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import { ContextApp } from '../context/AppContext';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'© '}
            <a color="inherit" href="https://opaleinfluence.com/">
                Opale Production
            </a>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Login() {

    const [clicBtn, setClicBtn] = useState(false);

    const { setUserConnected } = useContext(ContextApp);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setClicBtn(true);
        const data = new FormData(event.currentTarget);

        if (!data.get('email')) {
            toast.error('Entrer une adresse email svp');
            setClicBtn(false);
        } else {
            if (!data.get('password')) {
                toast.error('Entrer un mot de passe svp');
                setClicBtn(false);
            } else {
                const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (pattern.test(data.get('email'))) {
                    try {
                        const auth = await axios.post(`${baseUrl}/users/authentification`,
                            { email: data.get('email'), password: data.get('password') });
                        if (auth.status === 200) {
                            toast.success(auth && auth.data && auth.data.message);
                            setClicBtn(false);
                            setUserConnected(auth && auth.data && auth.data.id);
                            localStorage.setItem('tokenUser', JSON.stringify(auth.data && auth.data.jeton));
                            window.location = '/admin/dashboard'
                        }
                    } catch (error) {
                        console.log(error);
                        toast.error(error && error.response && error.response.data && error.response.data.message);
                        setClicBtn(false);
                        if (error.code === "ERR_NETWORK") {
                            toast.error("Impossible d'établir une connexion au serveur");
                        }
                    }

                } else {
                    toast.error('Adresse email invalide');
                    setClicBtn(false);
                }
            }
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#333' }}>
                        <AccountCircle />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Se connecter
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Adresse email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Mot de passe"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Se souvenir de moi"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            {
                                clicBtn ?
                                    <Loader /> : "Connexion"
                            }
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
            <ToastContainer />
        </ThemeProvider>
    );
}