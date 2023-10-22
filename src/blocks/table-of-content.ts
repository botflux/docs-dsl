import {BlockInterface} from "./block.interface";
import {TableOfContentTitleInterface} from "./table-of-content-title.interface";
import {li} from "./list-item";
import {link} from "./link";
import {ul} from "./ul";
import {RenderOpts} from "./render-opts";

export class TableOfContent implements BlockInterface {
  constructor(
    private readonly tocElements: TableOfContentTitleInterface[]
  ) {
  }

  async render(opts: RenderOpts): Promise<string> {
    const elements = this.tocElements.map(
      e => li(link(e.getText(), e.getLink()), e.getLevel() - 1)
    )

    return await ul(elements).render(opts)
  }
}