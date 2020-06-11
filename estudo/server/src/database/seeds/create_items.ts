import Knex from 'knex';

//deixar o conteudo pre programado para o usuario 
//serve pra popular o bancode dados com dados pre programaticos  
export async function seed(knex: Knex){
    await knex('items').insert([
        { title: 'Lâmpadas', image: 'lampadas.svg'},
        { title: 'Pilhas e Baterias', image: 'baterias.svg'},
        { title: 'Papéis e Papelão', image: 'papeis-papelao.svg'},
        { title: 'Residuos Eletrônicos', image: 'eletronicos.svg'},
        { title: 'Residuos Orgânicos', image: 'organicos.svg'},
        { title: 'Óleo de Cozinha', image: 'oleo.svg'},
    
    ])
}