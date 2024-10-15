export default function Dialog() {
  return <div>Dialog</div>;
}

Dialog.trigger = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

Dialog.content = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};
