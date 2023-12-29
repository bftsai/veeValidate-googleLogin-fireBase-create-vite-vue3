<template>
    <div class="vee-validate d-flex align-items-center">
        <h1>This is a vee-validate page</h1>
    </div>
    <div class="container">
        <v-form class="row g-3 mb-3" @submit="onSubmit" v-slot="{ errors }">
            <div class="col-md-4">
                <label for="firstName" class="form-label">First name</label>
                <v-field name="firstName" type="text" class="form-control" id="firstName" :rules="isRequired"></v-field>
                <error-message name="firstName" class="text-danger fw-bold"></error-message>
            </div>
            <div class="col-md-4">
                <label for="lastName" class="form-label">Last name</label>
                <v-field name="lastName" type="text" class="form-control" id="lastName" :rules="isRequired"></v-field>
                <error-message name="lastName" class="text-danger fw-bold"></error-message>
            </div>
            <div class="col-md-4">
                <label for="email" class="form-label">Email</label>
                <v-field name="email" type="text" class="form-control" id="email" aria-describedby="inputGroupPrepend" rules="required|email"></v-field>
                <error-message name="email" class="text-danger fw-bold"></error-message>
            </div>
            <div class="col-md-6">
                <label for="city" class="form-label">City</label>
                <v-field name="required" type="text" class="form-control" id="city" rules="required"></v-field>
                <error-message name="required" class="text-danger fw-bold"></error-message>
            </div>
            <div class="col-md-3">
                <label for="pwd" class="form-label">Password</label>
                <v-field name="field" type="password" class="form-control" id="city" :rules="isRegex"></v-field>
                <error-message name="field" class="text-danger fw-bold"></error-message>
            </div>
            <div class="col-12">
                <div class="form-check">
                    <v-field name="agree" class="form-check-input" type="checkbox" value="" id="agree"></v-field>
                    <label class="form-check-label" for="agree">
                        Agree to terms and conditions
                    </label>
                    <error-message name="agree" class="text-danger fw-bold"></error-message>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
        </v-form>
        <div>
            <GoogleLogin :callback="callback"/>
        </div>
        <div class="recaptcha-container">
            <input class="sign-in-button" type="button" name="" id="sign-in-button" value="phone">
        </div>
    </div>
</template>

<script>
// vee-validate 相關變數
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email, regex } from '@vee-validate/rules';
// 各國語言
import { localize, setLocale } from '@vee-validate/i18n';
// 下載語言
import zh_TW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import ar from '@vee-validate/i18n/dist/locale/ar.json';
// 引入 vee-validate 內建規則語法
defineRule('email', email);
defineRule('required', required);
defineRule('regex', regex);
// 設定所在地區
setLocale('zh_TW');
// 載入需要使用到的語言
configure({
  // Generates an English message locale generator
  generateMessage: localize({
    zh_TW,
    ar,
  }),
});
// google login 解密取個資
import { decodeCredential } from 'vue3-google-login'
// phone validation
import { firebaseConfig } from "../assets/config.js";
import { initializeApp } from "firebase/app";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getAuth, RecaptchaVerifier, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();

auth.languageCode = 'it';

window.recaptchaVerifier = new RecaptchaVerifier(auth, "sign-in-button", {
    'size': 'invisible',
    'callback': (response) => {
        console.log("prepared phone auth process",response);
    }
});

export default {
    data(){
        return {
            firstName: '',
            lastName: '',
            email: '',
            city: '',
            pwd: '',
            agree: false,
        }
    },
    components: {
        VForm: Form,
        VField: Field,
        ErrorMessage: ErrorMessage,
    },
    methods: {
        onSubmit(values) {
            console.log(JSON.stringify(values, null, 2));
        },
        isRequired(value){
            if(!value){
                return 'This field is required';
            }else{
                return true;
            }
        },
        isRegex(value){
            if(!new RegExp('^[A-Z][\\w]{7,}$').test(value)){
                return 'Wrong password format, Please enter like A1234567'
            }else{
                return true;
            }
        },
        isChecked(value){
            if(!value){
                return '請確認是否同意';
            }else{
                return true;
            }
        },
        callback(response){
            const userData = decodeCredential(response.credential)
            console.log("Handle the userData", userData)
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped>
    .container{
        grid-row: span  2;
        grid-column: span 2;
    }
</style>