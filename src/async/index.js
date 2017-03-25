import {compose} from 'recompose'

import loadable from '../loadable'
import errorable from '../errorable'

export default compose(
  errorable,
  loadable
)
