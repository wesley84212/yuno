import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {
    KeyboardDatePicker,
} from '@material-ui/pickers';

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
    const [open, setOpen] = React.useState(false);
    const [productName, setProductName] = useState(props.productName)
    const [productCost, setProductCost] = useState(props.productCost)
    const [productDate, setProductDate] = useState(props.purchaseDate)

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        console.log(productName)
        console.log(productCost)
        console.log(productDate)
        setOpen(false);
    };

    return (<td>
        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
            修改
            </Button>
        <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                修改商品
                </DialogTitle>
            <DialogContent dividers>
                {/* toDo use DI */}
                <TextField id="standard-basic" label="商品名稱"
                    defaultValue={props.productName} onChange={element => setProductName(element.target.value)}
                />
                <TextField id="standard-basic" label="商品成本"
                    defaultValue={props.productCost} onChange={element => setProductCost(element.target.value)}
                />
                <TextField
                    id="date"
                    label="進貨日期"
                    type="date"
                    defaultValue={props.purchaseDate}
                    onChange={element => setProductDate(element.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Save changes
                    </Button>
            </DialogActions>
        </Dialog>
    </td>);
}