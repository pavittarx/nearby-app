import styled from "styled-components";

import { ButtonProps, ButtonContainerProps } from "@/types/components/button";

const ButtonContainer = styled.div<ButtonContainerProps>`
  cursor: pointer;
  user-select: none;

  background: ${({ type }) =>
    type === "primary" ? "var(--primary)" : "var(--secondary)"};
  color: var(--white);
  text-transform: ${({ caps }) => (caps ? "uppercase" : "none")};

  display: inline-block;
  padding: 1rem 1.5rem;
  margin: 0.5rem 0.25rem;
  border-radius: 5px;

  transition: 0.5s box-shadow ease-in;

  &:hover {
    box-shadow: 1px 1px 10px -3px var(--secondary);
  }

  &:active {
    transform: translateY(5px);
  }
`;

const Button = ({ name, caps, type, action }: ButtonProps) => {
  return (
    <ButtonContainer caps={caps} type={type}>
      <span className="button-box" onClick={action}>
        {name}
      </span>
    </ButtonContainer>
  );
};

export default Button;
