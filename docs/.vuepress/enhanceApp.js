import Vuetify from 'vuetify'
import home from './pages/Home'
import php from './components/Notes'
import javaScript from './components/Notes'
import server from './components/Notes'

export default ({
    Vue,
    options,
    router
}) => {
    Vue.use(Vuetify)
    Vue.component('home', home)
    Vue.component('server', server)
    Vue.component('php', php)
    Vue.component('javaScript', javaScript)
}