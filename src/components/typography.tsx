import { JSX } from 'solid-js'

const styles = {
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

type HeadingProps = JSX.HTMLAttributes<HTMLHeadingElement>

export const H1 = (props: HeadingProps) => <h1 {...{ class: styles.h1, ...props }}>{props.children}</h1>
export const H2 = (props: HeadingProps) => <h1 {...{ class: styles.h2, ...props }}>{props.children}</h1>
export const H3 = (props: HeadingProps) => <h1 {...{ class: styles.h3, ...props }}>{props.children}</h1>
export const H4 = (props: HeadingProps) => <h1 {...{ class: styles.h4, ...props }}>{props.children}</h1>
export const H5 = (props: HeadingProps) => <h1 {...{ class: styles.h5, ...props }}>{props.children}</h1>
export const H6 = (props: HeadingProps) => <h1 {...{ class: styles.h6, ...props }}>{props.children}</h1>
export const HR = (props: JSX.HTMLAttributes<HTMLHRElement>) => <hr class={styles.hr} {...props} />
export const List = (props: JSX.HTMLAttributes<HTMLUListElement>) => <ul class={styles.list} {...props} />
export const ListItem = (props: JSX.HTMLAttributes<HTMLLIElement>) => <li class={styles.listItem} {...props} />
export const Strong = (props: JSX.HTMLAttributes<HTMLElement>) => <strong class={styles.strong} {...props} />
export const Text = (props: JSX.HTMLAttributes<HTMLParagraphElement>) => <p class={styles.text} {...props} />
