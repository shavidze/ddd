import { LogBook } from "../domain/LogBook"
import { ILogbookRepository } from "./ILogbookRepository"

interface ICreateLogbookDto {
  userId: string
  name: string
}

interface ICreateLogbookResult {
  logbookId: string
}

export class CreateLogBookUseCase {
  public constructor(private readonly _logbookRepo: ILogbookRepository) {}

  public async execute(
    input: ICreateLogbookDto
  ): Promise<ICreateLogbookResult> {
    const logbook = new LogBook(input.name, input.userId)

    const result = await this._logbookRepo.save(logbook)

    if (!result) {
      throw new Error("Could not save logbook.")
    }

    return {
      logbookId: "",
    }
  }
}
