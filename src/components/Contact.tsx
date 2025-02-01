import React, { useState } from "react";
import "../assets/styles/Contact.scss";
import emailjs from "emailjs-com";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toast from "./Toast";

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            backgroundColor: "#ffffff",
            "& fieldset": {
              borderColor: "#5100cacf",
            },
            "&:hover fieldset": {
              borderColor: "#5000ca",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#5000ca",
            },
          },
          "& .MuiOutlinedInput-input": {
            color: "#000000",
          },
          "& .MuiInputLabel-root": {
            color: "#000000",
            "&.Mui-focused": {
              color: "#5000ca",
            },
          },
          "& .MuiFormHelperText-root": {
            color: "#ff0000",
          },
        },
      },
    },
  },
});

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
    }, 3000);

    e.preventDefault();

    setNameError(name.trim() === "");
    setEmailError(email.trim() === "");
    setMessageError(message.trim() === "");

    if (name.trim() && email.trim() && message.trim()) {
      const templateParams = {
        from_name: name,
        contact: email,
        message,
        to_email: "anirudhgupta905@gmail.com",
      };

      emailjs
        .send(
          process.env.REACT_APP_SERVICE_KEY as string,
          process.env.REACT_APP_TEMPLATE_ID as string,
          templateParams,
          process.env.REACT_APP_MAIL_API as string,
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((error) => {
          console.log("FAILED...", error);
        });
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        {isSent && <Toast content="we'll be in touch ;)" />}
        <div className="contact_wrapper">
            <h2 className="title">Contact Me</h2>
            <p className="subtitle">
              Let's get in touch! Fill out the form below and I'll get back to
              you as soon as possible.
            </p>
          <ThemeProvider theme={theme}>
            <Box
              component="form"
              noValidate
              autoComplete="off"
              className="contact-form"
              onSubmit={sendEmail}
            >
              <div className="form-flex">
                <TextField
                  required
                  label="Your Name"
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={nameError}
                  helperText={nameError ? "Please enter your name" : ""}
                  fullWidth
                />
                <TextField
                  required
                  label="Email / Phone"
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError}
                  helperText={
                    emailError ? "Please enter your email or phone number" : ""
                  }
                  fullWidth
                />
              </div>
              <TextField
                required
                label="Message"
                placeholder="Send me any inquiries or questions"
                multiline
                rows={10}
                className="body-form"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={messageError}
                helperText={messageError ? "Please enter the message" : ""}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                sx={{
                  backgroundColor: "#ffffff",
                  color: "#050f0b",
                  "&:hover": {
                    backgroundColor: "#5000ca",
                    color: "#ffffff",
                  },
                }}
              >
                Send
              </Button>
            </Box>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default Contact;
