import { LogBook } from "../domain/LogBook"
import { IUseCase } from "../shared/IUseCase"
import { ILogbookRepository } from "./ILogbookRepository"

interface IGetLogbookDto {
  id: string
}

interface IGetLogbookResult {}

export class LogBookDto {
  public constructor(public readonly id: string, public name: string) {}
  public static from(logbook: LogBook): LogBookDto {
    return new LogBookDto(logbook.id, logbook.name)
  }
}
export class GetLogbookUseCase implements IUseCase<IGetLogbookDto, LogBookDto> {
  public constructor(private readonly _logbookRepository: ILogbookRepository) {}

  async execute(input: IGetLogbookDto): Promise<LogBookDto> {
    const logbook = await this._logbookRepository.find(input.id)
    if (!logbook) {
      throw new Error("not fount")
    }

    return logbook
  }
}
