chrome = chrome ?? browser;

const script = document.createElement("script");
script.src = chrome.runtime.getURL("quillbot-external.js");
script.async = false;
script.onload = () => script.remove();

document.documentElement.appendChild(script);

// Optional: Event listener for messaging
window.addEventListener("QuillBot-Premium-Crack-Send", async function ({ detail }) {
    const response = await chrome.runtime.sendMessage(detail);
    window.dispatchEvent(new CustomEvent("QuillBot-Premium-Crack-Receive", { detail: response }));
});
