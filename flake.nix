{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    rust-overlay.url = "github:oxalica/rust-overlay";
    flake-utils.url = "github:numtide/flake-utils";
    crane.url = "github:ipetkov/crane";
  };

  outputs =
    {
      self,
      nixpkgs,
      rust-overlay,
      flake-utils,
      crane,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        overlays = [ (import rust-overlay) ];
        pkgs = import nixpkgs { inherit system overlays; };

        rustToolchain = pkgs.rust-bin.stable."1.93.1".default.override {
          targets = [
            "wasm32-unknown-unknown"
            "x86_64-unknown-linux-gnu"
          ];
        };

        craneLib = (crane.mkLib pkgs).overrideToolchain rustToolchain;

        buildInputs = with pkgs; [
          openssl
          gtk3
          webkitgtk_4_1
          libsoup_3
          xdotool
        ];

        nativeBuildInputs = with pkgs; [
          pkg-config
          wrapGAppsHook3
        ];

        # Build the application using dioxus-cli with pre-fetched dependencies
        app = craneLib.mkCargoDerivation {
          pname = "anyverse";
          version = "0.1.0";
          src = ./.;

          cargoArtifacts = craneLib.buildDepsOnly {
            pname = "anyverse-deps";
            inherit buildInputs nativeBuildInputs;
            src = ./.;
            cargoExtraArgs = "--features desktop";
          };

          inherit buildInputs;

          nativeBuildInputs = nativeBuildInputs ++ [ pkgs.dioxus-cli ];

          buildPhaseCargoCommand = ''
            dx build --release
          '';

          installPhase = ''
            mkdir -p $out/bin
            cp target/dx/anyverse/release/linux/app/anyverse $out/bin/
            cp -r target/dx/anyverse/release/linux/app/assets $out/bin/assets/
          '';
        };
      in
      {
        packages.default = app;
      }
    );
}
