export function setIP() {
  var MyPeerConnection =
    window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection // compatibility for firefox and chrome
  var pc = new MyPeerConnection({
    iceServers: [],
  })
  var noop = function () {}
  var localIPs = {}
  var ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g

  function ipIterate(ip) {
    if (!localIPs[ip]) {
      if (ip !== '127.0.0.1') {
        sessionStorage.setItem('gm_hlsg', ip)
      } else {
        sessionStorage.setItem('gm_hlsg', '0.0.0.0')
      }
    }
    localIPs[ip] = true
  }
  pc.createDataChannel('')
  pc.createOffer().then(function (sdp) {
    sdp.sdp.split('\n').forEach(function (line) {
      if (line.indexOf('candidate') < 0) {
        return
      }
      line.match(ipRegex).forEach(ipIterate)
    })
    pc.setLocalDescription(sdp, noop, noop)
  })
  pc.onicecandidate = function (ice) {
    var curObj = ice.srcElement ? ice.srcElement : ice.target
    curObj.localDescription.sdp.split('\n').forEach(function (line) {
      var ipArr = line.match(ipRegex)
      if (ipArr == null) return
      if (ipArr != null && ipArr.length > 0) {
        ipArr.forEach(ipIterate)
      }
    })
    // if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
    // var ipArr = ice.candidate.candidate.match(ipRegex);
    // ipArr.forEach(ipIterate);
  }
}
