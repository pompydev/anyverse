import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/calendar")({ component: Calendar })

function Calendar() {
    return <main className="page-wrap px-4">Calendar</main>
}
