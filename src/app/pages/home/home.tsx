import { Table, Pagination } from 'flowbite-react';

import { LinkVoilationIcon, ManualLinksIcon, ScrappedLinksIcon, TrashIcon } from 'app/assets/svgs/icons';
import SummaryCard from 'app/components/home/summary-card';
import SummaryCardFilter from 'app/components/home/summary-card-filter';
import TableHeader from 'app/components/home/table-header';
import TableRowItem from 'app/components/home/table-row-item';
import TableFilter from 'app/components/table-filter/table-filter';

export default function Home() {
    // we can add controls & functionalities for components in a hook, import here and pass to childs
    return (
        <>
            <SummaryCardFilter />

            <div className="counter-container flex  gap-4 mb-8">
                <SummaryCard count={252} title="Links Scraped" color="#3E97FF" icon={<ScrappedLinksIcon />} />
                <SummaryCard count={252} title="Links Manually Checked" color="#7239EA" icon={<ManualLinksIcon />} />
                <SummaryCard count={252} title="Link Violations" color="#F6C000" icon={<LinkVoilationIcon />} />
                <SummaryCard count={252} title="Links Removed" color="#F1416C" icon={<TrashIcon />} />
            </div>

            <TableFilter />

            <Table hoverable>
                <TableHeader />

                <Table.Body className="divide-y">
                    <TableRowItem status={0} />
                    <TableRowItem status={2} />
                    <TableRowItem status={1} />
                </Table.Body>
            </Table>
            <Pagination currentPage={1} totalPages={100} onPageChange={() => {}} />
        </>
    );
}
