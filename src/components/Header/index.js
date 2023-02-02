import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Styles from './styles';

export default function Header({title}) {
    const navigation = useNavigation()

    return (
        <Styles.Container>
            <Styles.Button
                onPress={() => navigation.goBack()}
            >
                <Styles.IconBack/>
            </Styles.Button>
            <Styles.Title>{title}</Styles.Title>
        </Styles.Container>
    )
}
