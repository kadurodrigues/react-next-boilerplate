import { render, screen } from '@testing-library/react'
import Main from './index'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)
    const headingFound = screen.getByRole('heading', {
      name: /React Avançado/i
    })

    expect(headingFound).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with the correct background color', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
