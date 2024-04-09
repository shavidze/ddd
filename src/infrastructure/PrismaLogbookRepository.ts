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
}
