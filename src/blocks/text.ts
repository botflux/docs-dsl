import {BlockInterface} from "./block.interface";

class TextElement implements BlockInterface {
  constructor(private readonly text: string) {
  }

  async render(): Promise<string> {
    return this.text
  }
}

export function text(content: string): BlockInterface {
  return new TextElement(content)
}