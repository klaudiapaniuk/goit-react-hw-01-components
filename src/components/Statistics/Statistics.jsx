import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title.lenght === 0 && <h2 className={styles.title}>{title}</h2>}

    <ul className={styles.statList}>
      {stats.map(stat => (
        <li className={styles.statItem} key={stat.id}>
          <span className={styles.label}>{stat.label}</span>
          <span className={styles.percentage}>{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
