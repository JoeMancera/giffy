import { Link as LinkWouter } from "wouter";
import styled from "@emotion/styled";

export const  Link = styled(LinkWouter)`
  background-color: var(--brand-color_3);
  border: 1px solid transparent;
  color: var(--theme-body-txt);
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: var(--brand-color_2);
  }

  [disabled] {
    opacity: 0.3;
    pointer-events: none;
  }
`;

export const Button = Link.withComponent("button");