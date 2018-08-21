<template>
  <Layout style="height: 100%" class="main">
    <Sider hide-trigger collapsible :width="256" :collapsed-width="64" v-model="collapsed" class="left-sider" :style="{overflow: 'hidden'}">
      <side-menu accordion ref="sideMenu" :active-name="$route.name" :collapsed="collapsed" :menu-list="menuList">
        <!-- 需要放在菜单上面的内容，如Logo，写在side-menu标签内部，如下 -->
        <div class="logo-con">
          <img v-show="!collapsed" :src="maxLogo" key="max-logo" />
          <img v-show="collapsed" :src="minLogo" key="min-logo" />
        </div>
      </side-menu>
    </Sider>
  </Layout>
</template>
<script>
import SideMenu from './components/side-menu'
// import HeaderBar from './components/header-bar'
// import TagsNav from './components/tags-nav'
// import User from './components/user'
// import Fullscreen from './components/fullscreen'
// import Language from './components/language'
// import { mapMutations, mapActions } from 'vuex'
// import { getNewTagList, getNextName } from '@/libs/util'
import minLogo from '@/assets/images/logo-min.jpg'
import maxLogo from '@/assets/images/logo.jpg'
import './main.less'
export default {
  name: 'Main',
  components: {
    SideMenu,
    // HeaderBar,
    // Language,
    // TagsNav,
    // Fullscreen,
    // User
  },
  data () {
    return {
      collapsed: false,
      minLogo,
      maxLogo,
      isFullscreen: false,
    }
  },
  computed: {
    menuList () {
      return this.$store.getters.menuList
    }
  }
}
</script>
