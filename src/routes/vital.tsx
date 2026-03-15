import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/vital")({ component: Vital })

function Vital() {
    return <main className="page-wrap px-4">Vital</main>
}
