import {BlockInterface} from "./block.interface";
import {RenderOpts} from "./render-opts";

class ListElement implements BlockInterface {
  constructor(
    private readonly element: BlockInterface,
    private readonly indent: number
  ) {
  }

  async render(opts: RenderOpts): Promise<string> {
    return `${this.tabs}- ${await this.element.render(opts)}`
  }

  private get tabs(): string {
    return [...new Array(this.indent)].map(() => "\t").join("")
  }
}

export function li(element: BlockInterface, ident: number = 0): BlockInterface {
  return new ListElement(element, ident)
}