import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from "@material-ui/core";

function SignIn({signOpen, handleSignClose}) {
    return (
        <Dialog open={signOpen} onClose={handleSignClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Log in</DialogTitle>
            <DialogContent>
                <DialogContentText>Log in to see videos</DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="pass"
                    label="Password"
                    type="password"
                    fullWidth
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="passConf"
                    label="Password Confirm"
                    type="password"
                    fullWidth
                />
            </DialogContent>

            <DialogActions>
                <Button onClick={handleSignClose} color="primary">Cancel</Button>
                <Button onClick={handleSignClose} color="primary">Sign in</Button>
            </DialogActions>
        </Dialog>
    );
}

export default SignIn;
