import {TableOfContentPositionInterface} from "./table-of-content-position.interface";

export function isTableOfContentPosition(element: Record<any, any>): element is TableOfContentPositionInterface {
  return "tocPosition" in element
}