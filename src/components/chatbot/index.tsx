import { useTranslation } from "next-i18next";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

import CallPhoneButton from "@/components/chatbot/CallPhoneButton";
import Rating from "@/components/Rating";

import { PersonalData } from "../../lib/constants";

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
  const { t } = useTranslation("home");
  const steps = [
    //Get the user name
    {
      id: "1",
      message: t("chatbot.introduction"),
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
      message: t("chatbot.greetings", { name: "{previousValue}" }),
      trigger: "4",
    },
    // Offer for help
    {
      id: 4,
      message: t("chatbot.needHelp"),
      trigger: "help-categories",
    },
    {
      id: "help-categories",
      options: [
        {
          value: "contact",
          label: t("chatbot.contactMe"),
          trigger: "5",
        },
        {
          value: "rate",
          label: t("chatbot.rateWebsite"),
          trigger: "rate-portfolio-intro",
        },
      ],
    },
    //Rating
    {
      id: "rate-portfolio-intro",
      message: t("chatbot.rateWebsiteMessage"),
      trigger: "stars",
    },
    {
      id: "stars",
      component: <Rating />,
    },
    //Contact
    {
      id: 5,
      message: t("chatbot.contactBy"),
      trigger: "contact-options",
    },
    {
      id: "contact-options",
      options: [
        {
          value: "email",
          label: t("chatbot.email"),
          trigger: "contact-intro",
        },
        {
          value: "phone",
          label: t("chatbot.phone"),
          trigger: "contact-phone",
        },
      ],
    },
    //Contact by phone number
    {
      id: "contact-phone",
      message: t("chatbot.myNumber", { number: PersonalData.phoneNumber }),
      trigger: "call-button",
    },
    {
      id: "call-button",
      component: <CallPhoneButton />,
    },

    //Contact by email
    {
      id: "contact-intro",
      message: t("chatbot.waitReply"),
      trigger: "contact-email",
    },
    {
      id: "contact-email",
      component: (
        <a href={"mailto:" + PersonalData.email}>{PersonalData.email}</a>
      ),
    },

    //Restart chat
    {
      id: "start-again",
      message: t("chatbot.options"),
      trigger: "restart-chat",
    },
    {
      id: "restart-chat",
      options: [
        {
          value: "contact",
          label: t("chatbot.contactAgain"),
          trigger: "contact-intro",
        },
        {
          value: "rate",
          label: t("chatbot.rateWebsite"),
          trigger: "rate-portfolio-intro",
        },
        {
          value: "quit",
          label: t("chatbot.quit"),
          trigger: "end-chat",
        },
      ],
    },
    {
      id: "end-chat",
      message: t("chatbot.bye"),
    },
  ];
  return (
    <section className="shadow-2xl">
      <ThemeProvider theme={theme}>
        <ChatBot
          botAvatar="https://avatars.githubusercontent.com/u/104764206?v=4"
          steps={steps}
        />
      </ThemeProvider>
    </section>
  );
}
