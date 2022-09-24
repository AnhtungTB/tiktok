import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAcounts.module.scss';

import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggesttedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />

            <p className={cx('more-btn')}>See more</p>
        </div>
    );
}

SuggesttedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggesttedAccounts;
