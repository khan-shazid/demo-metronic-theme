import { Checkbox, Table } from 'flowbite-react';
import { memo } from 'react';

function TableHeader() {
    return (
        <Table.Head>
            <Table.HeadCell className="p-4">
                <Checkbox /> ID
            </Table.HeadCell>
            <Table.HeadCell>DATE REMOVED</Table.HeadCell>
            <Table.HeadCell>LINK</Table.HeadCell>
            <Table.HeadCell>SOURCE</Table.HeadCell>
            <Table.HeadCell>Action</Table.HeadCell>
        </Table.Head>
    );
}

export default memo(TableHeader);
