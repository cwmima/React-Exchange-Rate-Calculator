import React, { useState, useEffect } from 'react';
import { Grid, TextField, InputLabel, Select, MenuItem, FormControl, Typography } from '@material-ui/core';
// import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
// import DateFnsUtils from '@date-io/date-fns';
import './Calculator.css';
import { IUserInput, IRates } from '../../Common/Interfaces';

interface ICalculatorProps {
    SetUserInput: (a: IUserInput) => void;
}

function Calculator(props: ICalculatorProps) {
    const [BaseCurrency, setBaseCurrency] = useState<string>("NZD");
    const handleBaseCurrencyChange = (s: string) => setBaseCurrency(s);

    const [BaseCurrencyAmount, setBaseCurrencyAmount] = useState<number>(1);
    const handleBaseCurrencyAmountChange = (a: string) => {
        const parsedA: number = parseFloat(a);
        setBaseCurrencyAmount(parsedA);
    }

    const [TargetCurrency, setTargetCurrency] = useState<string>("AUD");
    const handleTargetCurrencyChange = (s: string) => {
        setTargetCurrency(s);
    }

    const [Rates, setRates] = useState<IRates>({});

    useEffect(() => {
        fetch('https://api.exchangeratesapi.io/latest?base=' + BaseCurrency)
            .then(response => response.json())
            .then(response => {
                console.log(response);
                setRates(response.rates);
            })
            .catch(() => console.log("Error occurred."));
    }, [BaseCurrency]);

    // const [HistoricalDate, setHistoricalDate] = useState<Date | null>(new Date('2014-08-18'));
    // const handleHistoricalDateChange = (date: Date | null) => setHistoricalDate(date);

    // const handleSubmit = () => {
    //     const UserInput: IUserInput = {
    //         BaseCurrency: BaseCurrency,
    //         // HistorialDate: HistorialDate,
    //     }
    //     props.SetUserInput(UserInput);
    // }

    return <div className="SearchBarContainer">
        <Grid container spacing={3}>
            {/* <Grid item xs={6} sm={3}> */}
            <Grid item>
                {/* <TextField
                    required
                    id="outlined-required"
                    label="Search"
                    variant="outlined"
                    error={HasFocus && SearchQuery === ""}
                    onClick={() => setHasFocus(true)}
                    value={SearchQuery}
                    onChange={e => handleSearchQueryChange(e.target.value)}
                /> */}
                <FormControl className=''>
                    <TextField
                        required
                        id="base-currency-amount"
                        label="Standard"
                        type="number"
                        inputProps={{ 'min': 0 }}
                        value={BaseCurrencyAmount}
                        onChange={e => handleBaseCurrencyAmountChange(e.target.value)}
                    />
                </FormControl>
                <FormControl className='selectControl'>
                    <InputLabel id="base-currency-label">Base Currency</InputLabel>
                    <Select
                        labelId="base-currency-label"
                        id="base-currency"
                        value={BaseCurrency}
                        onChange={e => handleBaseCurrencyChange(e.target.value as string)}
                    >
                        <MenuItem value={'NZD'}>New Zealand Dollar</MenuItem>
                        <MenuItem value={'AUD'}>Australian Dollar</MenuItem>
                        <MenuItem value={'EUR'}>Euro</MenuItem>
                        <MenuItem value={'USD'}>US Dollar</MenuItem>
                        <MenuItem value={'GBP'}>British Pound</MenuItem>
                        <MenuItem value={'CNY'}>Chinese Yuan</MenuItem>
                        <MenuItem value={'HKD'}>Hong Kong Dollar</MenuItem>
                        <MenuItem value={'JPY'}>Japanese Yen</MenuItem>
                        <MenuItem value={'INR'}>Indian Rupee</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item>
                <Typography variant="h1">
                    ${Math.round((BaseCurrencyAmount * Rates[TargetCurrency] + Number.EPSILON) * 100) / 100}
                </Typography>
                <FormControl className='selectControl'>
                    <InputLabel id="target-currency-label">Target Currency</InputLabel>
                    <Select
                        labelId="target-currency-label"
                        id="target-currency"
                        value={TargetCurrency}
                        onChange={e => handleTargetCurrencyChange(e.target.value as string)}
                    >
                        <MenuItem value={'NZD'}>New Zealand Dollar</MenuItem>
                        <MenuItem value={'AUD'}>Australian Dollar</MenuItem>
                        <MenuItem value={'EUR'}>Euro</MenuItem>
                        <MenuItem value={'USD'}>US Dollar</MenuItem>
                        <MenuItem value={'GBP'}>British Pound</MenuItem>
                        <MenuItem value={'CNY'}>Chinese Yuan</MenuItem>
                        <MenuItem value={'HKD'}>Hong Kong Dollar</MenuItem>
                        <MenuItem value={'JPY'}>Japanese Yen</MenuItem>
                        <MenuItem value={'INR'}>Indian Rupee</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    </div>
}

export default Calculator;