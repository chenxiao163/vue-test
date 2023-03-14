const getters = {
  sidebar: (state) => state.app.sidebar,
  gameName: (state) => state.app.gameName,
  device: (state) => state.app.device,
  token: (state) => state.user.token,
  avatar: (state) => state.user.avatar,
  nodeChilds: (state) => state.user.nodeChilds,
  role: (state) => state.user.role,
  visitedViews: (state) => state.tagsView.visitedViews,
  cachedViews: (state) => state.tagsView.cachedViews,
  permission_routes: (state) => state.permission.routes,
  flag: (state) => state.permission.flag,
  ifSlider: (state) => state.user.ifSlider,
  gameMark: (state) => state.user.gameMark,
  games: (state) => state.user.games,
  mypermissions: (state) => state.permission.mypermissions,
  name: (state) => state.user.name,
}
export default getters
