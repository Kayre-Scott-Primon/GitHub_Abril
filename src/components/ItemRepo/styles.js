import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../styles/colors';

export  default Styles = {
    Container: styled.SafeAreaView`
        width: 100%;
        background-color: white;
        flex-direction: row;
        justify-content: space-between;
    `,

    ContainerAvatarTitle: styled.View`
        flex-direction: row;
    
    `,

    Avatar: styled.View`
        width: 52px;
        height: 52px;
        background: ${colors.avatar};
        border-radius: 50px;
        margin-right: 12px;
    `,

    TitleContainer: styled.View`
    
    `,

    Title: styled.Text`
        font-family: 'SF Pro Text';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -0.38px;
        color: ${colors.text};
        margin-bottom: 1px;
    `,

    Subtitle: styled.Text`
        font-family: 'SF Pro Text';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: ${colors.subtitle};
    `,

    NumOfStar: styled.Text`
        font-family: 'SF Pro Text';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.078px;
        color: ${colors.subtitle};
    `

}