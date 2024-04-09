import { Request, Response } from "express"
import {
  CreateLogBookUseCase,
  ICreateLogbookResult,
} from "../application/CreateLogBookUseCase"

export class CreateLogBookDto implements ICreateLogbookResult {
  public readonly logbookId: string
  public constructor(id: string) {
    this.logbookId = id
  }
}

export class CreateLogBookController {
  public constructor(private readonly _useCase: CreateLogBookUseCase) {}

  public async handle(req: Request, res: Response): Promise<void> {
    const userId = "tmpId"
    const result = await this._useCase.execute({
      name: req.body.name,
      userId: userId,
    })
    const response: CreateLogBookDto = new CreateLogBookDto(result.logbookId)

    // need to adjust the contract of response
    res.status(201).json(response)
  }
}
