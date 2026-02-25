use crate::components::Page;
use dioxus::prelude::*;

#[component]
pub fn About() -> Element {
    rsx! {
        Page {
            h2 { "Anyverse" }

            a {
                href: "https://github.com/pompydev/anyverse",
                target: "_blank",
                rel: "noreferrer noopener",
                class: "mx-auto underline underline-offset-2 hover:decoration-3",
                "Github"
            }
        }
    }
}
