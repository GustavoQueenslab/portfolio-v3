import { useState } from "react";

import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

import { checkStringAnswer } from "./UserTypingValidation";
import Rating from "../Rating";
export default function Chatbot() {
  const theme = {
    background: "#f5f8fb",
    headerBgColor: "#2574A9",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#2574A9",
    botFontColor: "#fff",
    userBubbleColor: "#fff",
    userFontColor: "#4a4a4a",
  };
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        botAvatar="https://avatars.githubusercontent.com/u/104764206?v=4"
        steps={[
          {
            id: "1",
            message: "Hey!!! What is your name?",
            trigger: "2",
          },
          {
            id: "2",
            user: true,
            validator: (value) => {
              return checkStringAnswer(value, "Name");
            },
            trigger: "3",
          },
          {
            id: "3",
            message: "Hi {previousValue}, nice to meet you!",
            trigger: "4",
          },
          {
            id: 4,
            message: "What do you need help with?",
            trigger: "help-categories",
          },
          {
            id: "help-categories",
            options: [
              {
                value: "contact",
                label: "Contact me",
                trigger: "contact-intro",
              },
              {
                value: "rate",
                label: "Rate Website",
                trigger: "rate-portfolio-intro",
              },
            ],
          },
          {
            id: "contact-intro",
            message: "Could you send me you contact( e-mail, phone number)...",
            trigger: "contact-number",
          },
          {
            id: "contact-number",
            user: true,
            trigger: "contact-body",
          },
          {
            id: "contact-body",
            message: "Great! So what do you want to talk?",
            trigger: "contact-body-answer",
          },
          {
            id: "contact-body-answer",
            user: true,
            trigger: "contact-reply",
          },
          {
            id: "contact-reply",
            message: "Great!! I will contact you within 2 days.",
            trigger: "start-again",
          },
          {
            id: "start-again",
            message: "Would you like to:",
            trigger: "restart-chat",
          },
          {
            id: "restart-chat",
            options: [
              {
                value: "contact",
                label: "Contact me again",
                trigger: "contact-intro",
              },
              {
                value: "rate",
                label: "Rate Website",
                trigger: "rate-portfolio-intro",
              },
              {
                value: "quit",
                label: "End chat",
                trigger: "end-chat",
              },
            ],
          },
          {
            id: "end-chat",
            message: "Thanks! See you soon :)",
          },
          //Rating
          {
            id: "rate-portfolio-intro",
            message: "Great that you want to rate my portfolio!!",
            trigger: "stars",
          },
          {
            id: "stars",
            component: <Rating />,
          },
        ]}
      />
    </ThemeProvider>
  );
}
