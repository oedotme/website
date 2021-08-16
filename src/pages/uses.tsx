import { Head } from '@/components'
import { H1, H2, Link, List, ListItem, Text } from '@/elements'

const title = 'Uses'
const description = "Tools I'm using for software development."

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
      <Head title={title} description={description} />

      <H1>Uses</H1>
      <Text className="opacity-60">{description}</Text>

      <H2>Environment</H2>
      <List className="list-none">
        {content.environment.map(([name, description, link]) => (
          <ListItem key={name}>
            <Link href={link}>{name}</Link> - {description}
          </ListItem>
        ))}
      </List>

      <H2>CLI</H2>
      <List className="list-none">
        {content.cli.map(([name, description, link]) => (
          <ListItem key={name}>
            <Link href={link}>{name}</Link> - {description}
          </ListItem>
        ))}
      </List>
    </>
  )
}
