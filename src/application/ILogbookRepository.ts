import { LogBook } from "../domain/LogBook"

// for DB use dependency inversion principle
export interface ILogbookRepository {
  save(logbook: LogBook): Promise<boolean>
  find(id: string): Promise<LogBook | null>
}
