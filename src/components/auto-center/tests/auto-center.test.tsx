import React from 'react'
import { render, testA11y } from 'testing'
import AutoCenter from '../'

const classPrefix = 'adm-auto-center'

describe('AutoCenter', () => {
  it('passes a11y test', async () => {
    await testA11y(<AutoCenter>test</AutoCenter>)
  })

  test('renders basic', () => {
    const renderer = render(
      <AutoCenter data-testid='test-auto-center'>test</AutoCenter>
    )
    const element = renderer.getByTestId('test-auto-center')
    expect(element).toHaveClass('adm-auto-center')
    expect(element.firstChild).toHaveClass(`${classPrefix}-content`)
  })
})
