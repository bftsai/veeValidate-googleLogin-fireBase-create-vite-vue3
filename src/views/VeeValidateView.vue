<template>
    <div class="vee-validate d-flex align-items-center">
        <h1>This is a vee-validate page</h1>
    </div>
    <div class="container">
        <v-form class="row g-3 mb-3" @submit="onSubmit" v-slot="{ errors }">
            <div class="form-floating col-md-4">
                <v-field name="firstName" type="text" class="form-control" id="firstName" :rules="isRequired"></v-field>
                <label for="firstName" class="form-label">First name</label>
                <error-message name="firstName" class="text-danger fw-bold"></error-message>
            </div>
            <div class="form-floating col-md-4">
                <v-field name="lastName" type="text" class="form-control" id="lastName" :rules="isRequired"></v-field>
                <label for="lastName" class="form-label">Last name</label>
                <error-message name="lastName" class="text-danger fw-bold"></error-message>
            </div>
            <div class="form-floating col-md-4 position-relative">
                <button type="button" id="sign-in-button" class="btn btn-outline-primary position-absolute launchCode" :class="{ 'disabled': checkEmail()===false}" @click="firebaseSendSignInLinkToEmail">發送確認連結</button>
                <v-field name="email" type="text" class="form-control" id="email" aria-describedby="inputGroupPrepend" rules="required|email" v-model="email"></v-field>
                <label for="email" class="form-label">Email</label>
                <error-message name="email" class="text-danger fw-bold"></error-message>
            </div>
            <div class="form-floating col-md-3">
                <v-field name="required" type="text" class="form-control" id="city" rules="required"></v-field>
                <label for="city" class="form-label">City</label>
                <error-message name="required" class="text-danger fw-bold"></error-message>
            </div>
            <div class="form-floating col-md-3">
                <v-field name="pwd" type="password" class="form-control" id="pwd" :rules="isPwd"></v-field>
                <label for="pwd" class="form-label">Password</label>
                <error-message name="pwd" class="text-danger fw-bold"></error-message>
            </div>
            <div class="form-floating col-md-3 position-relative">
                <button type="button" id="sign-in-button" class="btn btn-outline-primary position-absolute launchCode" :class="{ 'disabled': checkPhoneNum()===false}" @click="firebaseSignInWithPhoneNumber">發送驗證碼</button>
                <v-field name="phoneNum" type="tel" class="form-control" id="phoneNum" :value="phoneNum" :rules="isPhoneNum" v-model="phoneNum"></v-field>
                <label for="phoneNum" class="form-label">手機號碼</label>
                <error-message name="phoneNum" class="text-danger fw-bold"></error-message>
            </div>
            <div class="form-floating col-md-3 position-relative">
                <button type="button" class="btn btn-outline-primary position-absolute launchCode launchCode-phone" :class="{ 'disabled': isValidateNum()===false}" @click="firebaseConfirmationResult">驗證</button>
                <v-field name="validateNum" type="tel" class="form-control" id="validateNum" v-model="validateNum"></v-field>
                <label for="validateNum" class="form-label">驗證碼</label>
                <error-message name="validateNum" class="text-danger fw-bold"></error-message>
            </div>
            <div class="col-12">
                <div class="form-check">
                    <v-field name="agree" class="form-check-input" type="checkbox" id="agree" v-model="agree" @click="checkCB($event)"></v-field>
                    <label class="form-check-label" for="agree">
                        Agree to terms and conditions
                    </label>
                    <error-message name="agree" class="text-danger fw-bold"></error-message>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary" type="submit" :class="{'disabled': phoneNumValidate===false||agree===false}">Submit Form</button>
            </div>
        </v-form>
        <div>
            <GoogleLogin :callback="callback"/>
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

import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, sendSignInLinkToEmail, isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";

export default {
    data(){
        return {
            firstName: '',
            lastName: '',
            email: 'tsai19911026@gmail.com',
            city: '',
            pwd: '',
            phoneNum: '+8869',
            phoneNumValidate: false,
            validateNum: '',
            agree: false,
            auth: {},
        }
    },
    components: {
        VForm: Form,
        VField: Field,
        ErrorMessage: ErrorMessage,
    },
    methods: {
        onSubmit(values) {
            // vee-validate
            console.log(JSON.stringify(values, null, 2));
        },
        isRequired(value){
            if(!value){
                return 'This field is required';
            }else{
                return true;
            }
        },
        isPwd(value){
            if(!new RegExp('^[A-Z][\\w]{7,}$').test(value)){
                return '密碼首字需為大寫英文，英數混合8碼，例：A1234567'
            }else{
                return true;
            }
        },
        checkEmail(){
            const reg=new RegExp('^[\\w]+@[\\w]+\\.[\\w]+(\\.[\\w]+)?$');
            if(!reg.test(this.email)){
                return false;
            }else{
                return true;
            }
        },
        isPhoneNum(value){
            if(!new RegExp('^[+]8869[0-9]{8}$').test(value)){
                return '手機號碼格式為：+886912345678'
            }else{
                return true;
            }
        },
        checkPhoneNum(){
            if(!new RegExp('^[+]8869[0-9]{8}$').test(this.phoneNum)){
                return false;
            }else{
                return true;
            }
        },
        isValidateNum(){
            if(!new RegExp('^[0-9]{6}$').test(this.validateNum)){
                return false;
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
        },
        checkCB(e){
            this.agree=e.target.checked;
        },
        firebaseSignInWithPhoneNumber(){
            const app = initializeApp(firebaseConfig);
            const auth = getAuth(app);
            auth.languageCode = 'zh-TW';
            
            // document.getElementById('sign-in-button').outerHTML = `<button id="sign-in-button" class="btn btn-outline-primary position-absolute launchCode" :class="{ 'disabled': checkPhoneNum()===false}" style="right: 15px;top: 10px;">發送驗證碼</button>`;
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
                'size': 'invisible',
                'callback': (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                    console.log(response);
                    onSignInSubmit();
                }
            });
            
            const phoneNumber = this.phoneNum;// getPhoneNumberFromUserInput();
            const appVerifier = window.recaptchaVerifier;
            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
                .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                // ...
                }).catch((error) => {
                    console.log(error);
                // Error; SMS not sent
                // ...
                });
        },
        firebaseConfirmationResult(){
            const code = this.validateNum;
            confirmationResult.confirm(code).then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log(user);
            this.phoneNumValidate=true;
            const launchCodePhone=document.querySelector('.launchCode-phone');
            launchCodePhone.outerHTML=`<i class="fa-regular fa-circle-check fa-beat position-absolute launchCode launchCode-phone" style="color: #669c35;right: 15px;top: calc(50% - 7.5px);"></i>`;
            // ...
            }).catch((error) => {
                console.log(error);
            // User couldn't sign in (bad verification code?)
            // ...
            });
        },
        firebaseSendSignInLinkToEmail(){
            const actionCodeSettings = {
            // URL you want to redirect back to. The domain (www.example.com) for this
            // URL must be in the authorized domains list in the Firebase Console.
            url: `http://localhost:5173/veeValidate-googleLogin-fireBase-create-vite-vue3/vee-validate/?email=${this.email}`,
            // This must be true.
            handleCodeInApp: true,
            // iOS: {
            //     bundleId: 'com.example.ios'
            // },
            // android: {
            //     packageName: 'com.example.android',
            //     installApp: true,
            //     minimumVersion: '12'
            // },
            // dynamicLinkDomain: null,
            };
            console.log('click');

            const app = initializeApp(firebaseConfig);
            const auth = getAuth();
            sendSignInLinkToEmail(auth, this.email, actionCodeSettings)
            .then(() => {
                console.log(email);
                // The link was successfully sent. Inform the user.
                // Save the email locally so you don't need to ask the user for it again
                // if they open the link on the same device.
                window.localStorage.setItem('emailForSignIn', email);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,'/',errorMessage);
                // ...
            });
        },
        firebaseIsSignInWithEmailLink(){
            console.log('click');
            // Confirm the link is a sign-in with email link.
            const app = initializeApp(firebaseConfig);
            const auth = getAuth(app);
            console.log(window.location.href);
            console.log(isSignInWithEmailLink(auth, window.location.href));
            if (isSignInWithEmailLink(auth, window.location.href)) {
            // Additional state parameters can also be passed via URL.
            // This can be used to continue the user's intended action before triggering
            // the sign-in operation.
            // Get the email if available. This should be available if the user completes
            // the flow on the same device where they started it.
            // let email = window.localStorage.getItem('emailForSignIn');
            let email =this.email;
            console.log(email);
            if (!email) {
                // User opened the link on a different device. To prevent session fixation
                // attacks, ask the user to provide the associated email again. For example:
                email = window.prompt('Please provide your email for confirmation');
            }
            // The client SDK will parse the code from the link for you.
            signInWithEmailLink(auth, email, window.location.href)
                .then((result) => {
                    console.log(result);
                // Clear email from storage.
                window.localStorage.removeItem('emailForSignIn');
                // You can access the new user via result.user
                // Additional user info profile not available via:
                // result.additionalUserInfo.profile == null
                // You can check if the user is new or existing:
                // result.additionalUserInfo.isNewUser
                })
                .catch((error) => {
                    console.log(error);
                // Some error occurred, you can inspect the code: error.code
                // Common errors could be invalid email and invalid or expired OTPs.
                });
            }
            console.log('fuc finished');
        },
    },
    created(){
        
    },
    mounted(){
        // this.firebase();
    }
}
</script>

<style scoped>
    .container{
        grid-row: span  2;
        grid-column: span 2;
    }
    .launchCode{
        right: 15px;
        top: 10px;
    }
</style>