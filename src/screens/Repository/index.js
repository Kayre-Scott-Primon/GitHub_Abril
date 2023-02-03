import React, { useEffect } from 'react';
import Styles from './styles';
import Header from '../../components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { resetRepository } from '../../storage/redux/reducer/repositorySlice';

export default function Repository() {

  const dispatch = useDispatch()
  const repository = useSelector(state => state.repository)

  useEffect(() => {
    return () => { dispatch(resetRepository()) }
  }, [])

  return (
    <Styles.Container>
      <Styles.StatusBar />
      <Header testID='title' title={repository.title} />
      <Styles.Web testID='urlRepo' source={{ uri: repository.url }} />
    </Styles.Container>
  );
}
