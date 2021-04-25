<template>
  <div class="center">
      <div>
        <div class="logo">
          <q-avatar class="q-ma-md">
            <img src="../assets/owl.jpg" />
          </q-avatar>
        </div>
        <q-card class="card">
          <q-card-section>
            <div class="text-h6 text-weight-light" style="text-align:center;">Login</div>
          </q-card-section>

          <q-separator />

          <q-card-actions vertical>
            <q-input class="q-mx-sm q-mt-lg" type="email" v-model="email" label="Nome de Usuário" />
            <q-input class="q-mx-sm q-mt-lg" :type="isPwd ? 'password' : 'text'" v-model="password" label="Senha" >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </q-card-actions>

          <q-btn class="q-ma-md q-mr-xl" color="primary" icon-right="send" type="submit" label="Login" />
          <a href="#" class="text-caption q-ml-lg text-right text-weight-light">Esqueceu sua senha?</a>
          <p class="text-caption text-center q-mt-md text-weight-light">
            Não possui conta? Registre-se
            <a href="#/register">aqui</a>!
          </p>
        </q-card>
      </div>
      <div class="text-caption footer">
        <p><q-icon name="far fa-copyright"/> Rafael Bernardes, {{todaysDate}}. All rights reserved!</p>
      </div>
  </div>
</template>

<script>
import { date } from 'quasar'

export default {
  name: "Login",

  data(){
    return {
      password: '',
      email: '',
      isPwd: true,
    }
  },

  computed: {
    todaysDate() {
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'YYYY')
    }
  },
};
</script>
<style src="../css/Login.scss" lang="scss" scoped>
</style>
