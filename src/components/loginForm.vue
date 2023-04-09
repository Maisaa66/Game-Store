<template>
    <div class="shadow p-3 position-absolute top-75 start-0  bg-white" style="z-index: 3;">
        <p class="text-secondry">Please add your account details</p>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
        </div>
        <div class="d-flex ">
            <div class="form-floating ">
                <input type="text" class="form-control  rounded-end " id="floatingInput" placeholder="Password" v-if="show.showPassword">
                <input type="password" class="form-control  rounded-end " id="floatingPassword" placeholder="Password" v-else>

                <label for="floatingPassword">Password</label>
            </div>
            <button class="p-2 d-flex align-items-center border rounded-start input-group-text" @click="toggleShow">
                <i  class="fas " :class="{'fa-eye-slash': show.showPassword, 'fa-eye':!show.showPassword}"  style="cursor: pointer;"></i>
            </button>
        </div>
    </div>
</template>

<script>
import '@fortawesome/fontawesome-free/css/all.css';
import { reactive } from 'vue';
export default {
    name: "loginForm",
    setup() {
        const show = reactive({
            showPassword:false
        })

        function toggleShow(){
            show.showPassword=!show.showPassword;
            console.log(show.showPassword)
        }

        return{
            show, 
            toggleShow
        }
    }
}
</script>

<style scoped>
.rounded-end {
  border-top-right-radius: 0rem !important;
  border-bottom-right-radius: 0rem !important;
}
.rounded-start {
  border-top-left-radius: 0rem !important;
  border-bottom-left-radius: 0rem !important;
}
</style>