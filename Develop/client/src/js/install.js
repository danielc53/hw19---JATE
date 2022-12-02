const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    window.deferredPrompt = e;
    butInstall.classlist.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const storedEvent = window.deferredPrompt;
    if (!storedEvent) {
        return
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (e) => {
    window.deferredPrompt = null;
});
