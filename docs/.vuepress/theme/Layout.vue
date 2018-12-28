<template>
    <v-app id="inspire">
        <navigation :openStatus.sync="drawer"></navigation>
        <v-content >
            <v-container fluid >
                <component :is="com"></component>
                <v-layout justify-center>
                    <Content/>
                </v-layout>
            </v-container>
        </v-content>
        <v-btn fab dark small color="teal" style="right:20px;bottom: 20px;position: fixed" @click="drawer = !drawer">
            <v-icon dark>list</v-icon>
        </v-btn>
    </v-app>
</template>

<script>
    import navigation from './layouts/Navigation'
    export default {
        data: () => ({
            drawer: true,
        }),
        methods:{
        },
        computed:{
            com(){
                return this.$page.frontmatter.component
            }
        },
        mounted(){
            // console.log(this.$page)
        },
        components:{
            navigation
        }
    }
</script>

<style scoped>
    @import '../../../node_modules/vuetify/dist/vuetify.css';
    @import '../../../node_modules/material-design-icons-iconfont/dist/material-design-icons.css';
    @import './style/iconfont.css';
</style>