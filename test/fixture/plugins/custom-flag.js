export default ({ $device }) => {
  $device.isApple = $device.isIOS || $device.isMacOS
}
