# Setup

## Dependencies

1. `react`
1. `react-dom`

## Dev Dependencies

1. `babel-core`
2. `babel-jest`
3. `babel-preset-env`
4. `babel-preset-react`
5. `enzyme`
6. `enzyme-adapter-react-16`
7. `jest`

## setupTest.js

* Configure the `enzyme` / `react` adapter

## `shallow` rendering

* Can add `context` object as an arg
* Can also add `disableLifecycleMethods` boolean
* `exists()` to check if a node exists
* `children()` to find all a node's children
* `hasClass` to check if a node contains the specified string in the `className` `prop`
* `text()` to get node's text

## Five Different Types of Selectors

* CSS selectors
  * element syntax (`h1`)
  * class syntax (`.jaebaebae`)
  * id syntax (`#jaebaebae`)
  * attribute syntax (`[href="jaebaebae"]`)
  * `> + ~` (`jae > baebae`)
* Prop selectors
  * Can look up an element by a `prop` value
    * `.find('[text="Some title"])` will look for a node with a `text` prop with the passed in value
* Component constructor
  * `enzyme` will identify the component based on the constructor function
* Component display name - `ExampleComponent`
* Object properties
  * Pass in an object with properties that match an element
  * `.find({ alt: 'React logo' })`

## Use snapshot testing

* Can test that logo and header are rendered but how to test that the logo and header are in some particular order?
* `Jest`'s `snapshot` feature allows us to take a "picture" of the component and basically make sure that UI has not changed when running future tests
* `jest -u` updates the `snapshot`
* `enzyme-to-json` outputs a more readable `snapshot` file

## Two types of `props` testing

* Testing that the component takes the right props
* Testing that the component uses the right props
* `setProps` takes object that is passed to component as new props
  * Calls `componentWillReceiveProps`

## Full DOM rendering (`mount`)

* For components that touch DOM APIs or need full `React` lifecycle
* Requires full-DOM API (`jsdom`, which is a headless browser implemented in `JS`)
* `mount` takes the component as the first argument, and an (optional) object as the second argument that has a `context` property and an `attachTo` property
* `context` is "context" want to pass to component
* `attachTo` property can attach component to specific DOM element
* Since `mount`ing actually mounts a component in the DOM, not `unmount`ing components can impact other tests
* Snapshots will also fail for `mount`s vs. `shallow`s since the snapshot rendering is different

## Simulated Event Handlers

* `.simulate('click')` will simulate a click event
  * `'change'` will simulate change event, etc.
* Trigger events that have side-effects (changes state, which then might have presentational changes (certain text looks different))
* `simulate('click')` gets the `onClick` `prop` and executes it
* `simulate` also takes an optional argument that "mocks" the event object passed to the event handler

## `setState`

* Can update state doing `wrapper.setState({ someStateProperty: someStateValue })`

## Mock `componentDidMount`

* `spyOn` component's `componentDidMount` via `Component.prototype`
* Need to add `componentDidMount` in the component itself

## Access component class methods via the `instance` method

* Can access methods on component using `instance()` method
* If component has method `getA`, can test `getA` using `wrapper.instance().getA()`
