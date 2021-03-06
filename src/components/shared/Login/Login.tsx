import React from "react";
import "./Login.scss";

export interface LoginProps {
  loggedIn: string;
  logButtonLabel: string;
  welcomeText?: string;
  showLogin?: string;
  showRegister?: string;
  registerButtonLabel?: string;
}

export const Login: React.FC<LoginProps> = ({
  loggedIn,
  logButtonLabel,
  ...props
}) => {
  const buttons = [];
  const welcome =
    loggedIn === "true" ? (
      <span className="login-menu__welcome">{props.welcomeText}</span>
    ) : (
      ""
    );
  let loginButton =
    loggedIn === "true" ? (
      <a className="login-menu__link" href="logout.php">
        {logButtonLabel}
      </a>
    ) : (
      <a className="login-menu__link" href="login.php">
        {logButtonLabel}
      </a>
    );
  let registerButton = (
    <a className="login-menu__link" href="newacctform.php">
      {props.registerButtonLabel}
    </a>
  );

  if (loggedIn === "false") {
    if (props.showLogin !== "false") buttons.push(loginButton);
    if (props.showRegister !== "false") buttons.push(registerButton);
  } else {
    if (props.showLogin !== "false") buttons.push(loginButton);
  }

  const output = buttons.map((link, ind) => (
    <li className="login-menu__list-item" key={ind}>
      {link}
    </li>
  ));

  return (
    <div className="login-menu">
      {welcome}
      <ul className="login-menu__list">{output}</ul>
    </div>
  );
};

/*
{
  loggedIn: true,
  welcomeText: '<?php echo $text['welcome']; ?>, <?php echo $currentuser; ?>',
  logButtonLabel: '<?php echo $text['mnulogout']; ?>'
}

{
  loggedIn: false,
  showLogin: <?php echo $text['showlogin']; ?>,
  logButtonLabel: '<?php echo $text['mnulogon']; ?>',
  showRegister: <?php echo $text['disallowreg']; ?>,
  registerButtonLabel: '<?php echo $text['mnuregister']; ?>'
}


if( loggedIn ) {
    <span><span className="login__user-name">{welcomeText}, {username}.</span> <a href="logout.php">{logButtonLabel}</a></span>
}
else {
  if(!showLogin)
    <a href="login.php">{logButtonLabel}</a>
  if(!showRegister) {
    <a href="newacctform.php">{registerButtonLabel}</a>
  }
}


*/
