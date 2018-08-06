<template>
    <div class="app">
        <Avatar 
            :size="100" 
            :lazy="true"
            src="http://imgtu.5011.net/uploads/content/20170209/4934501486627131.jpg" />
        <Button color="success" small>按钮</Button>
        <Button color="secondary">按钮</Button>
        <Button color="accent" large>按钮</Button>
        <Button color="primary" outline>按钮</Button>
        <Button color="error">按钮</Button>
        <Button color="error" outline>按钮</Button>
        <div style="padding:10px;">
            <Button color="info" block small>按钮</Button>
            <Button color="info" block>按钮</Button>
            <Button color="info" block large>按钮</Button>
        </div>
        
        <Button color="warning">按钮</Button>
        <Button text>按钮</Button>
        <Button color="warning" round>
            <Icon name="menu" />
        </Button>
        <Button color="error" round large>
            <Icon name="arrow-up" />
        </Button>
        <Button color="info" round small>
            <Icon name="menu" :size="12" />
        </Button>
        <Button color="error" text>按钮</Button>
        <Button>按钮</Button>
        <Button disabled>按钮</Button>
        <Button loadding load-text="LOADING..." color="primary">按钮</Button>
        <Button loadding color="primary">按钮</Button>
        <Icon name="add-circle" type="md" />
        <Icon name="add-circle" type="ios" />
        <Icon name="aperture" type="ios" :size="50" />
        <Icon name="aperture" type="md" color="red" />
        <div>
            <Avatar 
            :size="100" 
            :lazy="true"
            src="http://imgtu.5011.net/uploads/content/20170209/4934501486627131.jpg" />
        </div>

        <div>
            <Avatar 
            :size="100" 
            :lazy="true"
            src="http://imgtu.5011.net/uploads/content/20170209/4934501486627131.jpg" />
        </div>

        <div>
            <Avatar 
            :size="100" 
            :lazy="true"
            src="http://imgtu.5011.net/uploads/content/20170209/4934501486627131.jpg" />
        </div>

        <div>
            <Avatar 
            :size="100" 
            :lazy="true"
            src="http://imgtu.5011.net/uploads/content/20170209/4934501486627131.jpg" />
        </div>

        <div>
            <Avatar 
            :size="100" 
            :lazy="true"
            src="http://imgtu.5011.net/uploads/content/20170209/4934501486627131.jpg" />
        </div>


        <div>
            <Avatar 
            :size="100" 
            :lazy="true"
            src="http://imgtu.5011.net/uploads/content/20170209/4934501486627131.jpg" />
        </div>


        <div>
            <Avatar 
            :size="100" 
            :lazy="true"
            src="http://imgtu.5011.net/uploads/content/20170209/4934501486627131.jpg" />
        </div>


        <div>
            <Avatar 
            :size="100" 
            :lazy="true"
            src="http://imgtu.5011.net/uploads/content/20170209/4934501486627131.jpg" />
        </div>


        <div>
            <Avatar 
            :size="100" 
            :lazy="true"
            src="http://imgtu.5011.net/uploads/content/20170209/4934501486627131.jpg" />
        </div>

        <div>
            <Avatar 
            :size="100" 
            :lazy="true"
            src="http://imgtu.5011.net/uploads/content/20170209/4934501486627131.jpg" />
        </div>  
            
        
        <Card header>
            <Toolbar color="warning" title="标题栏1" />
            <Toolbar color="primary" small title="标题栏1" />

            <Toolbar color="error" large title="标题栏1" />
            <Layout column>
                <Media
                    :lazy="true"
                    row
                    :src="[
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3564877025,796183547&fm=27&gp=0.jpg',
                    ]">
                </Media>
                <Media
                    :lazy="true"
                    row
                    :src="[
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3564877025,796183547&fm=27&gp=0.jpg',
                        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533542675362&di=8a040b943cb18737e3157a88bdde3855&imgtype=0&src=http%3A%2F%2Fwww.desktx.cc%2Fd%2Ffile%2Fwallpaper%2Fscenery%2F20161227%2Fb656984d5232883144e6a4febde3594d.jpg',
                        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4100015931,2927547385&fm=27&gp=0.jpg'
                    ]">
                </Media>
            </Layout>   
        </Card>
    </div>
    
</template>

<script>
    export default {
       
    }
</script>

<style lang="less">
    // .app{
    //     height: 100%;
    //     overflow: auto;
    // }
</style>