import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/tailwind.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
    faArrowCircleDown,
    faCaretRight,
    faCaretDown,
    faDashboard,
    faTachometer,
    faExchange,
    faAreaChart,
    faTable,
    faCalendar,
    faCheck,
    faCopy,
    faLock,
    faWifiStrong,
    faSitemap,
    faCompressAlt,
    faCompress,
    faCodeFork,
    faCompactDisc,
    faChessPawn,
    faTasks,
    faThList,
    faTools,
    faInfo,
    faUser,
    faDownload,
    faGears,
    faDriversLicense,
    faCloud,
    faBurger,
    faHamburger,
    faBars,
    faClose,
    faCaretLeft,
    faMagnifyingGlass,
    faGear,
    faEllipsisVertical,
    faHome,
} from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add([
    faArrowCircleDown, 
    faCaretRight, 
    faCaretDown,
    faDashboard,
    faTachometer,
    faExchange,
    faAreaChart,
    faTable,
    faCalendar,
    faCheck,
    faCopy,
    faLock,
    faWifiStrong,
    faSitemap,
    faCompressAlt,
    faCompress,
    faCodeFork,
    faCompactDisc,
    faChessPawn,
    faTasks,
    faThList,
    faTools,
    faInfo,
    faUser,
    faDownload,
    faGears,
    faDriversLicense,
    faCloud,
    faBurger,
    faHamburger,
    faBars,
    faClose,
    faCaretLeft,
    faMagnifyingGlass,
    faGear,
    faEllipsisVertical,
    faHome,
])

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('c-icon', FontAwesomeIcon)

app.mount('#app')
