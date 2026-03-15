# Anyverse

## What is Anyverse?

[any-sync](https://github.com/anyproto/any-sync) + note taking app = Anytype\
any-sync + \* = Anyverse (because star, get it? 🤓🤓🤓)

The [Any Association](https://github.com/anyproto) is free to take the name anytime without permission or credit.

## But really, what is Anyverse?

Anyverse is my temporary solution for extending the any-sync frontend while waiting for official plugin support.

It contains the following apps:

| Status | Name            | What it does                                                                         |
| :----: | --------------- | ------------------------------------------------------------------------------------ |
|   🚧   | RSS aggregator  | -                                                                                    |
|   🚧   | Flash card      | spaced repetition like [anki](https://apps.ankiweb.net/)                             |
|   ❌   | Finance manager | -                                                                                    |
|   ❌   | Time tracker    | -                                                                                    |
|   ❌   | Calendar        | calendar with sync and notifications                                                 |
|   ❌   | Anyfana         | data visualization like [Grafana](https://grafana.com/)                              |
|   ❌   | Any exporter    | exporter for [prometheus](https://prometheus.io/)                                    |
|   ❌   | Anydraw         | [excalidraw](https://excalidraw.com/) in Anytype                                     |
|   ❌   | Anyicon         | icon set manager                                                                     |
|   ❌   | Watchdog        | Environment monitoring (volatile gas, Temperature, Humidity, Dust, Brightness, etc.) |
|   ❌   | Vital           | Body monitoring (temperature, heart rate, Oxygen level, hormone, etc.)               |

## How to use?

Anyverse is a self-hostable web app built with [Tanstack start](https://tanstack.com/start). Docker image will be
provided soon.

## Why not an app?

tl;dr: no time

As I've said in the previous section, Anyverse is a **temporary solution** for my own problem. I don't have the mental
bandwidth for the overhead of creating, maintaining, and distributing cross-platform apps for Linux, MacOS, Windows,
Android, and iOS only for it to be obsolete in a year or two when Anytype gets plugin support. I have the privilege of
having decent internet connection anywhere in my country so creating Anyverse in the form of a self-hostable web app
made the most sense for me. I did explore different options like [tauri](https://tauri.app/),
[electron](https://www.electronjs.org/), [react native](https://reactnative.dev/), [Avalonia](https://avaloniaui.net/),
[.NET MAUI](https://dotnet.microsoft.com/en-us/apps/maui), [Dioxus](https://dioxuslabs.com/),
[Flutter](https://flutter.dev/), [Capacitor](https://capacitorjs.com/), etc. but each of them had their own downfalls
that made the app inconsistent or difficult to develop.
