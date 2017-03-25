import {branch, renderComponent} from 'recompose'

export default options => branch(
  ({status}) => ['init', 'pending'].includes(status),
  renderComponent(props => options.loaderComponent
    ? options.loaderComponent(props)
    : null
  )
)
