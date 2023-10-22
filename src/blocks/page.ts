import {BlockInterface} from "./block.interface";
import {isTableOfContentTitle} from "./is-table-of-content-title";
import {TableOfContentTitleInterface} from "./table-of-content-title.interface";
import {TableOfContent} from "./table-of-content";
import {isTableOfContentPosition} from "./is-table-of-content-position";
import {writeFileSync} from "fs";
import {WritableInterface} from "./writable.interface";
import {RenderOpts} from "./render-opts";

class Page implements BlockInterface, WritableInterface {
  constructor(
    private readonly path: string,
    private readonly elements: BlockInterface[]
  ) {
  }

  async render(opts: RenderOpts): Promise<string> {
    const tocElements = this.elements.filter(isTableOfContentTitle) as unknown as TableOfContentTitleInterface[]
    const toc = new TableOfContent(tocElements)

    return (await Promise.all(this.elements
      .map(async element => isTableOfContentPosition(element)
        ? await toc.render(opts)
        : await element.render(opts))
      )).join("\n\n")
  }

  getPath(): string {
    return this.path
  }
}

export function page(path: string, elements: BlockInterface[]): Page {
  return new Page(path, elements)
}