import { PrismaClient } from "@prisma/client"
import { CreateLogBookUseCase } from "./application/CreateLogBookUseCase"
import { InMemoryLogbookRepository } from "./infrastructure/InMemoryLogbookRepository"
import { PrimsaLogbookRepository } from "./infrastructure/PrismaLogbookRepository"
import { ApiServer } from "./presentation/ApiServer"
import { CreateLogBookController } from "./presentation/CreateLogBookController"

export async function bootstrap(): Promise<void> {
  const inMemoryRepo = new InMemoryLogbookRepository()

  const client = new PrismaClient()
  const prismaRepo = new PrimsaLogbookRepository(client)

  const useCase = new CreateLogBookUseCase(prismaRepo)
  const controller = new CreateLogBookController(useCase)
  await ApiServer.run(9000, controller)
}

bootstrap()
