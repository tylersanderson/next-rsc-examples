export type ServerComponentProps = {
  ms: number;
  children?: React.ReactNode;
};

const ServerComponent = async (props: ServerComponentProps) => {
  const delay = (ms: number) => {
    return new Promise<number>((resolve) => {
      setTimeout(() => {
        resolve(Math.floor(Math.random() * 100));
      }, ms);
    });
  };
  const seconds = props.ms / 1000;

  const key = await delay(props.ms);
  return (
    <div
      key={key}
      style={{
        height: "60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <h2>{props.children}</h2>
      <p>{`${seconds} seconds`}</p>
    </div>
  );
};

export { ServerComponent };
