<template>
    <v-navigation-drawer v-model="drawer" fixed clipped app class="light-blue darken-2" dark>
        <v-list dense>
            <v-list-tile :to="home.link">
                <v-list-tile-action>
                    <i class="icon iconfont" :class="home.icon"></i>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title>{{home.title}}</v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
            <v-list-group v-for="item in items" :key="item.title" no-action>
                <v-list-tile slot="activator">
                    <v-list-tile-action>
                        <i class="icon iconfont" :class="item.icon"></i>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-list-tile v-for="subItem in item.children" :key="subItem.title" :to="subItem.link">
                    <v-list-tile-content>
                        <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <i class="icon iconfont" :class="subItem.icon"></i>
                    </v-list-tile-action>
                </v-list-tile>
            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name    : "Navigation",
        props   : {
            openStatus: {type: Boolean}
        },
        data() {
            return {
                drawer: true
            }
        },
        watch: {
            openStatus(val){
                this.drawer = val
            },
            drawer(val){
                this.$emit('update:openStatus', val)
            }
        },
        computed: {
            home() {
                return this.$site.themeConfig.home;
            },
            items() {
                return this.$site.themeConfig.sidebar;
            }
        },
    }
</script>

<style scoped>

</style>