import React from  'react'
import Counter from '../src/Counter'
import renderer from 'react-test-renderer'

describe('Testing Counter Component', () => {
  it('render correctly', () => {
    const wrapper = renderer
      .create(<Counter count={5} />)
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})