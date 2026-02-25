use crate::components::{Page, UnderConstruction};
use dioxus::prelude::*;

#[component]
pub fn Anyfana() -> Element {
    rsx! {
        Page {
            h2 { " Anyfana" }

            UnderConstruction {}
        }
    }
}
