import { Avatar, Dropdown, Navbar, Sidebar } from 'flowbite-react';
import { ReactNode } from 'react';

import {
    HomeIcon,
    SubmitViolationIcon,
    WhitelistIcon,
    BillingIcon,
    AffiliateProgramIcon,
    SettingsIcon,
    FaqIcon,
    SupportIcon,
} from 'app/assets/svgs/icons';
import { useLocation } from 'react-router-dom';

import styles from './private-layout.module.css';

const SIDE_BAR_ITEMS = [
    {
        href: '/home',
        title: 'Home',
        Icon: HomeIcon,
    },
    {
        href: '/submit-voilation',
        title: 'Submit Violation',
        Icon: SubmitViolationIcon,
    },
    {
        href: '/whitelist',
        title: 'Whitelist',
        Icon: WhitelistIcon,
    },
    {
        href: '/billing',
        title: 'Billing',
        Icon: BillingIcon,
    },
    {
        href: '/affiliate-program',
        title: 'Affiliate Program',
        Icon: AffiliateProgramIcon,
    },
    {
        href: '/settings',
        title: 'Settings',
        Icon: SettingsIcon,
    },
    {
        href: '/faq',
        title: 'FAQ',
        Icon: FaqIcon,
    },
    {
        href: '/support',
        title: 'Support',
        Icon: SupportIcon,
    },
];

export default function PrivateLayout({ children }: { children: ReactNode }) {
    const { pathname } = useLocation();
    return (
        <div className="dashboard-container">
            <Navbar fluid rounded>
                <Navbar.Brand href="https://flowbite-react.com">
                    <img src={require('app/assets/images/logo-light.png')} className="mr-3" alt="Logo" />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={
                            <Avatar
                                alt="User settings"
                                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                rounded
                            />
                        }
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                </div>
            </Navbar>
            <div className="dashboard-content-container">
                <Sidebar aria-label="Default sidebar example" className="dashboard-sidebar">
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            {SIDE_BAR_ITEMS.map(({ href, title, Icon }) => {
                                const isActive = pathname.includes(href);
                                return (
                                    <Sidebar.Item
                                        key={href}
                                        href={href}
                                        className={`${styles['sidebar-menu-item']} ${isActive && styles.active}`}
                                    >
                                        <Icon isActive={isActive} />
                                        <span> {title}</span>
                                    </Sidebar.Item>
                                );
                            })}
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
                <div className="dashboard-content">{children}</div>
            </div>
        </div>
    );
}
