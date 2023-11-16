import { Button, Select, TextInput } from 'flowbite-react';

import { BiExport } from 'react-icons/bi';
import { IoSearch } from 'react-icons/io5';

export default function TableFilter() {
    return (
        <div className="table-fliter bg-white flex justify-between items-center p-3">
            <div>
                <TextInput type="search" icon={IoSearch} placeholder="Search" />
            </div>
            <div className="flex items-center gap-2">
                <Button gradientMonochrome="info">
                    <BiExport className="mr-2 h-5 w-5" />
                    Info
                </Button>
                <Select id="countries" required>
                    <option>Today</option>
                    <option>Yesterday</option>
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>Select Date</option>
                </Select>
                <Select id="countries" required>
                    <option>Status</option>
                    <option>Canada</option>
                    <option>France</option>
                    <option>Germany</option>
                </Select>
            </div>
        </div>
    );
}
