<template>
    <v-container grid grid-list-lg fluid>
        <v-layout wrap row>
            <v-flex xs12 md12 lg12 v-for="item in items" :key="item.link">
                <div class="component-item-list" style="width: 100%;">
                    <v-card>
                        <v-card-title>
                            <router-link class="item-title " :to="item.link + '.html'">{{item.title}}</router-link>
                            <div style="width: 100%">
                                <span class="grey--text">{{ item.date }}</span>
                            </div>
                        </v-card-title>
                        <v-card-text>
                            <span>{{ item.description }}</span>
                        </v-card-text>
                        <v-card-text>
                            <v-chip label>Docker Virtual Technology</v-chip>
                        </v-card-text>
                    </v-card>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name    : "notes",
        computed: {
            items() {
                return this.$page.frontmatter.items
            }
        },
        mounted() {
            this.$nextTick(() => {
                console.log(this.$site);
                console.log(this.$page);
            })
        }
    }
</script>

<style scoped>
    .item-title{
        font-size: 26px;
        position: relative;
        display: inline-block;
        text-decoration: none;
    }
    .item-title:hover,
    .item-title:active,
    .item-title:after {
        visibility: visible;
        transform: scaleX(1);
    }
    .item-title:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: indigo;
        visibility: hidden;
        transform: scaleX(0);
        transition: 0.3s ease-in-out;
    }
</style>