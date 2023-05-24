Construa, utilizando React, TypeScript Material-UI e React Router, uma
aplicação simplificada de gestão de despesas pessoais. Neste trabalho, a
aplicação terá uma única funcionalidade, exibir a lista de todas as despesas
de um determinado ano/mês selecionado e a soma das despesas. A seguir,
temos um exemplo da possível interface.

2
Os dados exibidos serão buscados de um Back End fornecido pelo professor,
que será postado no fórum de avisos, com instruções de execução. O Back
End oferece um único endpoint /despesas, que retorna um array de objetos,
como exemplificado a seguir:

[{
"id": 1,
"descricao": "Consulta médica",
"categoria": "Saúde",
"valor": 197.23,
"mes": "2020-10",
"dia": "25"
},
...
]

Adicionalmente, podemos filtrar por mês e ordenar os resultados por dia
passando os seguintes parâmetros na requisição:

http://localhost:3001/despesas?mes=2021-01&_sort=dia

Sua aplicação não precisa ter a mesma aparência do exemplo dado, mas
precisa atender aos seguintes requisitos:
1. Utilize TypeScript. Defina uma interface para descrever o objeto que
representa uma despesa e use-o na aplicação.
2. Deve existir dois campos para selecionar Ano e Mês na interface, usando
o componente Select do Material-UI. Ao selecionar, a URL deve mudar
para refletir o ano/mês selecionado e os dados devem ser exibidos. Ou
seja, você deverá receber ano e mês no formato que achar adequado como
um parâmetro da rota, usando React Router.

3
3. Exiba a soma total das despesas, além da lista de despesas, mostrando os
campos descricao, categoria, dia e valor.
4. Utilize componentes do Material-UI, quando possível.

Atividades
Os alunos deverão desempenhar as seguintes atividades:
1. Crie a aplicação, usando TypeScript.
2. Adicione as bibliotecas Material-UI e React Router.
3. Busque os dados do Back End para um mês fixo.
4. Construa sua interface e exiba os dados na aplicação.
5. Implemente a mudança de ano/mês usando React Router.
