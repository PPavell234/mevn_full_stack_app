<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>Edit This Post</v-card-title>
                    <v-divider></v-divider>

                    <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data">
                        <v-text-field label="Title" v-model="post.title" prepend-icon="mdi-note"
                            :rules="rules"></v-text-field>

                        <v-text-field label="Category" v-model="post.category" prepend-icon="mdi-view-list"
                            :rules="rules"></v-text-field>

                        <v-textarea label="Content" v-model="post.content" prepend-icon="mdi-note-plus"
                            :rules="rules"></v-textarea>

                        <v-file-input label="Select Image" v-model="post.image" accept="image/*" show-size counter
                            @change="selectFile"></v-file-input>
                        <v-img v-if="post.image" :src="getImageUrl(post.image)" width="120" cover></v-img>

                        <v-btn type="submit" class="mt-3" color="success">
                            Update Post
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

    async created() {
        const response = await API.getPostByID(this.$route.params.id);
        this.post = response;
    },


    methods: {
        selectFile(file) {
            this.post.image = file
        },

        getImageUrl(imagePath) {
            // Если сервер возвращает просто имя файла
            if (!imagePath) return ''
            if (imagePath.startsWith('http')) return imagePath // если уже полный путь
            return `http://localhost:5000/uploads/${imagePath}`
        },

        async submitForm() {
            const form = this.$refs.form

            if (!form.validate()) {
                console.warn('⚠️ Form validation failed')
                return
            }

            const formData = new FormData()
            formData.append('title', this.post.title)
            formData.append('category', this.post.category)
            formData.append('content', this.post.content)
            formData.append('image', this.post.image)

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
