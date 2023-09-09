
/*!
    IntelliAI Template
    Created on date: 9/6/2023
    Built on date: 9/8/2023
*/


// ## LOADER
window.addEventListener('load', () => {
    setTimeout( () => {
        document.querySelector(".loader-warpper").classList.toggle("loader-warpper-hide");
    }, 1000);
})

// ## MENU MOBILE
function MenuMobile() {
    document.getElementById("MenuMobile").classList.toggle("MenuMobileStyle");
    document.getElementById("chatsMobile").classList.toggle("chatsMobileStyle");
    
    const footerMainWindow = document.getElementById("footerMainWindow");
    footerMainWindow.classList.toggle("footerMainWindowStyle");
}

// ## SIDEBAR
// CHATS TOGGLE
function chatsToggle() {
    document.getElementById("chatsToggle").classList.toggle("chatsToggleStyle");
}
// AVATAR DROPDOWN TOGGLE
function avatarDropdownToggle() {
    document.getElementById("avatarDropdownToggle").classList.toggle("avatarDropdownToggleStyle");
}
// SETTINGS TOGGLE
function settingsToggle() {
    document.getElementById("settingsToggle").classList.toggle("settingsToggleStyle");
}
// MORE TOGGLE
function moreToggle() {
    document.getElementById("moreToggle").classList.toggle("moreToggleStyle");
}
// NEW CHAT & REMOVE CHAT
function newChat() {
    var newChatBody = document.getElementById("newChatBody");
    var newChatCard = document.getElementById("newChatCard");

    newChatBody.appendChild(newChatCard.style.display = "block");
}
function removeChat() {
    var removeChat = document.getElementById("removeChat");

    removeChat.appendChild(newChatCard.style.display = "none");
}

// ## TOGGLE MODE
function toggleMode() {
    document.body.classList.toggle("toggleModeStyle");
    document.getElementById("farDarkToggleModeBtn").classList.toggle("farDarkToggleModeBtnStyle");
    document.getElementById("farLightToggleModeBtn").classList.toggle("farLightToggleModeBtnStyle");
}
var nowDate = new Date();
if(nowDate.getHours() >= 18 ^ nowDate.getHours() == 00) {
    document.body.classList.toggle("toggleModeStyle");
    document.getElementById("farDarkToggleModeBtn").classList.toggle("farDarkToggleModeBtnStyle");
    document.getElementById("farLightToggleModeBtn").classList.toggle("farLightToggleModeBtnStyle");
} else {
    
}

// ## MAIN WIONDOW
function renameConversation() {
    var conversationName = document.getElementById("conversationName");
    var chatsConversationName = document.getElementById("chatsConversationName");
    var renameConversationPrompt = prompt("Rename Chat", conversationName.innerHTML);

    conversationName.innerHTML = renameConversationPrompt;
    chatsConversationName.innerHTML = renameConversationPrompt;
    if(renameConversationPrompt == null || renameConversationPrompt == "") {
        conversationName.innerHTML = "New Conversation";
        chatsConversationName.innerHTML = "New Conversation";
    } else {

    }
}

// ## INPUTS
function textareaResize(ts) {
    ts.classList.toggle("textareaResizeStyle");
}
// SETTINGS FONT SIZE
const inputNumber = document.getElementById("inputNumber");
const chatSectionMessageItemFontSize = document.getElementById("chatSectionMessageItemFontSize");
inputNumber.oninput = () => {
    chatSectionMessageItemFontSize.style.fontSize = inputNumber.value + "px";
}