import TanStackQueryDevtools from "#/integrations/tanstack-query/devtools"
import TanStackQueryProvider from "#/integrations/tanstack-query/root-provider"
import { TanStackDevtools } from "@tanstack/react-devtools"
import { HeadContent, Scripts, createRootRouteWithContext } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"

import Sidebar from "../components/Sidebar"
import appCss from "../styles.css?url"

import type { QueryClient } from "@tanstack/react-query"

interface MyRouterContext {
    queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { title: "Anyverse" },
        ],
        links: [{ rel: "stylesheet", href: appCss }],
    }),
    shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning className="dark" style={{ colorScheme: "dark" }}>
            <head>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
                <HeadContent />
            </head>

            <body>
                <TanStackQueryProvider>
                    <Sidebar />
                    <div className="pl-64">{children}</div>
                    <TanStackDevtools
                        config={{ position: "bottom-right" }}
                        plugins={[
                            { name: "Tanstack Router", render: <TanStackRouterDevtoolsPanel /> },
                            TanStackQueryDevtools,
                        ]}
                    />
                </TanStackQueryProvider>
                <Scripts />
            </body>
        </html>
    )
}
