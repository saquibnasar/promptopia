import React from "react";
export interface Provider {
  children: React.ReactNode;
}
function Provider(props: Provider) {
  return <>{props.children}</>;
}

export default Provider;
