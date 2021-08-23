import { MouseEventHandler } from "react";

export type ButtonProps = {
  name: String;
  caps?: String;
  type?: String;
  action: MouseEventHandler<unknown>;
};

export type ButtonContainerProps = { type?: String; caps?: String };
