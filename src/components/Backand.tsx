

export interface IExpenses{
    id: number;
    descricao: string;
    categoria: string;
    valor: number;
    mes:string;
    dia:string;
}

export function getExpenses(year:string, month:string): Promise<IExpenses[]>{
    return fetch(`http://localhost:8080/despesas?mes=${year}-${month}&_sort=dia`).then(resp => {
        return resp.json();
    })
}