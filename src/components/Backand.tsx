

export interface IExpenses{
    id: number;
    descricao: string;
    categoria: string;
    valor: number;
    mes:string;
    dia:string;
}

export function getExpenses(): Promise<IExpenses[]>{
    return fetch(`http://localhost:8080/despesas`).then(resp => {
        return resp.json();
    })
}