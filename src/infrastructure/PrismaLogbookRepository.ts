import { PrismaClient } from "@prisma/client"
import { ILogbookRepository } from "../application/ILogbookRepository"
import { LogBook } from "../domain/LogBook"

export class PrimsaLogbookRepository implements ILogbookRepository {
  public constructor(private readonly _client: PrismaClient) {}

  async save(logbook: LogBook): Promise<boolean> {
    await this._client.logbook.create({
      data: {
        id: logbook.id,
        name: logbook.name,
        userId: logbook.userId,
      },
    })
    return true
  }

  async find(id: string): Promise<LogBook | null> {
    const result = await this._client.logbook.findUnique({
      where: {
        id: id,
      },
    })

    if (!result) return result

    return new LogBook(result.name, result.userId, result.id)
  }
}
