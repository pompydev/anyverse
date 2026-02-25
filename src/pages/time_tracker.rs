use crate::components::{Page, UnderConstruction};
use dioxus::prelude::*;

#[component]
pub fn TimeTracker() -> Element {
    rsx! {
        Page {
            h2 { "Time Tracker" }

            UnderConstruction {}
        }
    }
}
