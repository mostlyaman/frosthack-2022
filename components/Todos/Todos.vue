<template>
    <v-card class="todos card">
        <v-card-title class = "font-weight-bold">Todos</v-card-title>

        <!-- Failed to fetch from database -->
        <div v-if = "errorOccured">
            <v-alert
            dense
            outlined
            type="error"
            >
            Failed to fetch Todos!
            </v-alert> 
        </div>

        <div v-if = "!$store.state.user">
            <v-list>
            <v-list-item>
            Login To see your saved todos.
            </v-list-item>
            </v-list>
        </div>

        <div v-else>
            <div v-if = "todos.length === 0">
                <v-card-text>You have no saved todos!</v-card-text>
            </div>

        </div>
    </v-card>
</template>

<script>
export default {
    name: "Todos",
    data(){
        return {
            todos: [],
            errorOccured: false
        }
    },
    mounted(){
        // Fetch saved Todos from database
        if(this.$store.state.user){
            this.$fire.firestore.collection('todos').doc(this.$store.state.user.uid).get().then((todos)=>{
                if(todos.exists){
                    this.todos = todos.data()
                }else{
                    console.log("No Todos Found!")
                }
            }).catch((error)=>{
                this.errorOccured = true
                console.error(error)
            })
        }
    }
}
</script>