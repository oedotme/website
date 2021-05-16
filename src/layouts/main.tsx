type Props = {
  children: JSX.Element
}

export default function Main({ children }: Props): JSX.Element {
  return (
    <div className="flex flex-col p-6 min-h-screen">
      <main className="flex flex-1 flex-col items-center justify-center">{children}</main>
    </div>
  )
}
