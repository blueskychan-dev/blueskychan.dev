const PageLink = ({ to, text }) => {
  return (
    <a
      href={to}
      className="p-1 bg-blue-600/20 transition-colors hover:bg-blue-700 font-bold rounded-lg border-2 border-blue/50"
    >
      {text}
    </a>
  )
}

export default PageLink
