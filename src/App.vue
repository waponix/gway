<script>
    import MenuVertical from './components/MenuVertical.vue'
    import Scrollbar from './components/Scrollbar.vue'
    import Search from './components/Search.vue'
    import Panel from './components/Panel.vue'
    import PanelHead from './components/PanelHead.vue'
    import PanelBody from './components/PanelBody.vue'
    import Toggle from './components/Toggle.vue'

    export default {
        data() {
            return {
                menu: [
                    {
                        label: 'Dashboard',
                        category: true,
                    },
                    {
                        label: 'System',
                        icon: 'fa-solid fa-dashboard',
                    },
                    {
                        label: 'Network',
                        icon: 'fa-solid fa-exchange',
                    },
                    {
                        label: 'Reports',
                        category: true,
                    },
                    {
                        label: 'Monitor',
                        icon: 'fa-solid fa-area-chart',
                        subMenu: [
                            { label: 'Device', },
                            { label: 'Sessions', },
                            { label: 'PMS', },
                            { label: 'Account', },
                            { label: 'Top Bandwidth', },
                            { label: 'Cookies', },
                            { label: 'Email', },
                            { label: 'Load Balancer', },
                        ]
                    },
                    {
                        label: 'Logs',
                        icon: 'fa-solid fa-table',
                        subMenu: [
                            { label: 'Device', },
                            { label: 'Session', },
                            { label: 'PMS', },
                            { 
                                label: 'Account Printers', 
                                subMenu: [
                                    { label: 'AP 2100 / 3100', },
                                ]
                            },
                            { label: 'Credit Card', },
                            { label: 'Authentication', },
                        ]
                    },
                    {
                        label: 'Policies',
                        category: true,
                    },
                    {
                        label: 'Event Manager',
                        icon: 'fa-solid fa-calendar',
                        subMenu: [
                            { label: 'Calendar', },
                            { label: 'Events', },
                            { label: 'Event Reports', },
                            { label: 'Settings', },
                        ]
                    },
                    {
                        label: 'Authentication',
                        icon: 'fa-solid fa-check',
                        subMenu: [
                            { label: 'Accounts', },
                            { 
                                label: 'RADIUS',
                                subMenu: [
                                    { label: 'Settings' },
                                ]
                            },
                            { 
                                label: 'PMS', 
                                subMenu: [
                                    { label: 'Operations' },
                                    { label: 'Diagnostics' },
                                ]
                            },
                            { 
                                label: 'Account Printers', 
                                subMenu: [
                                    { label: 'AP 2100 / 3100', },
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Firewall',
                        icon: 'fa-solid fa-copy',
                        subMenu: [
                            { label: 'LAN' },
                            { label: 'WAN' },
                        ]
                    },
                    {
                        label: 'Web Filtering',
                        icon: 'fa-solid fa-lock',
                    },
                    {
                        label: 'Network',
                        category: true,
                    },
                    {
                        label: 'LAN',
                        icon: 'fa-solid fa-sitemap',
                        subMenu: [
                            { label: 'DHCP', },
                            { label: 'Routed Network', },
                            { label: 'DNS Record', },
                            { label: 'Walled Garden', },
                            { label: 'Network Devices', },
                            { label: 'Device Detection', },
                            { label: 'ARP', },
                        ]
                    },
                    {
                        label: 'WAN',
                        icon: 'fa-solid fa-wifi-strong',
                        subMenu: [
                            { label: 'DNS', },
                            { label: 'Load Balancer', },
                        ]
                    },
                    {
                        label: 'Management Port',
                        icon: 'fa-solid fa-compress',
                    },
                    {
                        label: 'Static Routes',
                        icon: 'fa-solid fa-code-fork',
                    },
                    {
                        label: 'Maintenance',
                        category: true,
                    },
                    {
                        label: 'System',
                        icon: 'fa-solid fa-compact-disc',
                    },
                    {
                        label: 'Accounts',
                        icon: 'fa-solid fa-chess-pawn',
                    },
                    {
                        label: 'Reports',
                        icon: 'fa-solid fa-tasks',
                    },
                    {
                        label: 'Logs',
                        icon: 'fa-solid fa-th-list',
                    },
                    {
                        label: 'Diagnostics',
                        category: true,
                    },
                    {
                        label: 'Tools',
                        icon: 'fa-solid fa-tools',
                        subMenu: [
                            { label: 'Authentication', },
                            { label: 'PMS', },
                            { label: 'Web Filtering', },
                        ]
                    },
                    {
                        label: 'Info',
                        icon: 'fa-solid fa-info',
                        subMenu: [
                            { label: 'Account', },
                            { label: 'ARP', },
                            { label: 'DHCP', },
                            { label: 'Route', },
                            { label: 'IP Address', },
                        ]
                    },
                    {
                        label: 'System',
                        category: true,
                    },
                    {
                        label: 'Admin Accounts',
                        icon: 'fa-solid fa-user',
                        subMenu: [
                            { label: 'Admin Groups', },
                            { label: 'Audit Log', },
                            { label: 'Sessions', },
                            { label: 'Settings', },
                        ]
                    },
                    {
                        label: 'Update',
                        icon: 'fa-solid fa-download',
                    },
                    {
                        label: 'Settings',
                        icon: 'fa-solid fa-gears',
                        subMenu: [
                            { label: 'Date & Time', },
                            { label: 'Lawful Intercept', },
                            { label: 'System Log', },
                            { label: 'SNMP', },
                            { label: 'API', },
                            { label: 'High Availability', },
                            { label: 'SMPP', },
                            { label: 'Remote Access', },
                            { label: 'SSL', },
                            { label: 'Web Proxy', },
                            { label: 'Email', },
                            { label: 'Advanced', },
                        ]
                    },
                    {
                        label: 'License',
                        icon: 'fa-solid fa-drivers-license',
                    },
                ]
            }
        },
        methods: {
            onToggle(flag) {
                console.log(flag)
            }
        },
        components: {
            'c-vertical-menu': MenuVertical,
            'c-scrollbar': Scrollbar,
            'c-search': Search,
            'c-panel': Panel,
            'c-panel-head': PanelHead,
            'c-panel-body': PanelBody,
            'c-toggle': Toggle,
        }
    }
</script>
<template>
    <div class="fixed bg-gradient-to-br from-slate-900 to-slate-800">
        <div class="relative h-screen w-screen overflow-x-hidden overflow-y-auto">
        </div>
    </div>
    <div id="-main-container" class="relative min-w-screen min-h-screen">
        <div class="flex">
            <aside class="flex-none bg-slate-400 bg-opacity-5 relative z-10 pb-10">
                <c-vertical-menu :menu="menu" id="left-side-menu"/>
            </aside>
            <div class="relative flex-auto min-h-screen">
                <header id="header" class="relative border-b border-slate-800 bg-slate-900 drop-shadow-sm">
                    <div class="min-h-[50px] flex">
                        <div class="flex-1 relative"></div>
                    </div>
                </header>
                <section id="content" class="relative">
                    <div class="px-10 py-4 relative">
                        <c-panel>
                            <c-panel-head>
                                <div class="flex items-center">
                                    <div class="flex-1 pl-2">
                                        <c-icon icon="fa fa-copy" class="mr-2 text-neutral-500"></c-icon>
                                        <span class="text-lg font-mono font-extrabold text-cyan-700">TODO LIST</span>
                                    </div>
                                    <div class="flex-inherit">
                                        <c-search id="menu-search" class="relative z-[1000]" 
                                        :searchBy="['plan', 'amount', 'plan type', 'creator', 'room number', 'guest number']"
                                        :searchByDate="['created', 'updated', 'expiry', 'arrival', 'departure']"
                                        ></c-search>
                                    </div>
                                </div>
                            </c-panel-head>
                            <c-panel-body class="font-serif">
                                <table class="w-full min-h-[400px]">
                                    <thead class="text-left text-sm font-mono">
                                        <tr>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        
                                    </tbody>
                                </table>
                            </c-panel-body>
                        </c-panel>
                    </div>
                </section>
                <footer id="footer" class="relative"></footer>
            </div>
        </div>
    </div>
</template>