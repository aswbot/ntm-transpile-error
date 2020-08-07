import React from 'react'

type Props = React.PropsWithChildren<{
  className?: string
}>

export default function Header({ children, className }: Props) {
  return <header className={className}>{children}</header>
}
