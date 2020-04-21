browser.contextMenus.create({
    id: 'camdict',
    title: "Search on Cambridge Dictionary",
    contexts: ["selection"]
});

browser.contextMenus.onClicked.addListener(contextMenuAction);

function contextMenuAction(info, tab){
    const url = 'https://dictionary.cambridge.org/dictionary/english/'+info.selectionText;
    browser.tabs.create({url:url});
}