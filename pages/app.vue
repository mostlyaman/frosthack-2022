<template>
  <v-row justify="center" align="center">
    <v-col cols = "6">

        <Deadlines></Deadlines>


    </v-col>

    <v-col cols = "6">
      
      <Todos></Todos>
    
    </v-col>
    
  </v-row>
</template>

<script>
import Deadlines from '~/components/Deadlines/Deadlines.vue'
export default {
  components: { Deadlines },
  name: 'IndexPage'
}
</script>

<style>
.card{
  padding: 4px;
}

</style>
