import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const todoData: Prisma.TodoCreateInput[] = [
  {
    text: 'Buy milk',
    tags: '["food","grocery"]'
  },
  {
    text: 'This is a sample todo',
    tags: '["sample"]'
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of todoData) {
    const user = await prisma.todo.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
