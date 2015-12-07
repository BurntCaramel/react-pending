# react-pending

You’re using pure components, maybe even using stateless functional components.
You love them because they keep your code clean:

```javascript
export function List({ items }) {
  return (
    <ul>
      { items.map(({ title }) => <li>{ title }</li>) }
    </ul>
  );
}

export function ErrorMessage({ error }) {
  return (
    <p class='error'>
      { error }
    </p>
  );
}
```

However, they expect every prop to be present: rendering this component with
`undefined`/`null` props will raise an exception. This is common if your content
is asynchronously loaded.

**react-pending** can be used to substitute a different component until the
passed props have been loaded. Its declarative API allows render methods to be
kept clean, without if statements or ternaries.

In the example below, `LoadableList` is substituted for `List` – it
accepts the exact same props, but will render with a spinner if `items` is not
yet defined.

```javascript
import { Component } from 'react';
import pending from 'react-pending';
import Spinner from 'react-spinner';

import { List, ErrorMessage } from './components';

const spinnerUnless = pending(Spinner);

// Will only render using `List` if `items` is present, otherwise renders a spinner
const LoadableList = spinnerUnless(({ items }) => !!items)(List, ErrorMessage);

class ListController extends Component {
  /* ... componentDidMount(), etc ... */

  render() {
    return <LoadableList items={ this.state.items } error={ this.state.errorLoading } />;
  }
}
```

If you just to want to check for the presence of every prop, pass no arguments
to the result of `pending()`:

```javascript
const spinnerUnlessReady = pending(Spinner)();

// Will only render using `List` if passed props are all ready, otherwise
// renders a spinner
const LoadableList = spinnerUnlessReady(List);
```

## Installation

```
npm install react-pending --save
```
