import Spline from '@splinetool/react-spline';
import styles from "../styles/Scene.module.css"


export default function Scene() {
  return (
    <section className={styles.threedbg}>
      <div className={styles.mask}></div>
    <Spline scene="https://prod.spline.design/joShmGmVYjGME151/scene.splinecode" />
    </section>
  );
}
