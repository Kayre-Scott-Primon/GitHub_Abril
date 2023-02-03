import { colors } from '../../styles/colors';
import styled from 'styled-components/native';
import { WebView } from 'react-native-webview';

export  default Styles = {
    Container: styled.SafeAreaView`
        width: 100%;
        height: 100%;
        background-color: ${colors.primary};
        padding: 16px 0px 0px 0px;
    `,

    StatusBar: styled.StatusBar.attrs({
        backgroundColor: colors.primary,
        barStyle: 'dark-content'
    })`
    `,

    Web: styled(WebView)`
    `

}