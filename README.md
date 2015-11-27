# react-pending

You have a pure component, that expects every prop to be present.

```javascript
export default function List({ items }) {
  return (
    <ul>
      { items.map(({ title }) => <li>{ title }</li>) }
    </ul>
  );
}
```

If your content is asynchronously loaded, rendering this component with
`undefined`/`null` props will raise an exception.

**react-pending** can be used to substitute a different component until the
props have all been loaded.

```javascript
import { Component } from 'react';
import pending from 'react-pending';
import Spinner from 'react-spinner';

import List from './List';

const spinnerUnless = pending(Spinner);

// Will only use `List` if `items` is present, otherwise renders a spinner
const LoadableList = spinnerUnless(
  ({ items }) => !!items,
  List
);

class ListController extends Component {
  /* ... componentDidMount(), etc ... */

  render() {
    return <LoadableList items={ this.state.items } />
  }
}
```
