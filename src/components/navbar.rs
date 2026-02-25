use crate::Route;
use dioxus::prelude::*;

#[component]
pub fn Item(to: Route, label: String) -> Element {
    rsx! {
        Link {
            class: "flex items-center h-12 justify-center no-underline transition-colors px-5 duration-200 hover:text-[#91a4d2] hover:cursor-pointer",
            to,
            "{label}"
        }
    }
}

#[component]
pub fn Navbar() -> Element {
    rsx! {
        div { class: "z-10 left-0 top-0 h-screen min-w-50 w-50 bg-gray-800 box-border overflow-y-auto flex flex-col transition-transform duration-300 translate-x-0",
            Item { to: Route::About {}, label: "Home" }
            Item { to: Route::Rss {}, label: "RSS" }
            Item { to: Route::Finance {}, label: "Finance" }
            Item { to: Route::TimeTracker {}, label: "Time tracker" }
            Item { to: Route::Bookmarks {}, label: "Bookmarks" }
            Item { to: Route::Calendar {}, label: "Calendar" }
            Item { to: Route::FlashCards {}, label: "Flash Cards" }
            Item { to: Route::Anyfana {}, label: "Anyfana" }
            Item { to: Route::Anydraw {}, label: "Anydraw" }
            Item { to: Route::Anyicon {}, label: "Anyicon" }
        }

        Outlet::<Route> {}
    }
}
