import {branch, renderComponent} from 'recompose'

export default options => branch(
  ({status}) => ['failure'].includes(status),
  renderComponent(props => options.errorComponent
    ? options.errorComponent(props)
    : null
  )
)
