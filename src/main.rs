mod components;
mod pages;

use dioxus::prelude::*;
use pages::*;

#[derive(Debug, Clone, Routable, PartialEq)]
enum Route {
    #[layout(components::Navbar)]
    #[route("/")]
    About {},

    #[route("/rss")]
    Rss {},

    #[route("/finance")]
    Finance {},

    #[route("/time-tracker")]
    TimeTracker {},

    #[route("/bookmarks")]
    Bookmarks {},

    #[route("/calendar")]
    Calendar {},

    #[route("/flashcards")]
    FlashCards {},

    #[route("/anyfana")]
    Anyfana {},

    #[route("/anydraw")]
    Anydraw {},

    #[route("/anyicon")]
    Anyicon {},
}

fn main() {
    dioxus::launch(App);
}

const FONTS: Asset = asset!("/assets/fonts");

#[component]
fn App() -> Element {
    rsx! {
        document::Link { rel: "icon", href: asset!("/assets/favicon.ico") }
        document::Link {
            rel: "stylesheet",
            href: asset!("/assets/style.css"),
            blocking: "render",
        }
        document::Link {
            rel: "stylesheet",
            href: asset!("/assets/style.css"),
            blocking: "render",
        }
        document::Link {
            rel: "stylesheet",
            href: format!("{FONTS}/pretendard/web/variable/pretendardvariable-gov.css"),
            blocking: "render",
        }

        Router::<Route> {}
    }
}
