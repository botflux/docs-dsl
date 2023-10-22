import {WritableInterface} from "./blocks/writable.interface";
import {BlockInterface} from "./blocks/block.interface";

export interface StorageInterface {
  /**
   * Write the documentation to disk.
   *
   * @param element
   */
  write (element: WritableInterface & BlockInterface): Promise<void>

  /**
   * Write a stream into the storage.
   *
   * @param path
   * @param stream
   */
  writeStream (path: string, stream: NodeJS.ReadableStream): Promise<void>
}