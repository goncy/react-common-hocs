import {compose} from 'recompose'

import loadable from '../loadable'
import errorable from '../errorable'

export default ({errorComponent, loaderComponent}) => compose(
  errorable({errorComponent}),
  loadable({loaderComponent})
)
