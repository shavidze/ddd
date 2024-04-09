import { randomUUID } from "crypto"

interface ICreateLogbookDto {
  userId: string
  name: string
}

interface ICreateLogbookResult {
  logbookId: string
}

class LogBook {
  public constructor(
    public readonly name: string,
    public readonly userId: string = randomUUID()
  ) {}
}

// for DB use dependency inversion principle

interface ILogbookRepository {
  save(logbook: LogBook): Promise<boolean>
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
