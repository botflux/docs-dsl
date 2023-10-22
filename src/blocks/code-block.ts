import {BlockInterface} from "./block.interface";

class CodeBlock implements BlockInterface {
  constructor(
    private readonly code: string,
    private readonly lang: string = ""
  ) {
  }

  async render(): Promise<string> {
    const delimiter = "```"

    return `${delimiter}${this.lang}
${this.code}
${delimiter}`
  }
}

export function codeBlock(code: string, lang?: string): BlockInterface {
  return new CodeBlock(code, lang)
}