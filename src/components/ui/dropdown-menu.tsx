export default function DropdownMenu() {
  return <div>DropdownMenu</div>;
}

DropdownMenu.trigger = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

DropdownMenu.content = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};
