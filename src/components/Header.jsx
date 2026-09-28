export default function Header() {
  return (
    <header>
      {/* BUG (issue #6): logo image is missing alt text */}
      <img className="logo" src="/check.png" />
      <h1>Task Tally</h1>
    </header>
  )
}
