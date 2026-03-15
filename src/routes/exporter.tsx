import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/exporter")({ component: Exporter })

function Exporter() {
    return <main className="page-wrap px-4">Any exporter</main>
}
