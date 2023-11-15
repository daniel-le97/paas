// import type { EventHandler, EventHandlerRequest } from 'h3'

import { execa } from 'execa'

// export const defineWrappedResponseHandler = <T extends EventHandlerRequest, D> (
//   handler: EventHandler<T, D>
// ): EventHandler<T, D> =>
//     defineEventHandler<T>(async (event) => {
//       try {
//         return { response }
//       } catch (err) {
//       // Error handling
//         return { err }
//       }
//     })

export class Clone {
  url: string
  constructor(opts: { url: string }) {
    this.url = opts.url
  }

  async clone() {
    const cloned = await execa('git', ['clone', `${this.url}`])
    console.log({ cloned })

    return cloned.all
  }
}
