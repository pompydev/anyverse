use crate::components::{Page, UnderConstruction};
use dioxus::prelude::*;

#[component]
pub fn Bookmarks() -> Element {
    rsx! {
        Page {
            h2 { "Bookmarks" }

            UnderConstruction {}
        }
    }
}
