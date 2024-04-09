import express from "express"
import { CreateLogBookController } from "./CreateLogBookController"
import { GetLogBookController } from "./GetLogbookController"

export class ApiServer {
  public static async run(
    port: number,
    controller: CreateLogBookController,
    getController: GetLogBookController
  ): Promise<void> {
    const app = express()
    app.use(express.json())

    app.post("/logbooks", (req, res) => controller.handle(req, res))

    app.get("/logbooks", (req, res) => getController.handle(req, res))

    app.listen(port, () => {
      console.log("server is running on port ", port)
    })
  }
}
