import { getExpenses } from "./Backand";


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box } from "@mui/material";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const cabecalho = ["Despesa", "Categoria", "Dia", "Valor(R$)"];

const months = ["Jan", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]


const ExpensesScreen = () => {
    /* getExpenses().then(expenses => {
        for(const expense of expenses) {
            console.log(expense)
        }
    }) */
    const [ano, setAno] = React.useState('');
    const [mes, setMes] = React.useState('');

    const handleChangeAno = (event: SelectChangeEvent) => {
        setAno(event.target.value);
    };
    const handleChangeMes = (event: SelectChangeEvent) => {
        setMes(event.target.value);
    };

    console.log(ano, mes)


    return (
        <Box width="100vw">
            <Box display="flex" padding="10px">
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Ano</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={ano}
                        onChange={handleChangeAno}
                        label="Ano"
                    >
                        <MenuItem value="">
                            <em>Ano</em>
                        </MenuItem>
                        <MenuItem value={2020}>2020</MenuItem>
                        <MenuItem value={2021}>2021</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Mês</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={mes}
                        onChange={handleChangeMes}
                        label="Mês"
                    >
                        <MenuItem value="">
                            <em>Mês</em>
                        </MenuItem>
                        {months.map((month, index) =><MenuItem key={index} value={(index+1)}>{month}</MenuItem>)}
                    </Select>
                </FormControl>
                





                <Box flex='1'><h3>Despesa Total: R$ </h3></Box>
            </Box>

            <TableContainer component={"div"}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {cabecalho.map(item => <TableCell key={item} align="center">{item} </TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            {cabecalho.map(item => <TableCell key={item} align="center">x </TableCell>)}
                        </TableRow>
                        <TableRow>
                            {cabecalho.map(item => <TableCell key={item} align="center">x </TableCell>)}
                        </TableRow>
                        <TableRow>
                            {cabecalho.map(item => <TableCell key={item} align="center">x </TableCell>)}
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

    );
}

export default ExpensesScreen;