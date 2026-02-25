use crate::components::{Page, UnderConstruction};
use dioxus::prelude::*;

#[component]
pub fn FlashCards() -> Element {
    rsx! {
        Page {
            h2 { "Flash Cards" }

            UnderConstruction {}
        }
    }
}
