<template>
  <v-app >
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list class = "justify-center">
        <v-list-item 
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>



        <v-list-item>
          <v-list-item-action>
            <v-icon
            @click.stop="miniVariant = !miniVariant">
            mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}
      </v-icon>
          </v-list-item-action>
   


        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <!-- <v-btn
        icon
        @click.stop="clipped = clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn> -->
      <!-- <v-btn
        icon
        @click.stop="fixed = fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <v-toolbar-title class = "ml-2" v-text="title" />
      <v-spacer />

      <v-menu v-if = "$store.state.user"
      v-model="menu2"
      close-on-content-click
      :nudge-width="200"
      offset-y
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        icon
        depressed
        :ripple = "false"
          v-bind="attrs"
          v-on="on"
        >
         <v-icon>mdi-book-edit</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item>
          <AddEvent></AddEvent>
        </v-list-item>

      </v-list>
      </v-menu>



      <v-btn
        icon
      >
        <v-icon>mdi-cog-outline</v-icon>
      </v-btn>


  <div v-if = "!$store.state.user" class="text-center">
    <v-menu 
      v-model="menu"
      close-on-content-click
      :nudge-width="200"
      offset-y
      eager
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
        >
        <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
       <FirebaseLogin></FirebaseLogin> 
    </v-menu>
  </div>

  <div class="text-center" v-else>
    <v-menu 
      v-model="menu"
      close-on-content-click
      :nudge-width="200"
      offset-y
      eager
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        depressed
        :ripple = "false"
          v-bind="attrs"
          v-on="on"
        >
        <v-avatar size="35">
          <v-img class = "profile-photo" :src="$store.state.user.photoURL" alt="Profile Photo"></v-img>
        </v-avatar>
        </v-btn>
      </template>
      <!-- Profile Menu -->

      <v-card>
        <v-card-title>{{ $store.state.user.displayName }}</v-card-title>
        <v-card-subtitle>{{$store.state.user.email}}</v-card-subtitle>
      <v-list flat>


        <v-list-item nuxt to="/profile">  
          <v-btn plain>Profile</v-btn>
        </v-list-item>


        <v-list-item @click = "signout" >  
          <v-btn plain>Sign Out</v-btn>
        </v-list-item>

      </v-list>
      </v-card>

    </v-menu>
  </div>



      <v-btn class = "mr-4"
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-android-messages</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <!-- <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list> -->

      <!-- Messaging -->

      <Messaging></Messaging>
    </v-navigation-drawer>
    <!-- <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import AddEvent from '~/components/AddEvent.vue';
export default {
  components: { AddEvent },
  name: 'DefaultLayout',
  data () {
    return {
      clipped: true,
      drawer: true,
      menu: false,
      menu2: false,
      items: [
        {
          icon: 'mdi-code-braces',
          title: 'Coding',
          to: '/coding'
        },
        {
          icon: 'mdi-web',
          title: 'Web Developement',
          to: '/web'
        },
        {
          icon: 'mdi-virtual-reality',
          title: 'Virtual Experiences',
          to: '/meet-virtually'
        }
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'Forum'
    }
  },
  methods: {
    signout(){
      this.$fire.auth.signOut().then(()=> {
        window.location = "/";
      })
    }
  }
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
*{
  font-family: Poppins;
}

</style>