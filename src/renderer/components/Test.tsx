import { Vue } from '@vuets/class'
import { Component } from 'vue-property-decorator'

@Component
export class Test extends Vue<{
    name: string;
    title?: string;
}> {
    public render() {
        return (
            <div>Test1</div>
        )
    }
}
