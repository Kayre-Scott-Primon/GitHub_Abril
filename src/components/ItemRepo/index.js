import React from 'react';
import Styles from './styles';

export default function ItemRepo() {

    return (
        <Styles.Container>
            <Styles.ContainerAvatarTitle>
                <Styles.Avatar/>
                <Styles.TitleContainer>
                    <Styles.Title>{'{Nome do Repo}'}</Styles.Title>
                    <Styles.Subtitle>{'{Nome do owner}'}</Styles.Subtitle>
                </Styles.TitleContainer>
            </Styles.ContainerAvatarTitle>
            <Styles.NumOfStar>{'{Número de estrelas}'}</Styles.NumOfStar>
        </Styles.Container>
    )
}
