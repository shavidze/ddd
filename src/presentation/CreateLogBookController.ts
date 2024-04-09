import { Request, Response } from "express"
import { CreateLogBookUseCase } from "../application/CreateLogBookUseCase"

export class CreateLogBookController {
  public constructor(private readonly _useCase: CreateLogBookUseCase) {}

  public async handle(req: Request, res: Response): Promise<void> {
    const userId = "tmpId"
    const response = await this._useCase.execute({
      name: req.body.name,
      userId: userId,
    })
    res.status(201).json({ id: response.logbookId })
  }
}
