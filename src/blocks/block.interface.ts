import {RenderOpts} from "./render-opts";

export interface BlockInterface {
  render(opts: RenderOpts): Promise<string>
}