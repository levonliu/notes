<template>
    <v-navigation-drawer v-model="drawer" fixed clipped app width="270" :value="true" stateless>
        <router-link class="item-title" :to="home.link">
            <v-img :aspect-ratio="1.7" src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-732407.png">
                <v-layout pa-2 column fill-height class="lightbox white--text">
                    <v-spacer></v-spacer>
                    <v-flex shrink>
                        <div class="subheading">Liu wen</div>
                        <div class="body-1">levonliu@outlook.com</div>
                    </v-flex>
                </v-layout>
            </v-img>
        </router-link>
        <v-list dense>
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
                    <v-list-tile-action>
                        <i class="icon iconfont" :class="subItem.icon"></i>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                    </v-list-tile-content>
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
        watch   : {
            openStatus(val) {
                this.drawer = val
            },
            drawer(val) {
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
    .router-link-active{
        text-decoration: none;
    }
    .lightbox {
        box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
    }
</style>