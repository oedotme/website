type Props = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> & {
  alt: string
  height: string
  src: string
  title: string
  width: string
}

export const Image = ({ alt, height, src, title, width, ...props }: Props): JSX.Element => {
  return <img alt={alt} height={height} src={src} title={title} width={width} {...props} />
}
