import {PrismaClient, Todo} from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.get('/api/todos', async (req, res) => {
    const todos = await prisma.todo.findMany();
    res.json(todos?.map(todo => ({...todo, tags: JSON.parse(todo.tags)})))
})

app.post(`/api/todo`, async (req, res) => {
    const {text} = req.body
    const newTodo = await prisma.todo.create({
        data: {text},
    })
    res.json({...newTodo, tags: JSON.parse(newTodo.tags)});
})

app.delete(`/api/todo/:id`, async (req, res) => {
    const {id} = req.params
    const todo = await prisma.todo.delete({
        where: {
            id: id,
        },
    })
    res.json(todo)
})

app.patch('/api/todo', async (req, res) => {
    const {text, tags, id, status} = req.body as Todo;

    try {
        const updatedPost = await prisma.todo.update({
            where: {id},
            data: {text, tags: JSON.stringify(tags), status},
        })
        res.json({...updatedPost, tags: JSON.parse(updatedPost.tags)})
    } catch (error) {
        res.json({error})
    }
})


const server = app.listen(3333, () => console.log(`🚀 Server ready at: http://localhost:3333`))
