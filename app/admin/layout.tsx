type Props = {
    children: React.ReactNode;
}

export default function AdminLayout(props: LayoutProps<'/admin'>) {
  return <div>{props.children}</div>;
}