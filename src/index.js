import React from 'react';

export default function pending(NotReadyComponent) {
  return (hasLoadedTest, ReadyComponent) => (props) => {
    if (hasLoadedTest(props)) {
      return <ReadyComponent { ...props } />;
    }
    else {
      return <NotReadyComponent />;
    }
  }
}
