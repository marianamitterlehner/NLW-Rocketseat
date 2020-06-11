import {Request, Response } from 'express';
import knex from '../database/connection';  //conexão com o banco

class ItemsController {
    async index ( request:Request, response:Response) { //metodo index utilizado para listagem 

        const items = await knex('items').select('*');
    
        //transformar o dado de forma que fique mais facil o intendimento pra quem ve = serialização
        const serializedItems = items.map(item =>{
            return {       //exibe os dos na tela
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`,
            };
        });
        
        return response.json(serializedItems);
    }
}

export default ItemsController;

// index = listagem
// show = mostrar só um registro 
// create, update, delete