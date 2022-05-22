<template>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn plain
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add Event
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Add an Upcoming Deadline</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="saveEvent"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        
        <v-row class = "ma-4" align = "center" justify = "center">
        
        <v-col cols='10' class = "justify-center">
          <v-form>
            <v-text-field outlined v-model = "event.title" label="Deadline Title"></v-text-field>
            <v-textarea outlined v-model = "event.description" label = "Deadline Descriptions" />
            

            <v-row align="center" justify="center" class = "mb-6">
            <v-date-picker 
              v-model="event.date"
              label = "Deadline Date"
              class="mt-4 mx-10"
              :min= "(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
            ></v-date-picker>


            <v-time-picker 
              v-model="event.time"
              class="mt-4"
              format="24hr"
              scrollable
            ></v-time-picker>
            </v-row>
          </v-form>
        </v-col>
        
        </v-row>

        <!-- <v-list
          three-line
          subheader
        >
          <v-subheader>User Controls</v-subheader>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Content filtering</v-list-item-title>
              <v-list-item-subtitle>Set the content filtering level to restrict apps that can be downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Password</v-list-item-title>
              <v-list-item-subtitle>Require password for purchase or use password to restrict purchase</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          three-line
          subheader
        >
          <v-subheader>General</v-subheader>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="notifications"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Notifications</v-list-item-title>
              <v-list-item-subtitle>Notify me about updates to apps or games that I downloaded</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="sound"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Sound</v-list-item-title>
              <v-list-item-subtitle>Auto-update apps at any time. Data charges may apply</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox v-model="widgets"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Auto-add widgets</v-list-item-title>
              <v-list-item-subtitle>Automatically add home screen widgets</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list> -->
      </v-card>
    </v-dialog>
  
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        event: {
          title: "",
          description: "",
          date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
          time: new Date(Date.now()).toTimeString().substr(0,5)
        }
      }
    },
    methods: {
        async saveEvent(){
            if(!this.$store.state.user){
              alert("Error! No user has logged in!")
              window.location = "/app"
            }else{
              let data;
              this.$fire.firestore.collection('deadlines').doc(this.$store.state.user.uid).get().then(events => {
              if(!events.exists){
                data = {data: [this.event]}
              }else{
                let old = events.data().data
                old.push(this.event)
                data = {data: old}
              }
              this.$fire.firestore.collection('deadlines').doc(this.$store.state.user.uid).set(data).then(()=>{
                console.log("Deadline successfully added")
              }).catch(error=>{
                console.log(events)
                alert("Adding Deadline Failed!")
                console.error(error)
              })
            })
            this.dialog = false;
        }
    }
  }
}
</script>