
import { Request, Response } from 'express';
import knex from '../database/connection';
class PointsController {
    async create (request:Request, response:Response){
        const { //desestruturação explo: cosnt name = request.bary.name, cosnt email = request.bary.email... resumo de um jeito mais simplificado
            name,
            email,
            whatapp,
            latitude,
            longetude,
            city,
            uf,
            items  //arrey de numeros = array dos itens
        } = request.body;
    
        const trx = await knex.transaction(); //propriedade do knex que não execute caso qualquer query não execute funcionando as duas em paralelo
    
        const point = {
            image:'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
            name,
            email,
            whatapp,
            latitude,
            longetude,
            city,
            uf
        };
        const insertedIds = await trx('points').insert(point);// variavel que possui os ids dos resgistos inceridos
    
    
        const point_id = insertedIds[0]; //inicialização

        const pointItems = items.map((item_id:number)=>{ //pecorre o array dos itens já inceridos e add no point_itens
            return {
                item_id,
                point_id,
            }
        })

        await trx('point_items').insert(pointItems); // relacionamento com a tabela de itens com a tabela de points
        


        await trx.commit();

        return response.json({ 
            id: point_id,
            ... point,
        });
    
    }

    async show (request:Request, response:Response){
        const { id } =  request.params; // desestruturação do id

        const point = await knex('points').where('id', id).first();

        if (!point) {
            return response.status(400).json({message: 'Point not found.'});
        }

        /* SELECT * FROM items JOIN points_items ON itens.id =point_items.item_id
            WHERE point_items.point_id = {id}
         */
        const items = await knex('items')
        .join('point_items','items.id', '=','point_items.item_id')
        .where('point_items.point_id', id)
        .select('items.title');

        return response.json({point, items});
    }

    // query params = sempre que lidamos com filtro, paginação
    async index (request:Request, response:Response){
        const { city, uf, items} = request.query;

        const parsedItems = String(items).split(',').map(item => Number(item.trim())); // transformar os dados recebidos em numericos

        const points = await knex('points')
            .join('point_items', 'points.id','=','point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf',String(uf))
            .distinct()
            .select('points.*');
        
        return response.json(points)
    }
}

export default PointsController; 