<template>
    <h2>
        <div class="input-group">
            <input type="number"  class="form-control" ref="inp" v-model="val"  placeholder="Enter amount please" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4">
            <div class="input-group-append" id="button-addon4">
                <router-link to="/select" @click.native='getNewVal(val)'  class="btn btn-outline-secondary"   type="button">Count</router-link>
                <button class="btn btn-outline-secondary" @click="resState()" type="button">Reset</button>
            </div>
        </div>
         <p>{{inpVal}}</p>
    </h2>
</template>


<script>
export default {
    computed:{

        inpVal(){
            return this.$store.getters.getInpVal
        }

    },

    methods:{
        
        getNewVal(val){
            console.log(val)
            this.$store.commit('setChangeInpVal', val)
            // this.$refs.inp.value = ''
        },

        resState(){
            this.$store.commit('setChangeInpVal', '')
            this.$refs.inp.value = ''
        }

    },
    
}
</script>

<style>
    body{
        background-image: url('../img/depositphotos_62528181-stock-illustration-currency-symbols-seamless-pattern.jpg')
    }

    .btn{
        background-color: #fff;
    }

    .container{
        margin-top: 100px;
    }
   
    
</style>
