/* eslint-disable react/no-unknown-property */
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { Scene, Engine } from 'react-babylonjs';
import RotatingBox from '../RotatingBox';
import "../../styles/basic-scene.css";

const SceneOne = () => {
  return (
    <div id='engine-container'>
      <Engine
        antialias
        adaptToDeviceRatio
        canvasId="renderCanvas"
        renderOptions={{
          whenVisibleOnly: true,
        }}
      >
        <Scene>
          <freeCamera
            name="camera1"
            position={new Vector3(0, 5, -10)}
            setTarget={[Vector3.Zero()]}
          />
          <hemisphericLight
            name="light1"
            intensity={0.7}
            direction={new Vector3(0, 1, 0)}
          />
          <ground name="ground" width={6} height={6} />
          <RotatingBox rpm={10} />
        </Scene>
      </Engine>
    </div>
  )
}
export default SceneOne;