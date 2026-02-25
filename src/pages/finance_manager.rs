use crate::components::{Page, UnderConstruction};
use dioxus::prelude::*;

#[component]
pub fn Finance() -> Element {
    rsx! {
        Page {
            h2 { "Finance" }

            UnderConstruction {}
        }
    }
}
