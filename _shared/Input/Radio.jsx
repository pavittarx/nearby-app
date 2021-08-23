import styled from "styled-components";

const RadioContainer = styled.div`
  padding: 5px;
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 10px;

  .radio-button {
    width: 24px;
    height: 24px;
    border: 1px solid #ccc;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    .active-button {
      background: var(--primary);
      height: 22px;
      width: 22px;
      border-radius: 100%;
      transform: scale(0.65);
    }
  }

  .active {
    color: var(--primary);
    border-color: var(--primary);
  }
`;

const Radio = ({ text, value, setValue }) => {
  return (
    <RadioContainer>
      <div
        className={"radio-button" + (value ? " active" : "")}
        onClick={() => setValue(!value)}
      >
        {value && <div className="active-button"> &nbsp; </div>}
      </div>
      {text && (
        <div className={"radio-text" + (value ? " active" : "")}>{text}</div>
      )}
    </RadioContainer>
  );
};

export default Radio;
