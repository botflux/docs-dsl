import {BlockInterface} from "./block.interface";
import {TableOfContentPositionInterface} from "./table-of-content-position.interface";

class TableOfContentPosition implements BlockInterface, TableOfContentPositionInterface {
  constructor() {
  }

  tocPosition: true = true

  async render(): Promise<string> {
    return ""
  }
}

export function toc(): BlockInterface {
  return new TableOfContentPosition()
}