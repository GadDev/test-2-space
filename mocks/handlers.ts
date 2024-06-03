// src/mocks/handlers.js
import { http, HttpResponse, RequestHandler } from 'msw'
import type { Account } from '@/services/types/Account'
import { API_URL } from '@/services/account'

const accounts: Record<string, any> = {
  '1': { id: '1', accountNumber: 'ACC1', balance: 1000, currency: 'USD' },
  '2': { id: '2', accountNumber: 'ACC2', balance: 200, currency: 'USD' },
}

const handlers: RequestHandler[] = [
  http.get(`${API_URL}/accounts/:accountId`, ({ params }) => {
    const { accountId } = params

    const account = accounts[accountId as string]

    if (account) {
      return HttpResponse.json(account)
    } else {
      return new HttpResponse(null, {
        status: 404,
        statusText: 'Account not found',
      })
    }
  }),

  http.put(`${API_URL}/accounts/:accountId`, ({ params }) => {
    const { accountId } = params

    const account = accounts[accountId as string]

    if (account) {
      return HttpResponse.json(account)
    } else {
      return new HttpResponse(null, {
        status: 404,
        statusText: 'Account not found',
      })
    }
  }),
]

export { handlers }
