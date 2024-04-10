import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)

worker.events.on('request:start', ({ request }) => {
  console.log('MSW worker intercepted:', request.method, request.url)
})