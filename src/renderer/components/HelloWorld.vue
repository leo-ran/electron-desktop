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
            <Layout column>
                <Media
                    :lazy="true"
                    :height="200"
                    src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533507701905&di=d2136eb1f5277bc412e6b0a9a9147ad4&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F5243fbf2b2119313b705987069380cd790238daf.jpg">
                </Media>
                <Layout row>
                    <Card>
                        <Media
                            :lazy="true"
                            :height="200"
                            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533507701905&di=d2136eb1f5277bc412e6b0a9a9147ad4&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F5243fbf2b2119313b705987069380cd790238daf.jpg">
                        </Media>
                    </Card>
                    <Card>
                        <Media
                            :lazy="true"
                            :height="200"
                            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533507701904&di=6416292575fb73ef6ec0934593b9fa38&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fb17eca8065380cd79a75c52cad44ad3458828183.jpg"
                            >
                        </Media>
                    </Card>
                    <Card>
                        <Media
                            :lazy="true"
                            :height="200"
                            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533504116495&di=6fb4d943983fdb5c53f60531f58fa17a&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F267f9e2f07082838304837cfb499a9014d08f1a0.jpg"
                            >
                        </Media>
                    </Card>
                </Layout>
                <Layout colunm>
                    <Card>
                        <Media
                            :lazy="true"
                            :height="200"
                            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533504116492&di=aa5e4796a887e5a688043f123caf719e&imgtype=0&src=http%3A%2F%2Fh.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F95eef01f3a292df57f4575cab0315c6035a8736f.jpg"
                            >
                        </Media>
                    </Card>
                </Layout>
                <Layout row>
                    <Card>
                        <Media
                            :lazy="true"
                            :height="200"
                            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533504116494&di=6784cf50af5754bed5565eb59772b697&imgtype=0&src=http%3A%2F%2Fd.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fd0c8a786c9177f3e348694d67ccf3bc79e3d56be.jpg"
                            >
                        </Media>
                    </Card>
                    <Card>
                        <Media
                            :lazy="true"
                            :height="200"
                            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533504116494&di=ac2d56186acb9929e7c520750cc0aacf&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Fd439b6003af33a87433692cfca5c10385243b588.jpg"
                            >
                        </Media>
                    </Card>
                    <Card>
                        <Media
                            :lazy="true"
                            :height="200"
                            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533504116492&di=4a669027a38b32705dea4b1108f5870f&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F91ef76c6a7efce1ba958b016a351f3deb58f65fe.jpg"
                            >
                        </Media>
                    </Card>
                </Layout>
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