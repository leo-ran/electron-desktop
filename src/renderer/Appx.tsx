import { Component, Vue } from '@vuets/class'

@Component
export default class App extends Vue {
    public render() {
        return (
            <div>
                <router-view />
            </div>
        )
    }
}
