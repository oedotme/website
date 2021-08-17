import { env } from './env'

const profile = {
  title: 'Omar Elhawary',
  description:
    'Frontend developer and linux enthusiast interested in user/dev experience, design systems, statically typed languages and functional programming',
  image: 'assets/logo.svg',
  url: env.web.url,
  links: {
    email: 'mailto:oedotme@gmail.com',
    resume: env.web.url + '/files/omar-elhawary-resume.pdf',
    github: 'https://github.com/oedotme',
    twitter: 'https://twitter.com/oedotme',
    linkedin: 'https://linkedin.com/in/oedotme',
  },
}

export const constants = {
  profile,

  links: {
    internal: [
      { name: 'Home', link: '/' },
      { name: 'Blog', link: '/blog' },
      { name: 'Projects', link: '/projects' },
      { name: 'Uses', link: '/uses' },
    ],
    external: [
      { name: 'Email', link: profile.links.email },
      { name: 'Resume', link: profile.links.resume },
      { name: 'GitHub', link: profile.links.github },
      { name: 'Twitter', link: profile.links.twitter },
      { name: 'LinkedIn', link: profile.links.linkedin },
    ],
  },

  projects: [
    {
      name: 'Outline',
      description: 'Video/Chat web application',
      link: 'https://outlineapp.netlify.app',
      using: ['TypeScript', 'React', 'Node.js', 'GraphQL', 'WebRTC'],
    },
    {
      name: 'Render',
      description: 'Opinionated React template',
      link: 'https://github.com/oedotme/render',
      using: ['TypeScript', 'React', 'React Router', 'Tailwind', 'Vite'],
    },
    {
      name: 'Simple terminal',
      description: 'Fork of st',
      link: 'https://github.com/oedotme/st',
      using: ['C'],
    },
  ],

  uses: {
    environment: [
      { name: 'Arch', description: 'Lightweight Linux distribution', link: 'https://archlinux.org' },
      { name: 'Brave', description: 'Privacy focused browser', link: 'https://brave.com' },
      { name: 'Fish', description: 'User friendly interactive shell', link: 'https://fishshell.com' },
      { name: 'Gnome', description: 'Desktop environment - Wayland', link: 'https://www.gnome.org' },
      { name: 'JetBrains', description: 'Font with ligatures support', link: 'https://www.jetbrains.com/lp/mono' },
      { name: 'Kitty', description: 'GPU accelerated terminal emulator', link: 'https://sw.kovidgoyal.net/kitty' },
      { name: 'Neovim', description: 'Vim-based text editor', link: 'https://neovim.io' },
      { name: 'Tmux', description: 'Terminal sessions management', link: 'https://github.com/tmux/tmux' },
    ],
    cli: [
      { name: 'FZF', description: 'General purpose fuzzy finder', link: 'https://github.com/junegunn/fzf' },
      { name: 'Ripgrep', description: 'Better grep', link: 'https://github.com/BurntSushi/ripgrep' },
      { name: 'Stow', description: 'Dotfiles management', link: 'https://www.gnu.org/software/stow' },
      { name: 'Vifm', description: 'Vim-based file manager', link: 'https://vifm.info' },
      { name: 'Volta', description: 'JavaScript tool manager', link: 'https://volta.sh' },
    ],
  },
}
