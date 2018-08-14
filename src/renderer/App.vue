<script>
    import { createNamespacedHelpers } from 'vuex'
    const { mapGetters } = createNamespacedHelpers('user')
    export default {
        render() {
            return (
                <div id='app'>
                    <router-view />
                </div>
            )
        },
        created(){
            console.log(this.user)
        },
        computed:{
            ...mapGetters([
                'user'
            ])
        }
    }
</script>

<style lang="less">
    @import './assets/styles/index';
    html{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    body{
        width: 100%;
        height: 100%;
        margin: 0;
        overflow: auto;
    }
</style>