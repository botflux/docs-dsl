import { writeFile, mkdir } from "node:fs/promises"
import {StorageInterface} from "./storage.interface";
import {BlockInterface} from "./blocks/block.interface";
import {WritableInterface} from "./blocks/writable.interface";
import {Readable} from "stream";
import {createWriteStream} from "fs";
import {resolve} from "path";

export class FsStorage implements StorageInterface {
  constructor(
    private readonly output: string
  ) {
  }

  async write(element: WritableInterface & BlockInterface): Promise<void> {
    await this.ensureDirCreated(this.output)
    await writeFile(resolve(this.output, element.getPath()), await element.render({ storage: this }))
  }

  async writeStream(path: string, stream: Readable): Promise<void> {
    await this.ensureDirCreated(this.output)
    stream.pipe(createWriteStream(resolve(this.output, path), "utf-8"))
  }

  private async ensureDirCreated(dir: string): Promise<void> {
    await mkdir(dir, { recursive: true })
  }
}