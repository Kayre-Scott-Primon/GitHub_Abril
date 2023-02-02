import React, { useState } from 'react';
import ItemRepo from '../../components/ItemRepo';
import api from '../../services/api';
import Styles from './styles';

export default function Home(){

    const [data, setData] = useState([])
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false)
    const [nextPage, setNextPage] = useState(0)
    const [finalList, setFinalList] = useState(false)

    function readRepositories() {
        setLoading(true)
        setData([])
        setFinalList(false)

        api.get(`search/repositories?q=${input}&per_page=10`).then(response => {
            setData(response.data.items)
            if(response.data.items.length < 10){
                setFinalList(true)
                console.log('finalList')
            }else{
                setNextPage(2) 
            }
        }).catch(e => {
            console.log('erro ' + e)
        }).finally(() => {
            setLoading(false)
        })
    }

    function readMoreRepositories(){
        if(!finalList){
            setLoading(true)
            api.get(`search/repositories?q=${input}&per_page=10&page=${nextPage}`).then(response => {
                response.data.items.forEach(element => {
                    let exist = false
                    data.some(obj => { // necessário porque a API estava enviando mesmos id's
                        if(obj.id != element.id){
                            return false
                        }else {
                            exist = true
                            return true
                        }
                    })
                    !exist ? data.push(element) : false 
                });
                setData(data)
                console.log(response.data.items.length)            
                if(response.data.items.length < 10){
                    setFinalList(true)
                    console.log('finalList')
                }else{
                    setNextPage(nextPage + 1)
                }
            }).catch(e => {
                console.log('erro ' + e)
            }).finally(() => {
                setLoading(false)
            })
        }
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
                onEndReachedThreshold={0.2}
                onEndReached={() => readMoreRepositories()}
            />
        </Styles.Container>
    )
}