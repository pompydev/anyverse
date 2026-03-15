import { Link } from "@tanstack/react-router"

export default function Sidebar() {
    return (
        <aside className="fixed h-full w-64 border-r-2">
            <nav className="flex flex-col">
                <div className="py-4 text-center text-2xl font-bold">Anyverse</div>
                <div className="flex w-full flex-col text-sm font-semibold *:flex *:h-14 *:items-center *:justify-center *:hover:bg-gray-50 *:hover:text-gray-950">
                    <Link to="/">Home</Link>
                    <Link to="/rss">RSS aggregator</Link>
                    <Link to="/flashcard">Flash card</Link>
                    <Link to="/finance">Finance manager</Link>
                    <Link to="/time">Time tracker</Link>
                    <Link to="/calendar">Calendar</Link>
                    <Link to="/anyfana">Anyfana</Link>
                    <Link to="/exporter">Any exporter</Link>
                    <Link to="/draw">Anydraw</Link>
                    <Link to="/anyicon">Anyicon</Link>
                    <Link to="/watchdog">Watchdog</Link>
                    <Link to="/vital">Vital</Link>
                </div>
            </nav>
        </aside>
    )
}
