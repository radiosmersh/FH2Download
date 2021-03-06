$(() => {
    const remote = require('electron').remote;
    const shell = require('electron').shell;

    const app = remote.app;

    $('#version-number').text('v' + app.getVersion());

    function onMinimizeButtonPress() {
        const window = remote.getCurrentWindow();
        window.minimize();
    }

    function onWebsiteLinkPress() {
        shell.openExternal('http://www.fhmod.org/')
    }

    function onCloseButtonPress() {
        const window = remote.getCurrentWindow();
        app.quit();
        window.close();

    }

    function onGithubLinkPress() {
        shell.openExternal('https://github.com/radiosmersh/FH2Download')
    }

    function onDiscordLinkPress() {
        shell.openExternal('https://discord.gg/hU878P4')
    }

    document.querySelector('#close-button').addEventListener('click', onCloseButtonPress);
    document.querySelector('#minimize-button').addEventListener('click', onMinimizeButtonPress);
    document.querySelector('#website-link').addEventListener('click', onWebsiteLinkPress);
    document.querySelector('#github-link').addEventListener('click', onGithubLinkPress);
    document.querySelector('#discord-link').addEventListener('click', onDiscordLinkPress);
});