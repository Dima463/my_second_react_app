import Layout from './components/Layout.jsx'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const siteTitle = 'Мой React-сайт'
  const userName = 'Студент' 

  return (
    <Layout siteTitle={siteTitle}>
      <Header title={siteTitle} userName={userName} />
      <Sidebar items={['Главная', 'О нас', 'Услуги', 'Контакты']} />
<MainContent>
  <h1>Панель управления проектами</h1>
  <p>Ниже представлен список ваших текущих лабораторных работ по React:</p>
  <ol>
    <li>Лабораторная работа №1 — Выполнена (Блог на Flexbox + счетчик)</li>
    <li>Лабораторная работа №2 — В процессе (Макет сайта на CSS Grid)</li>
    <li>Лабораторная работа №3 — Скоро начнется</li>
  </ol>
</MainContent>

      <Footer year={new Date().getFullYear()} />
    </Layout>
  )
} 

export default App
