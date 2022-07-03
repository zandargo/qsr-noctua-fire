<template>
  <div >
    <!-- <div class="col-12 bg-d2"> -->
      <q-card bordered class="absolute-center bg-white shadow-7">
        <q-card-section class="text-center">
          <q-icon name="shutter_speed" size="64px" class="text-primary" />
          <div class="text-h3 q-pt-md">Bem vindo ao NOCTUA</div>
          <!-- <div class="text-subtitle2 text-center">by Sixem</div> -->
        </q-card-section>

        <q-separator inset />

        <!-- //*  LOGIN  *// -->
        <div v-if="isLogin">
          <q-card-section v-if="isLogin" >
            <q-form @submit="doLogin">
              <!-- //> E-MAIL INPUT -->
              <q-input
                v-model="email"
                type="email"
                label="E-mail"
              />
              <!-- //> PASSWORD INPUT -->
              <q-input
                v-model="password"
                type="password"
                label="Senha"
                @keypress.enter="doLogin()"
              />
              <!-- //> BUTTON LOG IN -->
              <div class="full-width q-pt-md flex flex-center">
                <q-btn
                  rounded
                  :color="(!email || !password) ? 'grey' : 'primary'"
                  label="Entrar"
                  @click="doLogin()"
                  class="full-width"
                  :disable="!email || !password"
                />
              </div>
            </q-form>
          </q-card-section>
          <q-separator inset/>
          <!-- //> TOGGLE SECTION TO REGISTER -->
          <q-card-section class="text-center">
            Não possui uma conta?
            <span class="text-info" @click="isLogin=false">Registrar</span>
          </q-card-section>
        </div>

        <!-- //*  REGISTRAR  *// -->
        <div v-if="!isLogin">
          <q-card-section>
            <q-form @submit="doRegister" >
              <!-- //> NAME INPUT -->
              <q-input
                v-model="name"
                type="text"
                label="Nome"
              />
              <!-- //> E-MAIL INPUT -->
              <q-input
                v-model="email"
                type="email"
                label="E-mail"
              />
              <!-- //> PASSWORD1 INPUT -->
              <q-input
                v-model="password1"
                type="password"
                label="Senha"
              >
                <template v-if="password1 !== ''" v-slot:append class="q-mb-none">
                  <q-icon
                    :color="strnColr"
                    :name="strnSymb" />
                </template>
              </q-input>
              <!-- <p>{{ passSymb[pwdStrength(password1)][0] }}</p>
              <p>{{ strnSymb }}</p> -->
              <!-- //> PASSWORD2 INPUT -->
              <q-input
                v-model="password2"
                type="password"
                label="Repita a senha"
                @keyup.enter="doRegister()"
              >
                <template v-if="password2 !== ''" v-slot:append class="q-mb-none">
                  <q-icon
                    :color="passMatch ? 'green' : 'red'"
                    :name="passMatch ? 'done' : 'priority_high'"
                  />
                </template>
              </q-input>
              <!-- //> BUTTON REGISTER -->
              <div class="full-width q-pt-md flex flex-center">
                <q-btn
                  rounded
                  :color="(!name || !email || !password1 || !passMatch) ? 'grey' : 'primary'"
                  label="Registrar"
                  @click="doRegister()"
                  class="full-width"
                  :disable="(!name || !email || !password1 || !passMatch)"
                />
              </div>
            </q-form>
          </q-card-section>
          <q-separator inset/>
          <!-- //> TOGGLE SECTION TO LOG IN -->
          <q-card-section class="text-center">
            Já possui uma conta?
            <span class="text-info" @click="isLogin=true">Entrar</span>
          </q-card-section>
        </div>


      </q-card>
    <!-- </div> -->
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStoreAuth } from 'stores/storeAuth'

const storeAuth = useStoreAuth()

const isLogin = ref(true)
const toggleLogin = () => {
  isLogin.value = !isLogin.value
}

const name = ref('')
const email = ref('')
const password = ref('')
const password1 = ref('')
const password2 = ref('')

const doLogin = () => {
  storeAuth.loginUser({
    email: email.value,
    password: password.value
  })
}
const doRegister = () => {
  storeAuth.registerUser({
    name: name.value,
    email: email.value,
    password: password1.value
  })
}

//* ------------------- PASSWORD HANDLERS ------------------ *//
const passSymb = [
  ['red','cancel'],
  ['red','sentiment_very_dissatisfied'],
  ['orange','sentiment_dissatisfied'],
  ['yellow','sentiment_neutral'],
  ['lime','sentiment_satisfied'],
  ['green','sentiment_very_satisfied'],
]
const pwdStrength = (pass) => {
  let strength = 0
  if (!(/(?=.{6,})/.test(pass))) return 0
  if (/(?=.*[a-z])/.test(pass)) {strength++} //> Lower case chr
  if (/(?=.*[A-Z])/.test(pass)) {strength++} //> Upper case chr
  if (/(?=.*[0-9])/.test(pass)) {strength++} //> Digit
  if (/(?=.*[^A-Za-z0-9])/.test(pass)) {strength++} //> Special chr
  if (/(?=.{8,})/.test(pass)) {strength++} //> At least 8 chr
  return strength
}
const strnSymb = computed(() => {
  return passSymb[pwdStrength(password1.value)][1]
})
const strnColr = computed(() => {
  return passSymb[pwdStrength(password1.value)][0]
})
const passMatch = computed(() => {
  return password1.value == password2.value
})

// //* ---------------------- FORM SUBMIT --------------------- *//
// const onSubmit = () => {
//   if (isLogin.value) {
//     storeAuth.loginUser({
//       email: email.value,
//       password: password.value
//     })
//   }
//   else {
//     storeAuth.registerUser({
//       name: name.value,
//       email: email.value,
//       password: password1.value
//     })
//   }
// }

</script>
