---
title: "Comment configurer son linux ?"
pubDate: 2025-08-10
description: "Explication de comment configurer de A à Z son environnement linux. De l'installation de arch linux jusqu'à la config neovim. "
draft: true
author: 'BigOuden'
tags: ["configuration", "archlinux", "rice"]
---



# Sommaire

# Introduction

Dans ce post vous allez découvrir comment installer archlinux et s'amuser à le configurer selon nos envies.

Effectivement dans mon cas la stack logicielle aura pour base Archlinux avec son gestionnaire de paquets Pacman et Wayland comme comme gestionnaire de fenêtres (ou WM pour Windows Manager). Vous pouvez bien évidemment choisir un autre OS et gestionnaire de paquets pour installer/configurer les applications dont nous allons parler. Il faut toute fois avoir Wayland comme WM pour certaines d'entre elle, je vous laisse donc le soins d'aller vous documenter pour installer Wayland sur vos espaces de travail.
<details>
<summary>
    Tableau récapitulatif de la stack
</summary>




| Catégorie          | Application                                               |
| ------------------ | --------------------------------------------------------- |
| Kernel             | Linux / Linux-Zen (VirtualBox)                            |
| Terminal           | Kitty, Starship, Tmux                                     |
| Shell              | Zsh, zsh-autosuggestions, zsh-syntax-highlighting, ble.sh |
| File manager (TUI) | Yazi                                                      |
| File manager (GUI) | Dolphin                                                   |
| Editor             | Neovim, Vim, Helix                                        |
| IDE                | Vscode (télémetrie désactivée)                            |
| Menu               | Rofi (remplace Fuzzel), Jgmenu                            |
| Notifications      | Dunst                                                     |
| Bar                | Waybar + modules custom (VPN, updates, RAM)               |
| Screenshots        | Hyprshot, hyprshotgun, hyprshotgui                        |
| Wallpaper          | Hyprpaper, `change_wallpaper`, `wallpaper_menu`           |
| Color picker       | Hyprpicker                                                |
| Cursor             | Hyprcursor, reset script inclus                           |
| VPN                | Wireguard, OpenVPN + intégration Waybar                   |
| Network            | NetworkManager, network-manager-applet, Blueman           |
| Display            | nwg-displays                                              |
| GTK theme          | nwg-look                                                  |
| Audio              | MPV, Playerctl, lofi (script)                             |
| Clipboard          | Clispe                                                    |
| Theme              | Catppuccin, Gruvbox, TokyoNight                           |
| Browser            | Firefox + PywalFox, LibreWolf, WebCord                    |
| PDF                | Zathura                                                   |
| Password manager   | Bitwarden (via `rbw-rofi`)                                |
| System info        | Neofetch, macchina                                        |
| Zoom WM            | Hypr-zoom                                                 |
| Shader             | Hyprshade                                                 |
| Calculator         | rofi-calc                                                 |
| Report editor      | Latex (devcontainer), Typst (TODO)                        |
| Markdown preview   | Neovim plugin                                             |
| Others             | Vesktop, Syncthing, Obsidian                              |

</details>

Vous pouvez retrouver toute ma config directement sur mon github : [arch-dotfiles](https://github.com/Big-Ouden/arch-dotfiles)



# Installation de l'OS & Windows manager


Pour commencer il vous faut installer l'OS sur votre pc. Vous avez le choix entre un [dual-boot]() ou in [single-boot](). Si vous n'êtes pas familier avec l'environnement linux je vous conseil de faire un dual-boot afin de conserver d'un côté votre environnement Windows et d'un autre linux.

Si vous êtes déjà un peu familier avec linux, je vous encourage à passer à du 100% linux en vous mettant tout de même en garde : arch linux sera entièrement configuré par vous même. Donc certaines choses ne fonctionneront peut être pas de la même manière ou du premier coup, comme sur windows. Si vous souhaitez une expérience Linux stable avec des appli pré-installé etc, je vous conseille de vous tourner vers d'autres [distributions]() [ubuntu]() / [debian]() / [Pop OS]() et les configurations par défaut qu'ils proposent à l'installation.


<details>
    <summary> Pour ceux à qui cela fait peur </summary>

tldr ( **T**oo **L**ong **D**idn't **R**ead ) : c'est que du bonheur !

Ne vous en faites pas. Je suis moi même passé à du 100% Linux depuis plus d'un an et l'aventure est géniale. Je suis passé par les distributions stables, pour arriver sur celles du même accabit que Archlinux. Certes, j'ai eu des bug, des mauvaises configurations qui m'ont fait perdre des cheveux. Mais au final j'ai beaucoup appris sur l'environnement linux, comment le configurer, comment il fonctionne. Et maintenant j'installe des OS sur mon pc perso dès que j'en vois un passer pour m'amuser et dû à mon expérience, c'est à la fois rapide et facile.
</details>

## Préparer le dual boot (optionnel)

Sur votre pc avec windows installé, cherchez dans la recherche window : "Gestionnaire de partitions"
[insérer screen]

Trouvez le disque sur lequel vous voulez installer linux (ici "H:"), vous pouvez le repérer à son nom ou bien avec le stockage disponible sur le disque.

Un disque est séparé en partitions (en parties de disque). Certaines ont des fonction spécifique (boot, nfs, etc). Celle avec vos données c'est la plus grande (insérer nom de la partition).

[insérer schéma explicatif]

Étapes :
- Faites clic droit et faite "réduire la partion"

[insérer screen]

- Choissez de combien vous allez la réduire (nombre de bits qui seront dispo pour linux). Choisissez au minimum 50Go, je préconise dans les 150-200Go. (Surtout qu'il est plus compliqué d'etendre une partition par la suite)

[insérer screen]

- Validez

[insérer screen]

- Super ! Vous avez une partition de libre pour installer linux

[insérer screen]

## Clé bootable

Je vous laisse le soin d'aller suivre mon rapide post qui explique toute la marche à suivre pour créer une usb bootable (et pourquoi le faire).


## Installation de Archlinux

Si les videos en anglais ne vous dérange pas vous pouvez aller voir celle-ci qui est particulièrement bien faite : [titre]().

Souvent les gens ont peur d'installer archlinux car tout se fait en ligne de commande. Mais en fait tout est très bien expliqué dans le [Wiki d'Archlinux](). D'ailleur ce wiki sera votre meilleur amis par la suite.


### BIOS

### Premières commandes

### Gestion des partitions

### Script d'installation


Youpii !!


# Post-installation

## Paru

## Grub


=> on a le minimum mtn amusons nous

# Ricing

Ce que ça veut dire.

## Applications essentielles

### Terminal

### Shell

### Neovim

### Hyprland


## Autres applications

### Sddm
