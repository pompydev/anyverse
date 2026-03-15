import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/rss")({ component: Rss })

function Rss() {
    return <main className="page-wrap px-4">RSS aggregator</main>
}
