import React from  'react'
import Todos from '../src/Todos'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'

const mockStore = configureStore()

const initialState = {
  todos: [
    { id: 0, text: 'Fazer café'},
    { id: 1, text: 'Acessar o slack'},
    { id: 2, text: 'Ver RocketLive'}
  ]
}

const store = mockStore(initialState)

describe('Testing Todos Component', () => {
  it('render correctly', () => {
    // const wrapper = shallow(
    //   <Provider store={store}>
    //     <Todos />
    //   </Provider>
    // ).dive({context: {store}})     //worked

    const wrapper = shallow(
      <Todos store={store} />,
    ).dive();     //workedToo

    expect(toJson(wrapper)).toMatchSnapshot()
  })
})