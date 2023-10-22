import {BlockInterface} from "./block.interface";
import {RenderOpts} from "./render-opts";
import {Graph, RootGraphModel, toDot} from "ts-graphviz";
import { toStream } from "ts-graphviz/adapter"
import {img} from "./img";

class GraphvizDiagram implements BlockInterface {
  constructor(
    private readonly name: string,
    private readonly graph: RootGraphModel,
    private readonly alt: string,
  ) {
  }

  async render({storage}: RenderOpts): Promise<string> {
    await storage.writeStream(this.name, await toStream(toDot(this.graph)))

    return await img(this.name, this.alt).render({ storage })
  }
}

export function graphvizDiagram ({ name, alt, graph }: Opts): BlockInterface {
  return new GraphvizDiagram(name, graph, alt)
}

export type Opts = { graph: RootGraphModel, name: string, alt: string }