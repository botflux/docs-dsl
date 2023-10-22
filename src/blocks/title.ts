import {BlockInterface} from "./block.interface";
import {TableOfContentTitleInterface} from "./table-of-content-title.interface";

class Title implements BlockInterface, TableOfContentTitleInterface {
  constructor(
    private readonly title: string,
    private readonly level: number
  ) {
  }

  canBeInTableOfContent: true = true

  async render(): Promise<string> {
    return `${this.hashes} ${this.title}`
  }

  getText(): string {
    return this.title
  }

  getLink(): string {
    return `#${this.title.replaceAll(" ", "-").toLowerCase()}`
  }

  getLevel(): number {
    return this.level
  }

  private get hashes(): string {
    return [...new Array(this.level)]
      .map(() => "#")
      .join("")
  }
}

export function h1(title: string): BlockInterface {
  return new Title(title, 1)
}

export function h2(title: string): BlockInterface {
  return new Title(title, 2)
}

export function h3(title: string): BlockInterface {
  return new Title(title, 3)
}