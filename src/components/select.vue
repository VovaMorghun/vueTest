<template>
    <h2>
        <div>
       <label>
                <input type="radio" v-model="rad" value= "usd" aria-label="Checkbox for following text input">usd to uah
       </label>
       <label>    
                <input type="radio" v-model="rad" value= "uah" aria-label="Checkbox for following text input">uah to usd
        </label>     
        </div>

        <div class="btns">
        <router-link  to='/result' @click.native='setMoney(rad)' type="button" class="btn btn-outline-success" >Show result</router-link>
        <router-link type="button" class="btn btn-outline-danger" to="/">Back to start</router-link>
        </div>

        <hr>

        <p>{{rad}}</p>
    </h2>
</template>


<script>
export default {
    data(){
        return{
            rad: ''
        }
    },

    methods:{

        setMoney(rad){
            console.log(rad)
            this.$store.commit('setSelMoney', rad)
           
        },

    }
}
</script>

<style>
    .input-group{
        margin-top: 20px;
    }

    .btns{
        margin-top: 20px;
    }

    .btn-outline-success{
        margin-right: 10px;
    }

    .container{
        margin-top: 100px;
    }
</style>





