import { Suspense } from "react";
import { ServerComponent, ServerComponentProps } from "./server-component";
import { LoadingSkeleton } from "../loading-skeleton/loading-skeleton";

type ServerComponentSuspenseProps = ServerComponentProps & {
  suspense: boolean;
};

const ServerComponentSuspense = async (props: ServerComponentSuspenseProps) => {
  if (props.suspense) {
    return (
      <Suspense fallback={<LoadingSkeleton />}>
        <ServerComponent ms={props.ms} showSeconds>
          {props.children}
        </ServerComponent>
      </Suspense>
    );
  }
  return (
    <ServerComponent ms={props.ms} showSeconds>
      {props.children}
    </ServerComponent>
  );
};

export { ServerComponentSuspense };
