import { Head } from '@/components'
import { H1, H2, Link, List } from '@/elements'

const content = {
  environment: [
    ['Arch', 'Lightweight Linux distribution', 'https://archlinux.org'],
    ['Brave', 'Privacy focused browser', 'https://brave.com'],
    ['Fish', 'User friendly interactive shell', 'https://fishshell.com'],
    ['Gnome', 'Desktop environment - Wayland', 'https://www.gnome.org'],
    ['JetBrains', 'Font with ligatures support', 'https://www.jetbrains.com/lp/mono'],
    ['Kitty', 'GPU accelerated terminal emulator', 'https://sw.kovidgoyal.net/kitty'],
    ['Neovim', 'Vim-based text editor', 'https://neovim.io'],
    ['Tmux', 'Terminal sessions management', 'https://github.com/tmux/tmux'],
  ],
  cli: [
    ['FZF', 'General purpose fuzzy finder', 'https://github.com/junegunn/fzf'],
    ['Ripgrep', 'Better grep', 'https://github.com/BurntSushi/ripgrep'],
    ['Stow', 'Dotfiles management', 'https://www.gnu.org/software/stow'],
    ['Vifm', 'Vim-based file manager', 'https://vifm.info'],
    ['Volta', 'JavaScript tool manager', 'https://volta.sh'],
  ],
}

export default function Uses() {
  return (
    <>
      <Head title="Uses" description="Tools Omar Elhawary uses at software development" />

      <H1>Uses</H1>

      <H2>Environment</H2>
      <List>
        {content.environment.map(([name, description, link]) => (
          <List.Item key={name}>
            <Link href={link}>{name}</Link> - {description}
          </List.Item>
        ))}
      </List>

      <H2>CLI</H2>
      <List>
        {content.cli.map(([name, description, link]) => (
          <List.Item key={name}>
            <Link href={link}>{name}</Link> - {description}
          </List.Item>
        ))}
      </List>
    </>
  )
}
