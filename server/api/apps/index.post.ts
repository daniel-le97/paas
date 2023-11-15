import type { CreateOpts } from '../../services/create.js'

const tokens = '#0 building with "desktop-linux" instance using docker driver\n\n#1 [internal] load .dockerignore\n#1 transferring context: 271B done\n#1 DONE 0.0s\n\n#2 [internal] load build definition from Dockerfile\n#2 transferring dockerfile: 978B done\n#2 DONE 0.0s\n\n#3 [internal] load metadata for ghcr.io/railwayapp/nixpacks:ubuntu-1697500996\n#3 DONE 0.2s\n\n#4 [stage-0  1/10] FROM ghcr.io/railwayapp/nixpacks:ubuntu-1697500996@sha256:8f6a3e532cc2e8556b101d0285ea837152596331b42b603446ed01bc1c3ecbf6\n#4 DONE 0.0s\n\n#5 [internal] load build context\n#5 transferring context: 73.40MB 0.4s done\n#5 DONE 0.4s\n\n#6 [stage-0  5/10] COPY . /app/.\n#6 CACHED\n\n#7 [stage-0  6/10] RUN --mount=type=cache,id=NiIYJAcgJrw-/root/npm,target=/root/.npm npm ci\n#7 CACHED\n\n#8 [stage-0  2/10] WORKDIR /app/\n#8 CACHED\n\n#9 [stage-0  4/10] RUN nix-env -if .nixpacks/nixpkgs-5148520bfab61f99fd25fb9ff7bfbb50dad3c9db.nix && nix-collect-garbage -d\n#9 CACHED\n\n#10 [stage-0  7/10] COPY . /app/.\n#10 CACHED\n\n#11 [stage-0  8/10] RUN --mount=type=cache,id=NiIYJAcgJrw-node_modules/cache,target=/app/node_modules/.cache npm run build\n#11 CACHED\n\n#12 [stage-0  3/10] COPY .nixpacks/nixpkgs-5148520bfab61f99fd25fb9ff7bfbb50dad3c9db.nix .nixpacks/nixpkgs-5148520bfab61f99fd25fb9ff7bfbb50dad3c9db.nix\n#12 CACHED\n\n#13 [stage-0  9/10] RUN printf'
const path = '/Users/daniel/homelab/GitHub/paas/daniel-le97-astro-portfolio'

const text = `Nitro, an open source TypeScript framework, empowers you to create web servers that run anywhere, offering a range of impressive features such as rapid development through a zero config setup with hot module replacement for server code in development, a versatile deployment capability that allows for codebase deployment to any provider without extra configuration, and a portable and compact design, effectively eliminating the need for 'node_modules' with an output size of less than 1MB. Its filesystem routing feature automatically registers server and API routes, while maintaining a minimal design to fit into any solution with minimum overhead. The framework supports asynchronous chunk loading via code-splitting for a fast server startup time and response. Inherent TypeScript support is provided with several additional enhancements. Nitro also offers a multi-driver, platform-agnostic storage system, a powerful built-in caching API, and is highly customizable through its plugins hooks system. It further enhances code clarity with an auto imports feature, which automatically imports utilities for a minimal and clean codebase, adding only the used ones to the final bundle. Remarkably, Nitro maintains backward compatibility, enabling the use of legacy npm packages, CommonJS, and mocking Node.js modules for workers. This engine, openly powering Nuxt, is accessible to all, paving the way for a versatile and user-friendly web server development experience.`

export default defineEventHandler(async (_event) => {
  // setResponseHeader(_event, "Content-Type", "text/html; charset=utf-8");
  const body = await readBody<CreateOpts>(_event)
  // console.log(body)
  // const _command = Bun.spawn(['nixpacks', 'build', path, '--name', generateName().toLowerCase()], {
  //   stdio: ['ignore', 'pipe', 'pipe'],
  // })
  const encoder = new TextEncoder()
  const stream = new ReadableStream({
    async start(controller) {
      const write = (chunk: string) => {
        controller.enqueue(encoder.encode(chunk))
      }
      async function waitFor(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms))
      }

      for await (const token of text.split(' ')) {
        write(`${token} `)
        await waitFor(50)
      }
      controller.close()
    },
  })
  // const App = await new Clone({url:body.repo}).clone()
  // console.log({App});

  return sendStream(_event, stream)
})

async function runCommand(command: string[]) {
  const _command = Bun.spawn(command, {
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  const stdout = await new Response(_command.stdout).text()
  const stderr = await new Response(_command.stderr).text()
  console.log(
    _command.killed,
  )
  return { stdout, stderr }
}

function generateName(): string {
  const prefixes: string[] = ['Fire', 'Ice', 'Thunder', 'Shadow', 'Mystic', 'scary', 'brave']
  const suffixes: string[] = ['blade', 'heart', 'spark', 'wing', 'storm']
  function getRandomElement(array: string[]): string {
    const randomIndex: number = Math.floor(Math.random() * array.length)
    return array[randomIndex]
  }
  const generatedName: string = getRandomElement(prefixes) + getRandomElement(suffixes)
  return generatedName.toLowerCase()
}
