import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/draw")({ component: Draw })

function Draw() {
    return <main className="page-wrap px-4">Anydraw</main>
}
