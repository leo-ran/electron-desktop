import Vue from '@vuets/class'
import { Component } from 'vue-property-decorator'

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
