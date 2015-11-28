# react-pending

You’re using pure components, maybe even using stateless functional components.
You love them because they keep your code clean. However, they expect every prop
to be present: rendering this component with `undefined`/`null` props will raise
an exception. This is common if your content is asynchronously loaded.

```javascript
export default function List({ items }) {
  return (
    <ul>
      { items.map(({ title }) => <li>{ title }</li>) }
    </ul>
  );
}
```

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

import List from './List';

const spinnerUnless = pending(Spinner);

// Will only render using `List` if `items` is present, otherwise renders a spinner
const LoadableList = spinnerUnless(({ items }) => !!items)(List);

class ListController extends Component {
  /* ... componentDidMount(), etc ... */

  render() {
    return <LoadableList items={ this.state.items } />
  }
}
```

## Installation

```
npm install react-pending --save
```
