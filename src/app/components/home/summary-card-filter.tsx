import { Dropdown } from 'flowbite-react';
import { memo } from 'react';

function SummaryCardFilter() {
    return (
        <div className="filter-container mb-8 flex">
            <div className="options flex items-center gap-3 ml-auto">
                <span>Sort by</span>
                <Dropdown label="Today" dismissOnClick={false}>
                    <Dropdown.Item>Today</Dropdown.Item>
                    <Dropdown.Item>Yesterday</Dropdown.Item>
                    <Dropdown.Item>This Week</Dropdown.Item>
                    <Dropdown.Item>This Month</Dropdown.Item>
                    <Dropdown.Item>Select Date</Dropdown.Item>
                </Dropdown>
            </div>
        </div>
    );
}

export default memo(SummaryCardFilter);
