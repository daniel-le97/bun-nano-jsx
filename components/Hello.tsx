import Nano,{ h, FC } from 'nano-jsx/esm/index.js'

export const Hello: FC<{ name: string }> = ({ name }) => {
  return <h1 >Hello {name}!</h1>
}


