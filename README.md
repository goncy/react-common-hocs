# React common hocs (`react-common-hocs`)

A set of common components for React

## Demo
https://goncy.github.io/react-common-hocs/


## What
React common hocs is a set of React HOCs mainly for components who manage async data


## How
```js
// Creating an action
import {loadable, errorable, async, toggleable} from 'react-common-hocs'

const Loader = props => (
  // All component logic
  ...
)

const ErrorComponent = props => (
  // All component logic
  ...
)

const MyComponent = props => (
  // All component logic
  ...
)
...
export default loadable({loaderComponent: Loader})(MyComponent)
export default errorable({errorComponent: ErrorComponent})(MyComponent)
export default toggleable(MyComponent)
export default async({loaderComponent: Loader, errorComponent: ErrorComponent})(MyComponent)
```

### `loadable`
Takes the **status** prop, if its `init` or `pending`, shows the **loaderComponent** option

### `errorable`
Takes the **status** prop, if its `failure` displays the **errorComponent** option

### `toggleable`
Adds a **toggled** boolean prop with two handlers, **toggleOff** and **toggleOn**

### `async`
Takes the **status** prop, if its `init` or `pending`, shows the **loaderComponent** option, if its `failure`, shows the **errorComponent** option


## Why
For reduce boilerplate of course


## Installation
```sh
yarn add react-common-hocs
// or
npm install --save react-common-hocs
```

## Contributors
Simply create a pull request :)
* Code style: **Standard**
* **FlowType** used


## License
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.