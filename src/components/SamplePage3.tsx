type MessageProps = {
  Message: string;
};

export const SamplePage3: React.FC<MessageProps> = (props) => {
  return <p>{props.Message}</p>;
};
