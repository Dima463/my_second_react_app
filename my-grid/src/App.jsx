import styles from './App.module.css';
import Header from './components/Header/Header';
import ArticleList from './components/ArticleList/ArticleList';
// 1. Импортируем массив статей сюда, чтобы узнать его длину
import articles from './data/articles';

function App() {
  return (
    <div className={styles.app}>
      {/* 2. Передаем количество статей в компонент Header */}
      <Header totalArticles={articles.length} />
      <main>
        <ArticleList />
      </main>
    </div>
  );
}

export default App;
