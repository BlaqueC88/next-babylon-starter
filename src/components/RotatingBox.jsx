/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { useState } from 'react'
import { useBeforeRender, useScene } from 'react-babylonjs'

const RotatingBox = ({ rpm }) => {
  const scene = useScene()
  const [y, setY] = useState(0)
  useBeforeRender(() => {
    if (!scene) return
    const deltaTimeInMillis = scene.getEngine().getDeltaTime()
    setY((oldY) => oldY + (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000))
  })
  return (
    <box
      name="box"
      size={2}
      position={new Vector3(0, 1, 0)}
      rotation={new Vector3(0, y, 0)}
    />
  )
}

export default RotatingBox;

// const RotatingBox = ({ rpm }) => {
//   const scene = useScene()
//   const [y, setY] = useState(0)
//   useBeforeRender(() => {
//     if (!scene) return
//     const deltaTimeInMillis = scene.getEngine().getDeltaTime()
//     setY((oldY) => oldY + (rpm / 60) * Math.PI * 2 * (deltaTimeInMillis / 1000))
//   })
//   return (
//     <box
//       name="box"
//       size={2}
//       position={new Vector3(0, 1, 0)}
//       rotation={new Vector3(0, y, 0)}
//     />
//   )
// }