import { styled } from '@material-ui/core/styles';

// export const ImageStyle = styled.img`
//   display: block;
//   width: ${({ width }) => (width ? width : '100%')};
//   height: ${({ height }) => (height ? height : '100%')};
// `;
export const ImageStyle = styled('img')({
  display: 'block',
  width: `${({ width }) => (width ? width : '100%')}`,
  height: `${({ height }) => (height ? height : '100%')}`,
});
