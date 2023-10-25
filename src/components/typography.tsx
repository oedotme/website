import { ComponentProps } from 'solid-js'

const styles = {
  blockquote: 'border-l-4 border-elevate pl-4 italic font-medium my-2',
  h1: 'font-bold mt-0 mb-4 text-4xl leading-tight',
  h2: 'font-bold mt-10 text-2xl bg-surface leading-none sticky top-0 py-5 z-20',
  h3: 'font-bold mt-10 mb-4 text-xl',
  h4: 'font-bold mt-10 mb-4 text-lg',
  h5: 'font-bold mt-8 mb-2 text-base',
  h6: 'font-bold mt-6 mb-2 text-base',
  hr: 'my-5 border-surface',
  list: 'mb-6 ml-8 list-disc list-outside',
  listItem: 'mb-4 leading-relaxed text-base marker:text-default',
  strong: 'font-semibold',
  text: 'mb-5 text-base leading-loose',
}

type HeadingProps = ComponentProps<'h1'>

export const Blockquote = (props: ComponentProps<'blockquote'>) => (
  <blockquote {...{ class: styles.blockquote, ...props }}>{props.children}</blockquote>
)

export const H1 = (props: HeadingProps) => <h1 {...{ class: styles.h1, ...props }}>{props.children}</h1>
export const H2 = (props: HeadingProps) => <h2 {...{ class: styles.h2, ...props }}>{props.children}</h2>
export const H3 = (props: HeadingProps) => <h3 {...{ class: styles.h3, ...props }}>{props.children}</h3>
export const H4 = (props: HeadingProps) => <h4 {...{ class: styles.h4, ...props }}>{props.children}</h4>
export const H5 = (props: HeadingProps) => <h5 {...{ class: styles.h5, ...props }}>{props.children}</h5>
export const H6 = (props: HeadingProps) => <h6 {...{ class: styles.h6, ...props }}>{props.children}</h6>
export const HR = (props: ComponentProps<'hr'>) => <hr class={styles.hr} {...props} />
export const List = (props: ComponentProps<'ul'>) => <ul class={styles.list} {...props} />
export const ListItem = (props: ComponentProps<'li'>) => <li class={styles.listItem} {...props} />
export const Strong = (props: ComponentProps<'strong'>) => <strong class={styles.strong} {...props} />
export const Text = (props: ComponentProps<'p'>) => <p class={styles.text} {...props} />
