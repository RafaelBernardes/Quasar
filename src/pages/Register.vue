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
          <div class="text-h6 text-weight-light" style="text-align:center;">Registre-se</div>
        </q-card-section>

        <q-separator />

        <q-card-actions vertical>
          <q-form ref="RegForm">
            <q-input
              class="q-mx-sm"
              v-model="username"
              label="Nome Completo"
              :rules="[val => val && val.length > 0 || 'Este campo é obrigatório']"
              lazy-rules
              />
            <q-input
              class="q-mx-sm "
              type="email"
              v-model="email"
              label="Email"
              :rules="[
                        val => !!val || 'Este campo é obrigatório',
                        value => value.includes('@') || 'Insira um endereço de e-mail válido'
                      ]"
              lazy-rules
              />
            <q-input
              class="q-mx-sm "
              v-model="cpf"
              mask="###.###.###-##"
              label="CPF"
              :rules="[
                        val => !!val || 'Este campo é obrigatório',
                      ]"
              lazy-rules
              />
              <div class="row">
                <div class="col">
                  <q-input
                    class="q-mx-sm "
                    type="tel"
                    mask="(##)#####-####"
                    v-model="telefone"
                    label="Telefone"
                    :rules="[
                              val => !!val || 'Este campo é obrigatório',
                            ]"
                    lazy-rules
                  />
                </div>
                <div class="col">
                  <q-input
                    class="q-mx-sm "
                    mask="##/##/####"
                    v-model="birthdate"
                    label="Data de Nascimento"
                    :rules="[
                              val => !!val || 'Este campo é obrigatório',
                            ]"
                    lazy-rules
                  />
                </div>
              </div>
            <q-input
              class="q-mx-sm "
              type="password"
              v-model="password"
              ref="password"
              label="Senha"
              :rules="[
                        val => !!val || 'Este campo é obrigatório',
                        val => val.length >= 8 || 'Senha precisa ter mais de 8 caracteres'
                      ]"
              lazy-rules
            />
            <q-input
              class="q-mx-sm "
              type="password"
              v-model="password2"
              label="Confirmar Senha"
              lazy-rules
              :rules="ConfirmPWD"
              />
          </q-form>
        </q-card-actions>

        <q-btn class="q-ml-md q-mr-xl" @click="onSubmit" color="primary" icon-right="send"  label="Registrar" />
        <a
          href="#/login"
          class="text-caption q-ml-xl text-right text-weight-light"
          >
          Faça seu login
          </a>
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
      username: '',
      email: '',
      cpf: '',
      telefone: '',
      birthdate: '',
      password: '',
      password2: '',
    }
  },

  methods: {
    onSubmit () {
        this.$refs.RegForm.validate()
    }
  },

  computed: {
            ConfirmPWD() {
                return [
                    (v) => !!v || "Este campo é obrigatório",
                    (v) => v == this.$refs.password.value || "Senhas diferentes"
                 ]
            },
            Required() {
                return [(v) => !!v || 'Este campo é obrigatório']
            },
            todaysDate() {
              let timeStamp = Date.now()
              return date.formatDate(timeStamp, 'YYYY')
            }
        },
};
</script>
<style src="../css/Register.scss" lang="scss" scoped>
</style>
