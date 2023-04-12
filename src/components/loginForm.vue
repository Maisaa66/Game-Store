<template>
    <div class="shadow p-3 position-absolute top-75 start-0  bg-white rounded" style="z-index: 3;">
        <p class="text-secondry">Please add your account details</p>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
        </div>
        <div class="d-flex ">
            <div class="form-floating ">
                <input type="text" class="form-control  rounded-end " id="floatingInput" placeholder="Password"
                    v-if="show.showPassword">
                <input type="password" class="form-control  rounded-end " id="floatingPassword" placeholder="Password"
                    v-else>

                <label for="floatingPassword">Password</label>
            </div>
            <button class="p-2 d-flex align-items-center border rounded-start input-group-text" @click="toggleShow">
                <i class="fas " :class="{ 'fa-eye-slash': show.showPassword, 'fa-eye': !show.showPassword }"
                    style="cursor: pointer;"></i>
            </button>
        </div>

        <div class="m-3" style="color: #572589; font-size: 15px; display: flex; justify-content: end;">
            Forget your password?
        </div>


        <div class="row d-flex justify-content-center">
            <button class="btn btn-primary w-75 shadow">Login</button>
        </div>
        <div class="mt-3" style="color: #572589; font-size: 15px; display: flex; justify-content: center;">
            Don't have an accout? <u>Signup</u>
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
            showPassword: false
        })

        function toggleShow() {
            show.showPassword = !show.showPassword;
            console.log(show.showPassword)
        }

        return {
            show,
            toggleShow
        }
    }
}
</script>

<style lang="scss" scoped>
.rounded-end {
    border-top-right-radius: 0rem !important;
    border-bottom-right-radius: 0rem !important;
}

.rounded-start {
    border-top-left-radius: 0rem !important;
    border-bottom-left-radius: 0rem !important;
}

@import url('https://fonts.googleapis.com/css2?family=Anuphan:wght@400;500;600&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
$primary : #572589;

.primary {
    color: $primary;
}

.bg-primary {
    background-color: $primary;
    color: white;
}

.banger-font-bold {
    font-family: 'Anuphan', sans-serif;
    font-weight: 800;
}

.banger-font-light {
    font-family: 'Anuphan', sans-serif;
    font-weight: 400;
}

.btn-primary {
    background-color: $primary;
    color: white;
    border-color: $primary;
    --bs-btn-color: #fff;
    --bs-btn-bg: $primary;
    --bs-btn-border-color: $primary;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #6c2fa9;
    --bs-btn-hover-border-color: #7131b0;
    --bs-btn-focus-shadow-rgb: 60, 153, 110;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #572589;
    --bs-btn-active-border-color: #572589;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: $primary;
    --bs-btn-disabled-border-color: $primary;
}</style>