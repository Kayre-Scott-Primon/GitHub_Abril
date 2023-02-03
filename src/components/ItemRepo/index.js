import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setRespository } from '../../storage/redux/reducer/Repository';
import Styles from './styles';

export default function ItemRepo({data}) {

    const dispatch = useDispatch()
    const navigation = useNavigation()

    async function onPressRepo(){
        const repo = {
            title: data.name,
            url: data.html_url,
            owner: data.owner.login,
            stars: data.stargazers_count
        }
        await dispatch(setRespository(repo))
        navigation.navigate('Repository')
    }

    return (
        <Styles.Container
            onPress={onPressRepo}
        >
            <Styles.ContainerAvatarTitle>
                <Styles.Avatar     
                    testID='avatar'
                    source={{
                        uri: data.owner.avatar_url,
                    }}/>
                <Styles.TitleContainer>
                    <Styles.Title testID='name'>{data.name}</Styles.Title>
                    <Styles.Subtitle testID='owner'>{data.owner.login}</Styles.Subtitle>
                </Styles.TitleContainer>
            </Styles.ContainerAvatarTitle>
            <Styles.NumOfStar testID='stars'>{data.stargazers_count}</Styles.NumOfStar>
        </Styles.Container>
    )
}
