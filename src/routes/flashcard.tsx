import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/flashcard")({ component: Flashcard })

function Flashcard() {
    return <main className="page-wrap px-4">Flash card</main>
}
