import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/finance")({ component: Finance })

function Finance() {
    return <main className="page-wrap px-4">Finance manager</main>
}
