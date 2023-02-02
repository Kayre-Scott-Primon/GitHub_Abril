import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import ItemRepo from '../../components/ItemRepo';
import api from '../../services/api';
import Styles from './styles';


export default function Home(){

    const [data, setData] = useState([])
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)
    const [nextPage, setNextPage] = useState(0)

    function readRepositories() {
        setLoading(true)
        api.get(`search/repositories?q=${input}&per_page=10`).then(response => {
            setData(response.data.items)
            setNextPage(2)
        }).catch(e => {
            console.log('erro' + e)
        }).finally(() => {
            setLoading(false)
        })
    }

    function readMoreRepositories(){
        console.log(nextPage)
        setLoading(true)
        api.get(`search/repositories?q=${input}&per_page=10&page=${nextPage}`).then(response => {
            response.data.items.forEach(element => {
                data.push(element)
            });
            setData(data)
            console.log('count more', response.data.items.length)
            setNextPage(nextPage + 1)
        }).catch(e => {
            console.log('erro' + e)
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <Styles.Container>
            <Styles.StatusBar/>
            <Styles.Title>Repositórios</Styles.Title>
            <Styles.InputView>
                <Styles.InputIcon/>
                <Styles.Input
                    value={input} 
                    onChangeText={input => setInput(input)}
                    onSubmitEditing={() => {readRepositories()}}
                    onBlur={() => {readRepositories()}}
                />
            </Styles.InputView>
            <Styles.List
                data={data}
                keyExtractor={data => data.id}
                renderItem={({item: data}) => (
                    <ItemRepo data={data}/>
                )}
                ItemSeparatorComponent={<Styles.Divider/>}
                refreshing={loading}
                onRefresh={() => readRepositories()}                                        
                onEndReachedThreshold={0.15}
                onEndReached={() => readMoreRepositories()}
                
            />
        </Styles.Container>
    )
}