import {TableOfContentTitleInterface} from "./table-of-content-title.interface";

export function isTableOfContentTitle(element: Record<any, any>): element is TableOfContentTitleInterface {
  return "canBeInTableOfContent" in element
}