$(() => {
    const remote = require('electron').remote;
    const app = remote.app;
    const fs = require('fs');
    const path = require('path');
    var rimraf = require("rimraf");
    const shell = require('electron').shell;
    const win = remote.getCurrentWindow();
    const configPath = path.join(app.getPath('userData'), 'config.json');
    let installerPath = 'none';
    const versionInformationURL = 'https://playfh2.net/version.json';

    function getDownloadStoragePath() {
        return JSON.parse(fs.readFileSync(configPath)).downloadStoragePath;
    }

    function onMinimizeButtonPress() {
        win.minimize();
    }

    function onWebsiteLinkPress() {
        shell.openExternal('http://fhmod.org')
    }

    function onGithubLinkPress() {
        shell.openExternal('https://github.com/radiosmersh/FH2Download')
    }

    function onCloseButtonPress() {
        app.quit();
        win.close();
    }

    function getTorrentFolderName(handleData) {
        $.ajax({
            url: versionInformationURL,
            success:function(data) {
                handleData(data.torrent_foldername);
            }
        });
    }

    function onCancelButtonPress() {
        win.loadFile('./app/download.html')
    }

    function onRemoveButtonPress() {
        try{
            rimraf.sync(installerPath);
        }catch(err){
            console.log(err)
        }
        fs.unlinkSync(configPath);
        app.quit();
        win.close();
    }

    getTorrentFolderName(function(torrent_foldername){
        installerPath = path.join(getDownloadStoragePath(), torrent_foldername);
    });

    document.querySelector('#cancel-button').addEventListener('click', onCancelButtonPress);
    document.querySelector('#remove-button').addEventListener('click', onRemoveButtonPress);
    document.querySelector('#close-button').addEventListener('click', onCloseButtonPress);
    document.querySelector('#minimize-button').addEventListener('click', onMinimizeButtonPress);
    document.querySelector('#website-link').addEventListener('click', onWebsiteLinkPress);
    document.querySelector('#github-link').addEventListener('click', onGithubLinkPress);
});