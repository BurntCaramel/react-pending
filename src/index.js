import React from 'react';

export default function pendingComponent(hasLoadedTest, ReadyComponent, NotReadyComponent) {
  return (props) => {
    if (hasLoadedTest(props)) {
      return <ReadyComponent { ...props } />;
    }
    else {
      return <NotReadyComponent />;
    }
  }
}
