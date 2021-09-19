// import Robot from './components/robot/Robot'
import Header from './components/header/Header'
import Footer from './components/footer/Footer.tsx'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
