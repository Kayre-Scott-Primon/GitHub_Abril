import React, { useState } from 'react';
import Styles from './styles';
import api from '../../services/api';
import ItemRepo from '../../components/ItemRepo';
import { useNetInfo } from '@react-native-community/netinfo';

export default function Home() {

  const [data, setData] = useState([])
  const [input, setInput] = useState("")
  const [error, setError] = useState(false)
  const [nextPage, setNextPage] = useState(0)
  const [loading, setLoading] = useState(false)
  const [finalList, setFinalList] = useState(false)
  const netInfo = useNetInfo();

  function readRepositories() {
    if (input != "" && netInfo.isConnected) {
      setError(false)
      setLoading(true)
      setData([])
      setFinalList(false)
      api.get(`search/repositories?q=${input}&per_page=10`).then(response => {
        setData(response.data.items)
        if (response.data.items.length < 10) {
          setFinalList(true)
        } else {
          setNextPage(2)
        }
      }).catch(e => {
        console.log('erro 01 ' + e)
      }).finally(() => {
        setLoading(false)
      })
    } else {
      setError(true)
      setData([])
    }
  }

  function readMoreRepositories() {
    if (!finalList) {
      setLoading(true)
      api.get(`search/repositories?q=${input}&per_page=10&page=${nextPage}`).then(response => {
        response.data.items.forEach(element => {
          let exist = false
          data.some(obj => { // necessário porque a API estava enviando mesmos id's
            if (obj.id != element.id) {
              return false
            } else {
              exist = true
              return true
            }
          })
          !exist ? data.push(element) : false
        });
        setData(data)
        if (response.data.items.length < 10) {
          setFinalList(true)
        } else {
          setNextPage(nextPage + 1)
        }
      }).catch(e => {
        console.log('erro 02 ' + e)
      }).finally(() => {
        setLoading(false)
      })
    }
  }

  return (
    <Styles.Container>
      <Styles.StatusBar />
      <Styles.Title>Repositórios</Styles.Title>
      <Styles.InputView empty={error}>
        <Styles.InputIcon />
        <Styles.Input
          value={input}
          onChangeText={input => {
            setInput(input)
            setError(false)
          }}
          onBlur={() => { readRepositories() }}
        />
      </Styles.InputView>

      {!netInfo.isConnected
        ? <Styles.NoConnection>Sem conexão com a internet!</Styles.NoConnection>
        : false
      }

      <Styles.List
        data={data}
        keyExtractor={data => data.id}
        renderItem={({ item: data }) => (
          <ItemRepo data={data} />
        )}
        ItemSeparatorComponent={<Styles.Divider />}
        refreshing={loading}
        onRefresh={() => readRepositories()}
        onEndReachedThreshold={0.25}
        onEndReached={() => readMoreRepositories()}
      />
    </Styles.Container>
  )
}