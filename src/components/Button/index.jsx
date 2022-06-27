import { StyledButton } from "./styles";

export default function Button({ string, size, children, ...rest }) {
  return (
    <>
      <StyledButton size={size} {...rest}>
        {string && string}
        {children}
      </StyledButton>
    </>
  );
}
