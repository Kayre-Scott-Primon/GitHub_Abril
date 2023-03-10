import { colors } from '../../styles/colors';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Octicons';

export default Styles = {
  Container: styled.View`
      width: 100%;
      background-color: ${colors.primary};
      flex-direction: row;
      align-items: center;
      padding: 0px 0px 10px 11.31px;
  `,

  Button: styled.TouchableOpacity` 
  `,

  IconBack: styled(Icon).attrs({
    name: 'chevron-left'
  })`
    color: ${colors.icon};
    font-size: 25px;
    margin-right: 14.29px;
  `,

  Title: styled.Text.attrs({
    numberOfLines: 1
  })`
    font-family: 'SF Pro Text';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.38px;
    color: ${colors.text};
    flex: 1;
    margin-right: 25px;
  `,

}