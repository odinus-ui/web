import GlobalFooter from "@/components/section/footer";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <GlobalFooter />
    </>
  );
}
