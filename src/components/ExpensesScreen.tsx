import { getExpenses } from "./Backand";
import { IExpenses } from "./Backand";


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


import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import AdbIcon from '@mui/icons-material/Adb';



const cabecalho = ["Despesa", "Categoria", "Dia", "Valor(R$)"];

const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]


const ExpensesScreen = () => {

    const [ano, setAno] = React.useState('');
    const [mes, setMes] = React.useState('');
    const [expenses, setExpenses] = React.useState<IExpenses[]>([]);
    const [tot, setTot] = React.useState(0);


    React.useEffect(() => {
        getExpenses(ano, mes).then(expenses => setExpenses(expenses))
    }, [ano, mes]);


    React.useEffect(() => {
        const total = expenses.reduce((accumulator, expense) => accumulator + expense.valor, 0);
        setTot(total);
    }, [expenses])




    const handleChangeAno = (event: SelectChangeEvent) => {
        setAno(event.target.value);
        
    };
    const handleChangeMes = (event: SelectChangeEvent) => {
        setMes((event.target.value).padStart(2, '0'));

    };



    return (
        <Box width="100vw">
            <Box>
                <AppBar position="static">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={{
                                    mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                Expenses Screen
                            </Typography>

                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"

                                    color="inherit"
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href=""
                                sx={{
                                    mr: 2,
                                    display: { xs: 'flex', md: 'none' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                ExpensesScreen
                            </Typography>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>
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
                        <MenuItem value={"2020"}>2020</MenuItem>
                        <MenuItem value={"2021"}>2021</MenuItem>
                    </Select>
                </FormControl>

                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Mês</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={months[(+mes) - 1]}
                        onChange={handleChangeMes}
                        label="Mês"
                    >
                        <MenuItem value="">
                            <em>Mês</em>
                        </MenuItem>
                        {months.map((month, index) => <MenuItem key={index} value={`${(index + 1)}`}>{month}</MenuItem>)}
                    </Select>
                </FormControl>

                <Box paddingRight="18px" flex={1} textAlign='end'><h3>Despesa Total: R${(tot).toFixed(2)} </h3></Box>
            </Box>

            <TableContainer component={"div"}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {cabecalho.map(item => <TableCell key={item} align="center">{item} </TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {expenses.map((expense) =>
                            <TableRow key={expense.id}>
                                <TableCell align="center"><strong>{expense.descricao}</strong>  </TableCell>
                                <TableCell align="center"> {expense.categoria} </TableCell>
                                <TableCell align="center"> {expense.dia} </TableCell>
                                <TableCell align="center"> {expense.valor} </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>

    );
}

export default ExpensesScreen;