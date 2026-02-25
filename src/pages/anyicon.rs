use crate::components::{Page, UnderConstruction};
use dioxus::prelude::*;

#[component]
pub fn Anyicon() -> Element {
    rsx! {
        Page {
            h2 { "Anyicon" }

            UnderConstruction {}
        }
    }
}
