<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>Add New Post</v-card-title>
                    <v-divider></v-divider>

                    <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
                        <v-text-field label="Title" v-model="post.title" prepend-icon="mdi-note"
                            :rules="rules"></v-text-field>

                        <v-text-field label="Category" v-model="post.category" prepend-icon="mdi-view-list"
                            :rules="rules"></v-text-field>

                        <v-textarea label="Content" v-model="post.content" prepend-icon="mdi-note-plus"
                            :rules="rules"></v-textarea>

                        <v-file-input label="Select Image" v-model="post.image" :rules="rules" accept="image/*"
                            show-size counter @change="selectFile"></v-file-input>

                        <v-btn type="submit" class="mt-3" color="primary">
                            Add Post
                        </v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from '../api'

export default {
    data() {
        return {
            post: {
                title: '',
                category: '',
                content: '',
                image: null,
            },
            rules: [
                (value) => !!value || 'This field is required',
            ],
        }
    },
    methods: {
        selectFile(file) {
            this.post.image = file
        },

        async submitForm() {
            const form = this.$refs.form

            if (!form.validate()) {
                console.warn('⚠️ Form validation failed')
                return
            }

            // ✅ Создаём FormData
            const formData = new FormData()
            formData.append('title', this.post.title)
            formData.append('category', this.post.category)
            formData.append('content', this.post.content)
            formData.append('image', this.post.image)

            console.log('✅ Form ready to send:', [...formData.entries()])

            try {
                const response = await API.addPost(formData)
                console.log('✅ Post added:', response)
                this.$router.push({ name: 'home', params: { message: response.message } })
            } catch (error) {
                console.error('❌ Error while adding post:', error)
            }
        },
    },
}
</script>
