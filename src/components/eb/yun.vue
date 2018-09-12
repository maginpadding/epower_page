<template>
    <div>
        <!-- web主机 -->
        <vhost></vhost>
        <!-- 云服务器 -->
        <server></server>
        <!-- 租用托管 -->
        <rentalHost></rentalHost>
        <!-- 我们的优势 -->
        <advantage></advantage>
    </div>
</template>

<script>
import vhost from './vhost.vue';
import rentalHost from './rentalHost.vue';
import server from './server.vue';
import advantage from './advantage.vue';
    export default {
        components:{vhost,rentalHost,server,advantage}
    }
</script>
<style>
@import url("../../style/css/global.css");
</style>

<style scoped>

</style>

