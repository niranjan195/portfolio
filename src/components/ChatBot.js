import React from "react";
import ChatBot from "react-simple-chatbot";

const config = {
  width: "350px",
  height: "400px",
  botDelay: "700",
  floating: true,
  opened: true,
  headerTitle: "Let's Chat",
};

const defaultAnchroStyle = {
  margin: 0,
  padding: 0,
  fontSize: "100%",
  verticalAlign: "baseline",
  background: "transparent",
};

const steps = [
  {
    id: "start",
    message:
      "Hi, I am Niranjan's virtual assistant. What can I do for you today?",
    trigger: "task",
  },
  {
    id: "task",
    options: [
      { value: "Resume", label: "Niranjan's Resume", trigger: "resume" },
      { value: "Contact", label: "Contact Niranjan", trigger: "contact" },
      { value: "About", label: "About Niranjan", trigger: "about" },
    ],
  },
  {
    id: "more_task",
    message: "Is there any thing else I can help you with?",
    trigger: "yes_no",
  },
  {
    id: "yes_no",
    options: [
      { value: "yes", label: "Yes", trigger: "task" },
      { value: "no", label: "No", trigger: "end-message" },
    ],
  },
  {
    id: "resume",
    component: (
      <div>
        Here you go, you can view or download Niranjan's Resume from the below
        link.
        <a
          href="https://drive.google.com/file/d/10WwJtfZvDeGgpfVmKOJNnM4tVZXKCzoh/view"
          id="download-button"
          target="_blank"
          rel="noopener noreferrer"
          style={defaultAnchroStyle}
        >
          <b>
            <u>Resume</u>
          </b>
        </a>
      </div>
    ),
    asMessage: true,
    trigger: "more_task",
  },
  {
    id: "contact",
    component: (
      <div>
        You can connect with Niranjan via
        <br />- Email:
        <a href="mailto: hegdeniranjan144@gmail.com">Niranjan</a>
        <br />- LinkedIn:
        <a
          href="https://www.linkedin.com/in/niranjan-hegde-692456134/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Niranjan's LinkedIn Profile
        </a>
      </div>
    ),
    asMessage: true,
    trigger: "more_task",
  },
  {
    id: "about",
    component: (
      <div>
        Niranjan Hegde
        <br />- He completed his Bachelor's from Sapthagiri College of
        Engineering
        <br />- Niranjan with his 2 friends took the initiative to start a
        Technical Club in their college, and they even conducted event during
        that time.
      </div>
    ),
    asMessage: true,
    trigger: "more_task",
  },
  {
    id: "end-message",
    message: "Happy to help you! Have a great day.",
    end: true,
  },
];

export default function MyChatBot() {
  return <ChatBot id="chat-bot" steps={steps} {...config} />;
}
