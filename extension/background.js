// Create a context menu item
chrome.contextMenus.create({
  id: "chatgpt-rewrite",
  title: "ChatGPT Rewrite",
  contexts: ["all"],
});

// Listen for when the user clicks on the context menu item
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "chatgpt-rewrite") {
    // Send a message to the content script
    chrome.tabs.sendMessage(tab.id, { type: "CHATGPT_REWRITE" });
  }
});

chrome.commands.onCommand.addListener((command, tab) => {
  if (command === "chatgpt_rewrite") {
    chrome.tabs.sendMessage(tab.id, { type: "CHATGPT_REWRITE" });
  }
});
