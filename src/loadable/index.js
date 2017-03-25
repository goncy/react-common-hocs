import {branch, renderComponent} from 'recompose'

export default branch(
  ({status}) => ['init', 'pending'].includes(status),
  renderComponent(props => props.loaderComponent
    ? props.loaderComponent(props)
    : null
  )
)
