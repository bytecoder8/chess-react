export const BoardComponent = () => {
  let cells: string[] = []
  let oddClass = 'white'
  let evenClass = 'black'
  for (let index = 0; index < 64; index++) {
    cells[index] = 'cell ' + ((index + Math.floor(index / 8)) % 2 == 0 ? oddClass : evenClass)
  }

  return (
    <div className="board">
      {cells.map(cell => (
        <div className={cell}></div>
      ))}
    </div>
  )
}
