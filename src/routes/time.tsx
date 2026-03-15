import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/time")({ component: Time })

function Time() {
    return <main className="page-wrap px-4">Time tracker</main>
}
