import './circles.scss'

export const Circles = () => {
  const circles = Array.from({ length: 5 * 9 });

  return (
    <div className="circles">
      {circles.map((_, index) => (
        <div key={index} className="circles__circle"></div>
      ))}
    </div>
  )
}
