import express, { request, response } from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);


app.use('/uploads', express.static(path.resolve(__dirname,'..', 'uploads'))); //serve para arquivos estaticos

app.listen(3333);




//Rota endereço completo da requisição 
//recurso  qual entidade estamos acessando do sistema

//GET Buscar uma ou mais informações do Back End
//POST criar uma nova informação no back end 
//PUT atualizar uma informação existente no back end
//DELETE remove uma informação do backend

//Request Param PArametros que vem na propria rota que identificam um recurso
//Query Param Parametros que vem na propria rota geralmente opcionais para filtros e paginação
//Request Body parametros para a criação /atualização de informações

/*const users = [
    'Diego',
    'Paulo',
    'Gabriel'
]

app.get('/users', (request, response) =>{
    console.log('listagem de usuarios');
    response.json([
        'diego',
        'maria',
        'daniel',
        'bruno'
    ]);
});

app.get('/users', (request, response) =>{
   const search = String(request.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    
   return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) =>{
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});

app.post('/users', (request, response) =>{

    const data = request.body;
    console.log(data);

    const user ={ 
        name: data.name,
        email:data.email
    };
    return response.json(user);
});*/