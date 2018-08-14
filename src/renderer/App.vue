

<script lang="tsx">
    import { Component, Vue, Prop } from 'vue-property-decorator'
    @Component
    export default class App extends Vue {
        public render(){
            return <div>app</div> 
        }
        @Prop(Number) value!:number; 
        public title:string = 'hehe'
        public click(){
            this.title = '哈哈'
        }
    }
</script>

<style>

</style>