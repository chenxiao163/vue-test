<style lang="scss" scoped>
  // @import '@/layout/LayoutVertical/HeaderVertical/index.scss';
  .header-inner {
    height: 50px;
    width: 100%;
    border-bottom: 1px solid #eee;
    position: relative;
    top: 0;
    left: 0;
    background: #fff;
    .handerRight {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(0%, -50%);
      text-align: center;
      line-height: 50px;
      justify-content: space-between;
    }
  }
  .gamesMain {
    width: 100%;
    height: 100vh;
    .el-form-item-list {
      margin-top: 30px;
    }
  }
  .gamesList {
    width: 95%;
    height: 100px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    .gamsListItem {
      width: 25%;
      height: 100px;
      border: 1px solid rgb(232, 228, 228);
      box-shadow: 0px 2px 4px 4px rgb(69 65 78 / 8%);
      margin: 20px 50px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      border-radius: 10px;
      .imgs {
        width: 30%;
        height: 100px;
        position: absolute;
        top: 0;
        left: 0;
        border-right: 1px solid rgb(180, 174, 174);
        img {
          width: 45%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .titles {
        position: absolute;
        right: -10px;
        top: 0;
        width: 68%;
        height: 100%;
        margin-right: 10px;
        .titleStyle {
          margin-top: 20px;
          color: #414346;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .gamsListItem:hover {
      -webkit-box-shadow: 0 0 6px 0 rgba(10, 42, 97, 0.3);
      box-shadow: 0 0 6px 0 rgba(10, 42, 97, 0.3);
      border: 1px solid #409eff;
    }
  }
</style>
<template>
  <!--纵向布局-->
  <div
    class="m-layout-header"
    :class="{
      'fixed-header': themeConfig.fixedHeader,
      collapse: themeConfig.fixedHeader && isCollapse,
      'no-collapse': themeConfig.fixedHeader && !isCollapse,
    }"
  >
    <div class="header-inner">
      <div class="handerRight">
        <HeaderToolRight />
      </div>
    </div>
    <div class="gamesMain">
      <el-form :model="form" label-width="120px" class="el-form-item-list">
        <el-form-item label="我的游戏:">
          <el-input placeholder="游戏名称" style="width: 220px" v-model="form.MyGames" />
        </el-form-item>
      </el-form>
      <br />
      <div class="gamesList" v-for="(item, index) in myGames" :key="index">
        <div class="gamsListItem" @click="showGame(item)">
          <div class="imgs">
            <img
              :src="item.gameIcon ? item.gameIcon : 'https://downqn.tuyoo.com/gwapp/tuyoo/logo.png'"
              alt=""
            />
          </div>
          <div class="titles">
            <p class="titleStyle">{{ item.gameName }}</p>
            <p class="titleStyle">{{ item.gameMark }}</p>
          </div>
        </div>
      </div>
    </div>
    <TagsView v-if="themeConfig.showTag" />
  </div>
</template>

<script lang="ts" setup>
  // 引入组件
  import HeaderToolRight from '@/layout/components/Header/ToolRight.vue'
  import { setGameMark, setGameName } from '@/utils/auth'
  import { computed, reactive, onMounted, ref } from 'vue'
  import { useSettingStore } from '@/store/modules/setting'
  import UserStore from '@/store/modules/users'
  // import toggleGameName from '@/store/modules/app'
  const SettingStore = useSettingStore()
  const form = reactive({
    MyGames: '',
    Myname: '',
    Mymark: '',
  })
  const myGames = ref([])
  const showGame = async (game) => {
    console.log(game, 'game.gameMark')

    setGameMark(game.gameMark)
    setGameName(game.gameName)
    // await toggleGameName.actions.toggleGameName('app/toggleGameName', game.gameName)
    // await UserStore.actions.resetMark('user/resetMark', { mark: game.gameMark })
    await UserStore.actions.getInfo('user/getInfo')
  }
  onMounted(() => {
    UserStore.actions.getGames('user/getGames')
    UserStore.actions.getGames('user/resetMark')
    myGames.value = [...UserStore.state.games]
  })
  const name = computed(() => {})
  // 主题配置
  const themeConfig = computed(() => SettingStore.themeConfig)
  const isCollapse = computed(() => !SettingStore.isCollapse)
</script>
