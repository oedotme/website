import { JSX, Show } from 'solid-js'

export const Code = (props: JSX.HTMLAttributes<HTMLElement>) => {
  return (
    <Show
      when={props.class?.includes('language-')}
      fallback={
        <code {...props} class="rounded bg-element px-1 py-1">
          {props.children}
        </code>
      }
    >
      <div class="group relative">
        <button class="copy-code absolute right-2 top-2 z-10 hidden rounded-sm bg-elevate px-2 py-1 text-xs font-medium group-hover:block">
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
