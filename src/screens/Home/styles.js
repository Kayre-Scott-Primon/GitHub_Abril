import styled from 'styled-components';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../styles/colors';

export  default Styles = {
    Container: styled.SafeAreaView`
        width: 100%;
        height: 100%;
        background-color: white;
        padding: 16px 16px 0px 16px;
    `,

    StatusBar: styled.StatusBar.attrs({
        backgroundColor: colors.primary,
        barStyle: 'dark-content'
    })`
    `,

    Title: styled.Text`
        font-family: 'SF Pro Display';
        font-style: normal;
        font-weight: 700;
        font-size: 34px;
        line-height: 41px;
        color: ${colors.text};
        margin-top: 36px;
        margin-bottom: 16px;
    `,

    InputView: styled.View`
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 6px;
        width: 100%;
        background: ${colors.background};
        border-radius: 10px;
        margin-bottom: 41px;
        border-width: 1px;
        border-color: ${(props) => props.empty ? colors.error : colors.transparent};
    `,

    InputIcon: styled(Icon).attrs({
        name: 'search'
    })`
        color: ${colors.search};
        font-size: 15px;
        margin: 10.11px 6px 10.11px 8px;
        
    `,

    Input: styled.TextInput.attrs({
        placeholder: 'Busca por repositórios',
        placeholderTextColor: colors.search,
        enterKeyHint: 'search'
    })`
        max-height: 37px;
    `,

    List: styled.FlatList.attrs({})`
    `,

    Divider: styled.View`
        width: 100%;
        height: 1px;
        background: #EBEBEB;
        border-radius: 2px;
        margin-top: 12px;
        margin-bottom: 10px;
    `,

    NoConnection: styled.Text`
        font-family: 'SF Pro Text';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        color: ${colors.subtitle};
        width: 100%;
        text-align: center;

    `

}