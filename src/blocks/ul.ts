import {BlockInterface} from "./block.interface";
import {RenderOpts} from "./render-opts";

class UnorderedList implements BlockInterface {
  constructor(private readonly elements: BlockInterface[]) {
  }

  async render(opts: RenderOpts): Promise<string> {
    const renderedElements = await Promise.all(this.elements.map(async e => await e.render(opts)))

    return renderedElements.join("\n")
  }

}

export function ul(elements: BlockInterface[]): BlockInterface {
  return new UnorderedList(elements)
}