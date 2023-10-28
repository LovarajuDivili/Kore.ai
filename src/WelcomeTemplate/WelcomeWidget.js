import React from "react";
//import './welcome.css'
import "../index.css";

function WelcomeWidget() {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://demo.kore.ai/jnj2022/UI/libs/images/splashImage.png")',
        backgroundSize: "cover",
        height: "75vh",
        width: "350px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "10px",
      }}
    >
      <img
        src="https://demo.kore.ai/jnj2022/UI/libs/images/jaida-logo.png"
        alt="jaida_logo"
        style={{
          marginTop:"-40%",
          marginLeft:"-20%"
        }}
      />
      <div class="welcome-footer">
        <div style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#fff'
        }}>
          <p class="welcomeTextTitle">Hi, I am here to help</p>
          <p class="welcomeTextDesc">Let's get started!</p>
        </div>
        <div class="selectBG">
          <select id="persona-select">
            <option value="jennifer">Jennifer (US)</option>
            <option value="stella">Stella (Germany)</option>
          </select>
        </div>
        <div class="selectBG">
          <select id="pick-chat-lang">
            <option value="en">English</option>
            <option value="de">German</option>
          </select>
        </div>
        <button class="kr-startbutton">Let's Start</button>
        <p class="infoText">
          This chat may be analyzed for training, quality, and compliance
          purposes. To learn more about your privacy rights, you may consult the
          J&J Global Privacy Notice in the Summit training system.
        </p>
      </div>
    </div>
  );
}

function isWelcomeTemplate(msgData) {
  if (
    msgData.message[0].component &&
    msgData.message[0].component.payload &&
    msgData.message[0].component.payload.template_type ===
      "custom_welcome_template"
  ) {
    return true;
  } else {
    return false;
  }
}
export { WelcomeWidget, isWelcomeTemplate };
