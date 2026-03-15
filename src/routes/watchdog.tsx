import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/watchdog")({ component: Watchdog })

function Watchdog() {
    return <main className="page-wrap px-4">Watchdog</main>
}
