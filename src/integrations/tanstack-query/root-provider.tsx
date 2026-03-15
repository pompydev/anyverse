import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import superjson from "superjson"

import type { ReactNode } from "react"

let context:
    | {
          queryClient: QueryClient
      }
    | undefined

export function getContext() {
    if (context) return context

    const queryClient = new QueryClient({
        defaultOptions: {
            dehydrate: { serializeData: superjson.serialize },
            hydrate: { deserializeData: superjson.deserialize },
        },
    })

    context = {
        queryClient,
    }

    return context
}

export default function TanStackQueryProvider({ children }: { children: ReactNode }) {
    const { queryClient } = getContext()

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
