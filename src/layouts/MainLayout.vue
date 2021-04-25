<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
      <div class="row">
        <div class="text-h4 q-px-md q-pt-sm q-mb-sm col">Dark Woods</div>
        <div class="q-px-md q-mb-sm col" style="text-align:right;">
          <q-btn-dropdown rounded color="primary" icon="fas fa-user">
            <div class="row no-wrap q-pa-md">
              <div class="column">
                <div class="text-h6 q-mb-md">Configurações</div>
                <q-list>
                  <q-item clickable to="/profile">
                    <q-item-section>
                      <q-item-label>Minhas informações</q-item-label>
                    </q-item-section>
                  </q-item>

                  <q-item clickable to="/respassword">
                    <q-item-section>
                      <q-item-label>Alterar Senha</q-item-label>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>

              <q-separator vertical inset class="q-mx-lg" />

              <div class="column items-center">
                <q-avatar size="72px">
                  <img src="../assets/owl.jpg" />
                </q-avatar>

                <div class="text-subtitle1 q-mt-md q-mb-xs">Nite Owl</div>

                <q-btn color="primary" label="Sair" push size="sm" v-close-popup />
              </div>
            </div>
          </q-btn-dropdown>
        </div>
      </div>
      <q-img class="absolute-top header-image" src="../assets/darkwoods2.jpg"></q-img>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" elevated show-if-above :width="200" :breakpoint="400">
      <q-scroll-area
        style="height: calc(100% - 106px); margin-top: 106px; border-right: 1px solid #ddd"
      >
        <q-list padding>
          <q-item clickable v-ripple to="#">
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section>Inbox</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/Graphs">
            <q-item-section avatar>
              <q-icon name="fas fa-chart-bar" />
            </q-item-section>

            <q-item-section>Gráficos</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="#">
            <q-item-section avatar>
              <q-icon name="send" />
            </q-item-section>

            <q-item-section>Send</q-item-section>
          </q-item>

          <q-item clickable v-ripple to="#">
            <q-item-section avatar>
              <q-icon name="drafts" />
            </q-item-section>

            <q-item-section>Drafts</q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="~/assets/darkwoods2.jpg"
        style="height: 106px; opacity: 0.85;"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img src="../assets/owl.jpg" />
          </q-avatar>
          <div class="text-weight-bold">Nite Owl</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="text-caption footer fixed-bottom-right">
      <p>
        <q-icon name="far fa-copyright" />
        Rafael Bernardes, {{todaysDate}}. All rights reserved!
      </p>
    </div>
  </q-layout>
</template>

<script>
import { date } from 'quasar'

export default {
  name: "MainLayout",

  data() {
    return {
      leftDrawerOpen: false,
      drawer: false
    };
  },
  computed: {
    todaysDate() {
              let timeStamp = Date.now()
              return date.formatDate(timeStamp, 'YYYY')
            }
        }
};
</script>

<style lang="scss" scoped>
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.85;
}

.footer {
  color: #000000;
}
</style>
