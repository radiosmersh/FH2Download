# FH2 Download Assistant

Legal notice: this software is a derivative work from https://github.com/realitymod/PRBF2Download

A webapplication build on Electron to help facilitate the download and installation of Forgotten Hope 2. 
Uses BitTorrent as download protocol using WebTorrent library.

## Functionality
* Allow user to select download folder and save this configuration when program is later restarted.
* Retrieve Forgotten Hope 2 unofficial standalone installer version and torrent information from online source.
* Download of the installer through torrent. 
* If operating system allows this (Windows 8 and above), it automatically mounts the installer to a virtual drive and starts the installer setup executable. Otherwise simply opens the download folder. 

## Install
Run `npm install` start package installation.

## Install electron-builder
Run `npm run postinstall` start package installation.

## Start

Run `npm start` to start the application. 

## Build

Run `npm run dist` to build the project.
