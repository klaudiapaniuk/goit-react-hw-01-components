import PropTypes from 'prop-types';
import css from '../Statistics/Statistics.css';

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    {title.lenght === 0 && <h2 className="title">{title}</h2>}

    <ul className="stat-list">
      {stats.map(stat => (
        <li className="stat-item" key={stat.id}>
          <span className="label">{stat.label}</span>
          <span className="percentage">{stat.percentage}</span>
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
