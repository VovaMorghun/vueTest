<template>
    <h2>
        <div class="input-group">
            <p>{{ result }}:{{ badge }}</p>
            
        </div>
        <div class="btns">
            <router-link type="button" @click=" getResult()" class="btn btn-outline-danger" to="/">Back to start</router-link>
        </div>
    </h2>
</template>

<script>
export default {
   computed:{

       result(){
           return this.$store.getters.getRsult
       },

       badge(){
           return this.$store.getters.getSelectedMoney
       }

   },
   methods:{
       getResult(){
           this.$store.dispatch(Exchange_Rates)
       }
   }
}
</script>

<style>
    
</style>


