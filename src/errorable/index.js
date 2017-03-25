import {branch, renderComponent} from 'recompose'

export default branch(
  ({status}) => ['failure'].includes(status),
  renderComponent(props => props.errorComponent
    ? props.errorComponent(props)
    : null
  )
)
