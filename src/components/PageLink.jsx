const PageLink = ({ to, text }) => {
  return (
    <a
      href={to}
      className="px-2.5 py-0.5 bg-blue-600/20 transition-colors hover:bg-blue-700 font-bold rounded-lg border border-blue/50"
    >
      {text}
    </a>
  )
}

export default PageLink
