import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/anyicon")({ component: Anyicon })

function Anyicon() {
    return <main className="page-wrap px-4">Anyicon</main>
}
