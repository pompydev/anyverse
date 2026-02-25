use crate::components::{Page, UnderConstruction};
use dioxus::prelude::*;

#[component]
pub fn Rss() -> Element {
    rsx! {
        Page {
            h2 { "RSS" }

            UnderConstruction {}
        }
    }
}
