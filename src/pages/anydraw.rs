use crate::components::{Page, UnderConstruction};
use dioxus::prelude::*;

#[component]
pub fn Anydraw() -> Element {
    rsx! {
        Page {
            h2 { "Anydraw" }

            UnderConstruction {}
        }
    }
}
