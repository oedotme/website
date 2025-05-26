import { ComponentProps, Show } from 'solid-js'

const styles = {
  base: 'border-b border-elevate outline-none text-primary',
  focus: 'ring-primary ring-offset-2 ring-offset-surface focus-visible:ring-1',
}

export const Link = (props: ComponentProps<'a'>) => {
  return (
    <Show
      when={props.href?.startsWith('/')}
      fallback={
        <a
          classList={{ [styles.base]: true, [styles.focus]: true }}
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {props.children}
        </a>
      }
    >
      <a href={props.href} rel="prefetch" {...props}>
        {props.children}
      </a>
    </Show>
  )
}
