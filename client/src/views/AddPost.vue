<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa-5">
                    <v-card-title>Add New Post</v-card-title>
                    <v-divider></v-divider>

                    <v-form ref="form" class="pa-5" enctype="multipart/form-data">
                        <v-text-field label="Title" prepend-icon="mdi-note" :rules="rules"
                            v-model="title"></v-text-field>

                        <v-text-field label="Category" prepend-icon="mdi-view-list" :rules="rules"
                            v-model="category"></v-text-field>

                        <v-textarea label="Content" prepend-icon="mdi-note-plus" :rules="rules"
                            v-model="content"></v-textarea>

                        <v-file-input :rules="rules" accept="image/*" show-size counter label="Select Image"
                            v-model="image"></v-file-input>

                        <v-btn type="submit" class="mt-3" color="primary" @click.prevent="submitForm">
                            Add Post
                        </v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            category: '',
            content: '',
            image: null,
            rules: [
                (value) => !!value || 'This field is required', // ✅ исправлено
            ],
        }
    },
    methods: {
        submitForm() {
            // Проверяем валидацию формы
            const form = this.$refs.form
            if (form.validate()) {
                // Создаём FormData для отправки на сервер
                const formData = new FormData()
                formData.append('title', this.title)
                formData.append('category', this.category)
                formData.append('content', this.content)
                formData.append('image', this.image)

                console.log('✅ Form ready to send:', [...formData.entries()])

                // Здесь можно отправить форму на сервер через axios
                // axios.post('http://localhost:5000/api/post', formData)
            } else {
                console.warn('⚠️ Form validation failed')
            }
        },
    },
}
</script>
