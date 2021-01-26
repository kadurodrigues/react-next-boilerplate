import { render, screen } from '@testing-library/react'
import Main from './index'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)
    const heading = screen.getByRole('heading', {
      name: /React Next Boilerplate/i
    })

    expect(heading).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render with the correct background-color', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({ 'background-color': '#d9dbe6' })
  })
})
