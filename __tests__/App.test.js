import React from  'react'
import App from '../src/App'
import renderer from 'react-test-renderer'

describe('Testing App Component', () => {
  it('render correctly', () => {
    const wrapper = renderer
      .create(<App />)
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})