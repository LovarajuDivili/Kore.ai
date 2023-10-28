import { chatConfig, chatWindow } from "kore-web-sdk";

export const initiateWindow = () => {
  var chatWindowInstance = new chatWindow(chatConfig);
  let botOptions = chatConfig.botOptions;
  //var jquerySelector = chatWindow.prototype.$;

  botOptions.JWTUrl = "https://demo.kore.net/users/sts";
  botOptions.userIdentity = "lovaraju.divili@aifalabs.com";
  botOptions.botInfo = {
    // name: "All Dialogs",
    name: "JAIDA",
    _id: "st-19acbca9-90ab-596e-b872-1ec8510c795e",
  };
  botOptions.clientId = "cs-a1d6272a-9b54-5a44-b9c8-c484266ea28e";
  botOptions.clientSecret = "+0Kc5Tv/GwxYQXq4kwbbcARCZMA/UYfXgogLbr8diTY=";

  chatWindowInstance.on("viewInit", (chatEvent) => {
    let messageHTML = chatEvent?.chatEle;

    //To hide refresh button when bot initialized
    // let reloadButton = messageHTML.find(".reload-btn");
    // reloadButton.addClass("hideHeaderButton");

    //To Change the hover text of Close Icon
    let closeButtonHover = messageHTML?.find(".close-btn");
    closeButtonHover.attr("title", "Close");
    // debugger;
    // messageHTML?.find(".reload-btn")?.hide();
    // messageHTML?.find("#botHeaderTitle")?.hide();
    // messageHTML
    //   ?.find(".kore-chat-header")
    //   ?.prepend(
    //     "<div class='custom-header'><span>Lovaraju</span> <i>Software engineer</i></div>"
    //   );
    // .html("<span>Lovaraju</span> <i>Software engineer</i>")

    let sendButton = messageHTML.find(".chatSendMsg");
    sendButton.html('<i class="fas fa-paper-plane"></i> Send');
    sendButton.css({
      "background-color": "blue",
      color: "white",
      padding: "8px",
      "border-radius": "20px",
      height: "30px",
      width: "50px",
    });
  });

  chatWindowInstance.show(chatConfig);
};
