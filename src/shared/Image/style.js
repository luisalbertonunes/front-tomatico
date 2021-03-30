import { withTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

export const ImageStyle = withTheme(styled.img`
  display: block;
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '100%')};
  margin: ${(props) => props.theme.spacing(4, 0)};
`);
