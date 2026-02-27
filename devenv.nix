{ pkgs, ... }:

let
  tooling = with pkgs; [
    unzip
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
    javascript = {
      enable = true;
      bun.enable = true;
      bun.install.enable = true;
    };

    # https://devenv.sh/languages/rust/
    rust = {
      enable = true;
      channel = "stable";
      version = "1.93.1";
      targets = [
        "wasm32-unknown-unknown"

        "x86_64-unknown-linux-gnu"

        "aarch64-linux-android"
        "i686-linux-android"
        "armv7-linux-androideabi"
        "x86_64-linux-android"

        "x86_64-apple-ios"
        "aarch64-apple-ios"
        "aarch64-apple-ios-sim"
        "aarch64-apple-darwin"
      ];
    };
  };
}
