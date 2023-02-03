import React from "react";
import { render } from "@testing-library/react-native";
import ItemRepo from '../../src/components/ItemRepo'
import { Provider } from "react-redux";
import store from "../../src/storage/redux/store";

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

describe('ItemRepo', () => {

    it('recebimento de parametros para item/repositório da lista', () => {

        const { getAllByTestId } = render(
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
        )
        expect(getAllByTestId('avatar').length).toBe(1);
        expect(getAllByTestId('name').length).toBe(1);
        expect(getAllByTestId('owner').length).toBe(1);
        expect(getAllByTestId('stars').length).toBe(1);
    })

})