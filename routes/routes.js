import { Router } from 'express' // Importa o Router do módulo express
import TaskController from '../controller/TaskController'

const routes = Router() // Cria uma instância do Router

// Define rotas
routes.get('/', TaskController.getAllTasks) 
routes.post('/create', TaskController.createTask)
routes.get('/getById/:id/:method', TaskController.getById)
routes.post('/updateOne/:id', TaskController.updateOneTask)
routes.get('/deleteOne/:id', TaskController.deleteOneTask)
routes.get('/check/:id', TaskController.taskCheck)


export default routes // Exporta a instância do Router como padrão
