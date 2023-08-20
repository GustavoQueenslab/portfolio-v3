import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

import CallPhoneButton from "@/components/chatbot/CallPhoneButton";
import Rating from "@/components/Rating";

function isValidName(value: string, name: string) {
  if (!isNaN(parseInt(value))) {
    return `${name} can't be a number`;
  }
  if (value.length <= 2) {
    return `${name} too short`;
  }
  if (value.length > 20) {
    return `${name} too long`;
  }
  return true;
}

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

export default function Chatbot() {
  const steps = [
    //Get the user name
    {
      id: "1",
      message: "Hey!!! What is your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true,
      validator: (value: string) => {
        return isValidName(value, "Name");
      },
      trigger: "3",
    },
    {
      id: "3",
      message: "Hi {previousValue}, nice to meet you!",
      trigger: "4",
    },
    // Offer for help
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
          trigger: "5",
        },
        {
          value: "rate",
          label: "Rate Website",
          trigger: "rate-portfolio-intro",
        },
      ],
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
    //Contact
    {
      id: 5,
      message: "Would you prefer to contact me by:",
      trigger: "contact-options",
    },
    {
      id: "contact-options",
      options: [
        {
          value: "email",
          label: "Email",
          trigger: "contact-intro",
        },
        {
          value: "phone",
          label: "Phone",
          trigger: "contact-phone",
        },
      ],
    },
    //Contact by phone number
    {
      id: "contact-phone",
      message: "My phone number is +351 931 945 231",
      trigger: "call-button",
    },
    {
      id: "call-button",
      component: <CallPhoneButton />,
    },

    //Contact by email
    {
      id: "contact-intro",
      message: "Tell me your email address please",
      trigger: "contact-email",
    },
    {
      id: "contact-email",
      user: true,
      trigger: "contact-email-body",
    },
    {
      id: "contact-email-body",
      message: "Great! So what do you want to talk?",
      trigger: "contact-email-body-answer",
    },
    {
      id: "contact-email-body-answer",
      user: true,
      trigger: "contact-email-reply",
    },
    {
      id: "contact-email-reply",
      message: "Great!! I will contact you within 2 days.",
      trigger: "start-again",
    },

    //Restart chat
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
  ];
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        botAvatar="https://avatars.githubusercontent.com/u/104764206?v=4"
        steps={steps}
      />
    </ThemeProvider>
  );
}
