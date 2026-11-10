import styles from './Header.module.css';
// Импортируем новый компонент навигации
import Nav from '../Nav/Nav';

function Header({ totalArticles }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>React Blog</h1>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          {/* Вставляем компонент навигации */}
          <Nav />
          
          {/* Наш обязательный счетчик статей */}
          <span style={{
            background: '#ede9fe',
            color: '#6d28d9',
            padding: '0.2rem 0.6rem',
            borderRadius: '12px',
            fontSize: '0.85rem',
            fontWeight: '600'
          }}>
            Всего статей: {totalArticles}
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
