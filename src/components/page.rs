use dioxus::prelude::*;

#[component]
pub fn Page(children: Element) -> Element {
    rsx! {
        div { class: "p-5 w-full", {children} }
    }
}
