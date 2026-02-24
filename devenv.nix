{ pkgs, ... }:

let
  tooling = with pkgs; [
    dioxus-cli

    nixd
    nixfmt
  ];

  libraries = with pkgs; [
    openssl
    pkg-config
    gtk3
    webkitgtk_4_1
    libsoup_3
    xdotool
  ];
in
{
  packages = tooling ++ libraries;

  env = {
    PKG_CONFIG_PATH = "${pkgs.openssl.dev}/lib/pkgconfig";
  };

  languages = {
    # https://devenv.sh/languages/rust/
    rust = {
      enable = true;
      channel = "stable";
      version = "1.93.1";
      targets = [
        "wasm32-unknown-unknown"
        "x86_64-unknown-linux-gnu"
      ];
    };
  };
}
