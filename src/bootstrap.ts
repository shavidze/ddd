import { CreateLogBookUseCase } from "./application/CreateLogBookUseCase"
import { InMemoryLogbookRepository } from "./infrastructure/InMemoryLogbookRepository"
import { ApiServer } from "./presentation/ApiServer"
import { CreateLogBookController } from "./presentation/CreateLogBookController"

export async function bootstrap(): Promise<void> {
  const inMemoryRepo = new InMemoryLogbookRepository()
  const useCase = new CreateLogBookUseCase(inMemoryRepo)
  const controller = new CreateLogBookController(useCase)
  await ApiServer.run(9000, controller)
}

bootstrap()
