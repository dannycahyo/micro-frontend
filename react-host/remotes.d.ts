declare module "remoteApp/Button" {
  import React from "react";

  interface ButtonProps {
    defaultCount: number;
  }

  const Button: React.ComponentType<ButtonProps>;
  export default Button;
}
