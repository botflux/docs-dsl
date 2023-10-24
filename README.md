# docs DSL

A playground to test documentation generation.

The idea is to define documentation with code such as:

```typescript
import {page, h1, text, FsStorage} from "docs-dsl"

const p = page("PAGE.md", [
  h1("My documentation"),
  text("Project's description")    
])

const storage = new FsStorage ("./output-dir")
await storage.write (p)

```

## Why writing doc as code?

Writing documentation as code allow us to automate documentation.

Using this technique, you can generate documentation from your own application's code.

### Examples - Application configuration

One can decide to describe the application configuration using decorators such as below in order to generate docs from it.

```typescript
import {Conf, String, Number, Boolean} from "my-config-package"

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
}
```

Such a configuration schema could be read to generate documentation.

```markdown

# AppConfig

App's configuration

## `port: number`

The port of which the application is running (Default: 80).

## `dbConnectionString: string` (required)

The database connection string.

## `enableLogging: boolean`

Enable application logging (Default: false).

```