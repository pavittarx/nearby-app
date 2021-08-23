import styled from "styled-components";
import { TextInputProps } from "@/types/components/input";

const TextInputContainer = styled.div`
  border: 1px solid var(--border);
  border-radius: 0.25rem;
  display: inline-block;

  padding: 0.8rem 1.25rem;
  width: 100%;
  font-size: 0.9rem;
  color: var(--text);
  transition: 0.5s all ease-in;

  &:focus-within {
    border: 1px solid var(--primary);

    input {
      color: var(--primary);
    }
  }
`;

const TextInput = ({ placeholder, value, setValue, type }: TextInputProps) => {
  return (
    <TextInputContainer>
      <input
        type={type ? type : "text"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </TextInputContainer>
  );
};

export default TextInput;
