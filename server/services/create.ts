export interface CreateOpts {
  repo: string
  build: string
  start: string
  install: string
}

export class Create {
  /**
   *
   */
  opts: CreateOpts
  constructor(opts: CreateOpts) {
    this.opts = opts
  }

  async clone() {
    const cloned = Bun.spawn(['git', 'clone', `${this.opts.repo}`, `./temp`])
    const output = new Response(cloned.stdout)
    return output
  }

  async build() {
    const spawned = Bun.spawn(['nixpacks', 'build', `${path}`, '--name'])

    // const nixpacks = (path:string, name:string) : Promise<string> => {
    //     return new Promise(async (resolve, reject) => {
    //         const childProcess = Bun.spawn(["nixpacks", "build", `${path}`, '--name', `${name}`])
    //         const output = await new Response(childProcess.stdout).text()
    //         resolve(output)
    //     })
    // }

    // const logs = await nixpacks('./temp/1', 'new-app')

    // console.log(logs);
  }
}
