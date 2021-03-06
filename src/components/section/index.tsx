import * as React from 'react';
import styled, { ThemeSet } from 'styled-components';
import {
  backgroundColor,
  textColor as themeTextColor,
} from '../../styles/ThemeColors';

type WrapperProps = {
  backColor?: string | ThemeSet;
  textColor?: string | ThemeSet;
};

type SectionProps = {
  sectionWidth?: string;
};

const SectionWrapper = styled.div<WrapperProps>`
  width: 100%;
  background: ${({ backColor }) => backColor || backgroundColor};
  color: ${({ textColor }) => textColor || themeTextColor};
`;

const StyledSection = styled.div<SectionProps>`
  max-width: ${({ sectionWidth }) => sectionWidth || '800px'};
  margin: 0 auto 0 auto;

  @media (max-width: 1035px) {
    padding: 0 16px;
  }
`;

export const Section: React.FC<WrapperProps & SectionProps> = ({
  children,
  sectionWidth,
  ...props
}) => {
  return (
    <SectionWrapper {...props}>
      <StyledSection sectionWidth={sectionWidth}>{children}</StyledSection>
    </SectionWrapper>
  );
};
