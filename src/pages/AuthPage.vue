<template>
  <div >
    <!-- <div class="col-12 bg-d2"> -->
      <q-card bordered class="absolute-center bg-white shadow-7">
        <q-card-section>
          <div class="text-h3">Bem vindo ao NOCTUA FIRE</div>
          <!-- <div class="text-subtitle2 text-center">by Sixem</div> -->
        </q-card-section>

        <q-separator inset />

        <!-- //*  LOGIN  *// -->
        <div v-if="isLogin">
          <q-card-section  >
            <q-input
              v-model="email"
              type="email"
              label="E-mail"
            />
            <q-input
              v-model="password"
              type="password"
              label="Senha"
            />
            <div class="full-width q-pt-md flex flex-center">
              <q-btn
                rounded
                color="blue-9"
                label="Entrar"
                @click="doLogin()"
                class="full-width"
              />
            </div>
          </q-card-section>
          <q-separator inset/>
          <q-card-section>
            Não possui uma conta?
            <span class="text-teal-5" @click="isLogin=false">Registrar</span>
          </q-card-section>
        </div>

        <!-- //*  REGISTRAR  *// -->
        <div v-if="!isLogin">
          <q-card-section  >
            <q-input
              v-model="name"
              type="text"
              label="Nome"
            />
            <q-input
              v-model="email"
              type="email"
              label="E-mail"
            />
            <q-input
              v-model="password1"
              type="password"
              label="Senha"

            >
              <template v-slot:append class="q-mb-none">
                <q-icon color="red" name="sentiment_very_dissatisfied" />
                <q-icon color="orange" name="sentiment_dissatisfied" />
                <q-icon color="yellow" name="sentiment_neutral" />
                <q-icon color="lime" name="sentiment_satisfied" />
                <q-icon color="green" name="sentiment_very_satisfied" />
              </template>
            </q-input>
            <q-input
              v-model="password2"
              type="password"
              label="Repita a senha"
            />
            <div class="full-width q-pt-md flex flex-center">
              <q-btn
                rounded
                color="blue-9"
                label="Registrar"
                @click="doRegister()"
                class="full-width"
              />
            </div>
          </q-card-section>
          <q-separator inset/>
          <q-card-section>
            Já possui uma conta?
            <span class="text-teal-5" @click="isLogin=true">Entrar</span>
          </q-card-section>
        </div>


      </q-card>
    <!-- </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStoreAuth } from 'stores/storeAuth'

const storeAuth = useStoreAuth()

const isLogin = ref(true)
const toggleLogin = () => {
  isLogin.value = !isLogin.value
}

const name = ref(null)
const email = ref(null)
const password = ref(null)
const password1 = ref(null)
const password2 = ref(null)

const doLogin = () => {}
const doRegister = () => {}

</script>
