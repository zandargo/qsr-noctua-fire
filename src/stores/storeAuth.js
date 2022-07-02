import { defineStore } from 'pinia'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { auth, db } from 'boot/firebase'
import { useStoreApp } from 'stores/storeApp'
//! import { useStoreNotes } from '@/stores/storeNotes'


export const useStoreAuth = defineStore('storeAuth', {
  state: () => ({
    user: {},
    authError: null,
  }),
  actions: {
    init() {
      //! const storeNotes = useStoreNotes()
      const storeApp = useStoreApp()


      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const docRef = doc(db, "users", user.uid)
          const docSnap = await getDoc(docRef)
          const docUser = docSnap.data()
          let firstName = docUser.name.split(' ')
          this.user = {
            id: user.uid,
            name: docUser.name,
            firstName: firstName[0],
            email: user.email
          }
          this.router.push('/')
          // this.router.push({name: 'index'})
          //! storeNotes.init()
        } else {
          this.user = {}
          storeApp.actLeftDrawer('close')
          storeApp.actRightDrawer('close')

          this.router.replace('/auth')
          //! storeNotes.clearNotes()
        }
      })
    },
    //* -------------------- REGISTER NEW USER ------------------- */
    registerUser(credentials) {
      createUserWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then(async (userCredential) => {
        const user = userCredential.user
        await setDoc(doc(db, "users", user.uid), {
          id: user.uid,
          name: credentials.name,
          email: credentials.email,
          isActive: true,
          isPremium: false,
        })
        let firstName = credentials.name.split(' ')
        this.user = {
          id: user.uid,
          name: credentials.name,
          firstName: firstName[0],
          email: user.email,
          isActive: true,
          isPremium: false,
        }
        const storeApp = useStoreApp()
        storeApp.actLeftDrawer('open')
        storeApp.actRightDrawer('open')

      })
      .catch((error) => {
        console.log('error.message: ', error.message)
        switch (error.message) {
          case 'Firebase: Error (auth/email-already-in-use).':
            this.authError = 'E-mail já cadastrado!'
            break

          default:
            this.authError = 'Erro desconhecido'
            break
        }
      })
    },
    //* ------------------- LOGIN EXISTING USER ------------------ */
    loginUser(credentials) {
      signInWithEmailAndPassword(auth, credentials.email, credentials.password)
      .then(async (userCredential) => {
        const user = userCredential.user
        const docRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(docRef)
        const docUser = docSnap.data()
        let firstName = docUser.name.split(' ')
        this.user = {
          id: user.uid,
          name: docUser.name,
          firstName: firstName[0],
          email: user.email
        }
        const storeApp = useStoreApp()
        storeApp.actLeftDrawer('open')
        storeApp.actRightDrawer('open')

      }).catch((error) => {
        console.log('error.message: ', error.message)
        switch (error.message) {
          case 'Firebase: Error (auth/user-not-found).':
            this.authError = 'Usuário não registrado'
            break
          case 'Firebase: Error (auth/wrong-password).':
            this.authError = 'Senha incorreta'
            break
          case 'Firebase: Error (auth/invalid-email).':
            this.authError = 'E-mail inválido'
            break

          default:
            this.authError = 'Erro desconhecido'
            break
        }
      })
    },
    //* ----------------------- LOGOUT USER ---------------------- */
    logoutUser() {
      signOut(auth).then(() => {
        // console.log('User signed out')
        const storeApp = useStoreApp()
        storeApp.actLeftDrawer('close')
        storeApp.actRightDrawer('close')

      }).catch((error) => {
        // console.log(error.message)
      })
    }
  },
})
