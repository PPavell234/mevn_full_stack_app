<template>
    <v-conatiner>
        <v-row>
            <v-col sm="10" class="pa-4 mx-auto">
                <v-card class="pa-2">
                    <v-img :src="`http://localhost:5000/uploads/${post.image}`"></v-img>
                    <v-card-action class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <v-btn small outline color="primary">{{ post.category }}</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justyfy-end">
                                <v-btn color="success">Eidt</v-btn>
                                <v-btn color="red">Delete</v-btn>

                            </v-col>
                        </v-row>
                    </v-card-action>
                    <v-card-subtitle class="headline">
                        <h3>{{ post.title }}</h3>
                    </v-card-subtitle>
                    <v-card-text class="grey--text">
                        <p>{{ post.content }}</p>
                        <p>{{ post.created }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-conatiner>
</template>

<script>
import API from "../api";
export default {
    data() {
        return {
            post: {},
        };

    },
    async created() {
        const response = await API.getPostByID(this.$route.params.id);
        this.post = response
    },
};
</script>