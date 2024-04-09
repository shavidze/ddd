import { LogBook } from "../domain/LogBook"
import { ILogbookRepository } from "../application/ILogbookRepository"

export class InMemoryLogbookRepository implements ILogbookRepository {
  private readonly _logbooks: LogBook[] = []

  async save(logbook: LogBook): Promise<boolean> {
    this._logbooks.push(logbook)
    return true
  }
  async find(id: string): Promise<LogBook | null> {
    return this._logbooks.find((x) => x.id === id) ?? null
  }
}
