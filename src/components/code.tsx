import { JSX, Show } from 'solid-js'

export const Code = (props: JSX.HTMLAttributes<HTMLElement> & { className: string }) => {
  return (
    <Show
      when={props.className?.includes('language-')}
      fallback={
        <code {...props} class="rounded bg-element py-1 px-1">
          {props.children}
        </code>
      }
    >
      <div class="group relative">
        <button class="copy-code absolute top-2 right-2 z-10 hidden rounded-sm bg-elevate py-1 px-2 text-xs font-medium group-hover:block">
          Copy
        </button>

        <code
          {...props}
          class="my-7 grid overflow-x-scroll rounded border border-elevate bg-neutral p-5 pr-6 text-sm font-medium leading-normal"
        >
          {props.children}
        </code>
      </div>
    </Show>
  )
}
