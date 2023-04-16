
interface ListProps {
  links: object[]
  onSelectLink: Function
}

export const List: React.FC<ListProps> = ({ links, onSelectLink }) => {
  return (
    <p>Hello, List</p>
  )
}
