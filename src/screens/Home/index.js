import React from 'react';
import ItemRepo from '../../components/ItemRepo';
import Styles from './styles';


export default function Home(){

    return (
        <Styles.Container>
            <Styles.StatusBar/>
            <Styles.Title>Repositórios</Styles.Title>
            <Styles.InputView>
                <Styles.InputIcon/>
                <Styles.Input/>
            </Styles.InputView>
            <ItemRepo/>
        </Styles.Container>
    )
}