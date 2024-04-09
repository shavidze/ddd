import { PrismaClient } from "@prisma/client"
import { CreateLogBookUseCase } from "./application/CreateLogBookUseCase"
import { GetLogbookUseCase } from "./application/GetLogbookUseCase"
import { InMemoryLogbookRepository } from "./infrastructure/InMemoryLogbookRepository"
import { PrimsaLogbookRepository } from "./infrastructure/PrismaLogbookRepository"
import { ApiServer } from "./presentation/ApiServer"
import { CreateLogBookController } from "./presentation/CreateLogBookController"
import { GetLogBookController } from "./presentation/GetLogbookController"

export async function bootstrap(): Promise<void> {
  const inMemoryRepo = new InMemoryLogbookRepository()

  const client = new PrismaClient()
  const prismaRepo = new PrimsaLogbookRepository(client)

  const useCase = new CreateLogBookUseCase(prismaRepo)
  const controller = new CreateLogBookController(useCase)

  const getUseCase = new GetLogbookUseCase(prismaRepo)
  const getController = new GetLogBookController(getUseCase)

  await ApiServer.run(9000, controllerm getController)
}

bootstrap()
