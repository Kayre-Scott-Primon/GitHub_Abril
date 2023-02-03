import React from "react";
import renderer from 'react-test-renderer';
import ItemRepo from '../../src/components/ItemRepo'
import { Provider } from "react-redux";
import store from "../../src/storage/redux";

const mockedDispatch = jest.fn();

jest.mock("@react-navigation/native", () => {
    const actualNav = jest.requireActual("@react-navigation/native");
    return {
        ...actualNav,
        useNavigation: () => ({
        navigate: jest.fn(),
        dispatch: mockedDispatch,
        }),
    };
});

describe('ItemRepoSnapshot', () => {

  // genarate snapshot file
    /*it('renders correctly when there are no items', () => {
      const tree = renderer.create(            
        <Provider store={store}>
          <ItemRepo
              data={{
                  name: 'name',
                  url: 'url',
                  owner: {
                      login: 'user'
                  },
                  stargazers_count: 0
              }}
          />
        </Provider>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });*/

    it('Verificando igualdade na estilização', () => {
      const tree = renderer.create(
        <Provider store={store}>
          <ItemRepo
              data={{
                  name: 'name',
                  url: 'url',
                  owner: {
                      login: 'user'
                  },
                  stargazers_count: 0
              }}
          />
        </Provider>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

})