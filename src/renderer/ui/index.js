import Avatar from './components/Avatar'
import Button from './components/Button'
import Card from './components/Card'
import Dialog from './components/Dialog'
import Icon from './components/Icon'
import Layout from './components/Layout'
import Media from './components/Media'
import Menu from './components/Menu'
import Pagination from './components/Pagination'
import Progress from './components/Progress'
import Step from './components/Step'
import Switcher from './components/Switcher'
import Tab from './components/Tab'
import Toolbar from './components/Toolbar'
import Tooltips from './components/Tooltips'
import Window from './components/Window'

import directives from './lib/directives/index'

const components = {
    Avatar,
    Button,
    Card,
    Dialog,
    Icon,
    Layout,
    Media,
    Menu,
    Pagination,
    Progress,
    Step,
    Switcher,
    Tab,
    Toolbar,
    Tooltips,
    Window
}

export default {
    options: {},
    install(Vue, options) {
        this.options = options
        Object.keys(components).forEach(k => {
            Vue.component(components[k].name, components[k])
        })

        Object.keys(directives).forEach(k => {
            Vue.directive(k, directives[k])
        })

    }
}