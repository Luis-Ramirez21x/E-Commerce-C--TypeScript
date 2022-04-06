import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { Navigate, useLocation } from "react-router";

export default function ServerError() {
    const navigate = useNavigate();
    //use history is replaced with use navigate in react-router 6
    const { state } = useLocation<any>();

    return (
        <Container component={Paper}>
            {state?.error ? (
                <>
                    <Typography variant='h3' color='error' gutterBottom>{state.error.title}</Typography>
                    <Divider />
                    <Typography>{state.error.detail || 'Internal server error'}</Typography>
                </>
            ) : (
                <Typography variant='h5' gutterBottom>Server Error</Typography>
            )}
            <Button onClick={() => navigate("/catalog")}>Go back to the store</Button>
        </Container>
    )
}