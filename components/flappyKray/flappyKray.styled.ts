import styled from 'styled-components';
import TwitterIcon from '@mui/icons-material/Twitter';
import CloseIcon from '@mui/icons-material/Close';

export const Close = styled(CloseIcon)`
  cursor: pointer;
  position: fixed;
  top: 40px;
  right: 40px;
`;

export const ShareInTwitter = styled(TwitterIcon)`
  cursor: pointer;
  position: fixed;
  bottom: 40px;
  right: 40px;
`;
