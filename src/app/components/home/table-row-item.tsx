import { Badge, Checkbox, Table } from 'flowbite-react';
import { memo } from 'react';

type TableRowItemProps = {
    status: number;
};

function TableRowItem({ status }: TableRowItemProps) {
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
                <Checkbox />
                <span className="ml-2 inline-block font-semibold text-black">148525</span>
            </Table.Cell>
            <Table.Cell>23 Sep 2023</Table.Cell>
            <Table.Cell>
                <a href="https://google. com">https://google. com</a>
            </Table.Cell>
            <Table.Cell>Google</Table.Cell>
            <Table.Cell>
                {status === 2 && (
                    <Badge color="success" className="inline-block">
                        Success
                    </Badge>
                )}
                {status === 1 && (
                    <Badge color="warning" className="inline-block">
                        Warning
                    </Badge>
                )}
                {status === 0 && (
                    <Badge color="failure" className="inline-block">
                        Failure
                    </Badge>
                )}
            </Table.Cell>
        </Table.Row>
    );
}
export default memo(TableRowItem);
