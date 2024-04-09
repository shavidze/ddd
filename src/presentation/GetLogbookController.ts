import { Request, Response } from "express"
import {
  CreateLogBookUseCase,
  ICreateLogbookResult,
} from "../application/CreateLogBookUseCase"
import { GetLogbookUseCase } from "../application/GetLogbookUseCase"

export class GetLogBookController {
  public constructor(private readonly _useCase: GetLogbookUseCase) {}

  public async handle(req: Request, res: Response): Promise<void> {
    const result = await this._useCase.execute({
      id: req.body.id,
    })

    // need to adjust the contract of response
    res.status(201).json(result)
  }
}
