import {page} from "./src/blocks/page";
import {h1, h2, h3} from "./src/blocks/title";
import {text} from "./src/blocks/text"
import {FsStorage} from "./src/fs.storage";
import {codeBlock} from "./src/blocks/code-block";

async function start () {
  const readme = page("README.md", [
    h1("Docs DSL"),
    text("A playground to test documentation generation."),
    text("The idea is to define documentation with code such as:"),
    codeBlock(`import {page, h1, text, FsStorage} from "docs-dsl"

const p = page("PAGE.md", [
  h1("My documentation"),
  text("Project's description")    
])

const storage = new FsStorage ("./output-dir")
await storage.write (p)
`, "typescript"),
    h2("Why writing doc as code?"),
    text("Writing documentation as code allow us to automate documentation."),
    text("Using this technique, you can generate documentation from your own application's code."),
    h3("Examples - Application configuration"),
    text("One can decide to describe the application configuration using decorators such as below in order to generate docs from it."),
    codeBlock(`import {Conf, String, Number, Boolean} from "my-config-package"

@Conf({ description: "App's configuration" })
class AppConfig {
  @Number ({
    default: 80,
    description: "The port of which the application is running."
  })
  port!: number

  @String({
    description: "The database connection string."
  })
  dbConnectionString!: string
  
  @Boolean ({
    default: false,
    description: "Enable application logging."
  })
  enableLogging!: boolean
}`, "typescript"),
    text("Such a configuration schema could be read to generate documentation."),
    codeBlock(`
# AppConfig

App's configuration

## \`port: number\`

The port of which the application is running (Default: 80).

## \`dbConnectionString: string\` (required)

The database connection string.

## \`enableLogging: boolean\`

Enable application logging (Default: false).`, "markdown")
  ])

  const storage = new FsStorage("")
  await storage.write(readme)
}

start().catch(console.error)