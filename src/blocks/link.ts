import {BlockInterface} from "./block.interface";

class Link implements BlockInterface {
  constructor(
    private readonly text: string,
    private readonly link: string,
  ) {
  }

  async render(): Promise<string> {
    return `[${this.text}](${this.link})`
  }
}

export function link(text: string, link: string): BlockInterface {
  return new Link(text, link)
}