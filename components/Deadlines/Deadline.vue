<template>
    <v-card>
        <v-card-title>{{data.title}}</v-card-title>
    </v-card>
</template>

<script>
export default {
    name: "Deadline",
    props: ['data']
}
</script>