<template>
    <v-flex xs12 sm6 md4 lg3>
        <v-card  v-for="item in items" :key="item.link">
            <v-img class="white--text" height="150px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                <v-container fill-height fluid>
                    <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                            <span class="headline">{{item.title}}</span>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-img>
            <v-card-title>
                <div>
                    <span>{{item.description}}</span><br>
                    <span class="grey--text">{{item.date}}</span><br>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn slot="activator" color="lime accent-3" small :to="item.link + '.html'">view</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>

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
                // console.log(this.$site);
                // console.log(this.$page);
            })
        }
    }
</script>

<style scoped>

</style>