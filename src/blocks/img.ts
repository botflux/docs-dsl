import {BlockInterface} from "./block.interface";

class Image implements BlockInterface {
  constructor(
    private readonly path: string,
    private readonly alt: string
  ) {
  }

  async render(): Promise<string> {
    return `![${this.alt}](${this.path})`;
  }
}

export function img (path: string, alt: string): BlockInterface {
  return new Image(path, alt)
}