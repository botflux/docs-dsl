export interface TableOfContentTitleInterface {
  canBeInTableOfContent: true

  getText(): string

  getLink(): string

  getLevel(): number
}