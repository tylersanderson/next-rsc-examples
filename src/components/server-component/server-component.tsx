export type ServerComponentProps = {
  ms: number;
  children?: React.ReactNode;
  showSeconds?: boolean;
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
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }}
    >
      <h2>{props.children}</h2>
      {props.showSeconds && <p>{`${seconds} seconds`}</p>}
    </div>
  );
};

export { ServerComponent };
