import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/anyfana")({ component: Anyfana })

function Anyfana() {
    return <main className="page-wrap px-4">Anyfana</main>
}
