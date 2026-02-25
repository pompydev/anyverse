use dioxus::prelude::*;

#[component]
pub fn UnderConstruction() -> Element {
    rsx! {
        p { class: "text-center text-[6rem] my-8", "🚧" }
    }
}
