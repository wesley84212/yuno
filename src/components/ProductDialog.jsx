import React, { useState, useEffect } from 'react'
import { UpdatePurchase, UpdateProduct, CreateSale, UpdateSale } from '../action/index';
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
import { Radio } from '@material-ui/core';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

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
    const [saleList, setSaleList] = React.useState(false);

    const [productName, setProductName] = useState(props.purchase.product.name)
    const [productCost, setProductCost] = useState(props.purchase.cost)
    const [productDate, setProductDate] = useState(props.purchase.purchaseDate)

    const [saleAmount, setSaleAmount] = useState(props.sale?.saleAmount)
    const [saleCharge, setSaleCharge] = useState(props.sale?.saleCharge || 0)
    const [saleDate, setSaleDate] = useState(props.sale?.saleDate)
    const [saleType, setSaleType] = useState("")


    const handSaleType = (event) => {
        setSaleType(event.target.value);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleSaleOpen = (event) => {
        setSaleList(event.target.value);
    };

    const handleClose = async () => {
        setOpen(false);
    };

    const setSaleObject = () => {
        let saleInput = {
            product: ""
        }
        saleInput.product = props.purchase.product
        saleInput.saleAmount = saleAmount
        saleInput.saleCharge = saleCharge
        saleInput.saleCharge = saleCharge
        saleInput.saleDate = saleDate
        saleInput.saleType = saleType

        return saleInput
    }

    const handleSave = async () => {
        try {
            const income = (saleAmount - (productCost + saleCharge)).toString()
            props.purchase.product.name = productName
            props.purchase.cost = productCost
            props.purchase.purchaseDate = productDate
            props.purchase.income = income || 0
            if (!!props.sale) {
                let saleInput = setSaleObject()
                console.log(saleInput)
                await UpdateSale(saleInput, props.sale.id)
            } else {
                let saleInput = setSaleObject()
                console.log(saleInput)
                await CreateSale(saleInput)
            }
            await UpdatePurchase(props.purchase, props.purchase.id)
            await UpdateProduct(props.purchase.product, props.purchase.product.id)
        } catch (err) {
            console.log(err)
        }
        setOpen(false);
    };


    const results = (<>
        <div id="results" className="search-results">
            <TextField id="standard-basic" label="售出價格"
                defaultValue={props.sale?.saleAmount} onChange={element => setSaleAmount(parseInt(element.target.value))}
            />
            <TextField id="standard-basic" label="手續費"
                defaultValue={props.sale?.saleCharge} onChange={element => setSaleCharge(parseInt(element.target.value))}
            />
            <TextField id="standard-basic" label="淨利"
                disabled
                value={(saleAmount - (productCost + saleCharge)).toString()}
            />
            <TextField
                id="date"
                label="售出日期"
                type="date"
                defaultValue={props.sale?.saleDate}
                onChange={element => setSaleDate(element.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <RadioGroup row aria-label="銷售方式" name="gender2" value={saleType} onChange={handSaleType}>
                <FormControlLabel value="0" control={<Radio />} label="蝦皮" />
                <FormControlLabel value="1" control={<Radio />} label="賣貨便" />
                <FormControlLabel value="2" control={<Radio />} label="好賣家" />
            </RadioGroup>
        </div>
    </>)
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
                    defaultValue={props.purchase.product.name} onChange={element => setProductName(element.target.value)}
                />
                <TextField id="standard-basic" label="商品成本"
                    defaultValue={props.purchase.cost} onChange={element => setProductCost(element.target.value)}
                />
                <TextField
                    id="date"
                    label="進貨日期"
                    type="date"
                    defaultValue={props.purchase.purchaseDate}
                    onChange={element => setProductDate(element.target.value)}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <RadioGroup row aria-label="gender" name="gender1" value={saleList} onChange={handleSaleOpen}>
                    <FormControlLabel value="true" control={<Radio />} label="enable" />
                    <FormControlLabel value="false" control={<Radio />} label="disable" />
                </RadioGroup>
                {saleList === "true" && results}
                {saleList === "false" && null}

            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleSave} color="primary">
                    Save changes
                    </Button>
            </DialogActions>
        </Dialog>
    </td>);
}