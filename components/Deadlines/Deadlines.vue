<template>
    <v-card class="deadlines card">
        <v-card-title class = "font-weight-bold overflow-auto">Deadlines</v-card-title>

        <!-- Failed to fetch from database -->
        <div v-if = "errorOccured">
            <v-alert
            dense
            outlined
            type="error"
            >
            Failed to fetch Deadlines!
            </v-alert> 
        </div>

        <div v-if = "!$store.state.user">
            <v-list>
            <v-list-item>
            Login To see your saved deadlines.
            </v-list-item>
            </v-list>
        </div>

        <div v-else>
            <div v-if = "deadlines.length === 0">
                <v-card-text>Relax! You have no upcoming deadlines!</v-card-text>
            </div>

        </div>
    </v-card>
</template>

<script>
export default {
    name: "Deadlines",
    data(){
        return {
            deadlines: [],
            errorOccured: false
        }
    },
    mounted(){
        // Fetch saved Deadlines from database
        if(this.$store.state.user){
            this.$fire.firestore.collection('deadlines').doc(this.$store.state.user.uid).get().then((deadlines)=>{
                if(deadlines.exists){
                    this.deadlines = deadlines.data()
                }else{
                    console.log("No Deadlines Found!")
                }
            }).catch((error)=>{
                this.errorOccured = true
                console.error(error)
            })
        }
    }
}
</script>