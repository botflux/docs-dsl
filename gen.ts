import {toc} from "./src/blocks/table-of-content-position";
import {li} from "./src/blocks/list-item";
import {h1, h2, h3} from "./src/blocks/title";
import {codeBlock} from "./src/blocks/code-block";
import {ul} from "./src/blocks/ul";
import {text} from "./src/blocks/text";
import {page} from "./src/blocks/page";
import {FsStorage} from "./src/fs.storage";
import {img} from "./src/blocks/img";
import {digraph, attribute as _} from "ts-graphviz";
import {graphvizDiagram} from "./src/blocks/graphviz-diagram";

const g = digraph("My graph.svg", g1 => {
    const zooming = g1.node("zooming")
    const resting = g1.node("repos")
    const beHungry = g1.node("a faim")
    const isThereFood = g1.node("a ses graines?", {
        [_.shape]: "diamond"
    })
    const eating = g1.node("mange ses graines")
    const fulfilled = g1.node("plus faim")
    const sleeping = g1.node("dort")
    const transformationIntoMoody = g1.node("se transforme en Moody")
    const eatWoodenBeam = g1.node("mange les poutres")

    const wasFoodGiven = g1.node("a eu a manger?")

    g1.edge([ zooming, resting, beHungry, isThereFood ])
    g1.edge([ isThereFood, eating ], { [_.label]: "Oui" })
    g1.edge([ isThereFood, transformationIntoMoody ], { [_.label]: "Non" })
    g1.edge([ transformationIntoMoody, eatWoodenBeam, wasFoodGiven ])
    g1.edge([ wasFoodGiven, eating ], { [_.label]: "Oui" })
    g1.edge([ wasFoodGiven, eatWoodenBeam ],{ [_.label]: "Non" })
    g1.edge([ eating, fulfilled, sleeping, zooming ])
})

const index = page("index.md", [
    h1("The Rabbit"),
    img("../assets/rabbit.jpg", "A white rabbit running"),
    text("Explaining a rabbit's behavior"),
    toc(),
    h2("Features implemented"),
    ul([
        li(text("Zooming")),
        li(text("Sleeping")),
        li(text("Eating")),
        li(text("Resting")),
    ]),
    graphvizDiagram({ name: "my-graph.svg", alt: "A graph showing some silly thing", graph: g }),
    h2("Contribute"),
    h3("Installation"),
    codeBlock(`npm ci
npx husky install`, "shell script")
])

const writer = new FsStorage("output")

writer.write(index).catch(console.error)