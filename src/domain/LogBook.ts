import { randomUUID } from "crypto"

export class LogBook {
  public constructor(
    public readonly name: string,
    public readonly userId: string,
    public readonly id: string = randomUUID()
  ) {}
}
