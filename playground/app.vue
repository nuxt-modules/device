<template>
  <div>
    <p>userAgent: {{ device.userAgent }}</p>
    <p>isDesktop: {{ device.isDesktop ? '✅':'❌' }}</p>
    <p>isIos: {{ device.isIos ? '✅':'❌' }}</p>
    <p>isMobile: {{ device.isMobile ? '✅':'❌' }}</p>
    <p>isMobileOrTablet: {{ device.isMobileOrTablet ? '✅':'❌' }}</p>
    <p>isDesktopOrTablet: {{ device.isDesktopOrTablet ? '✅':'❌' }}</p>
    <p>isTablet: {{ device.isTablet ? '✅':'❌' }}</p>
    <p>isLinux: {{ device.isLinux ? '✅':'❌' }}</p>
    <p>isWindows: {{ device.isWindows ? '✅':'❌' }}</p>
    <p>isMacOS: {{ device.isMacOS ? '✅':'❌' }}</p>
    <p>isApple: {{ device.isApple ? '✅':'❌' }}</p>
    <p>isAndroid: {{ device.isAndroid ? '✅':'❌' }}</p>
    <p>isSafari: {{ device.isSafari ? '✅':'❌' }}</p>
    <p>isFirefox: {{ device.isFirefox ? '✅':'❌' }}</p>
    <p>isEdge: {{ device.isEdge ? '✅':'❌' }}</p>
    <p>isChrome: {{ device.isChrome ? '✅':'❌' }}</p>
    <p>isSamsung: {{ device.isSamsung ? '✅':'❌' }}</p>
    <p>isCrawler: {{ device.isCrawler ? '✅':'❌' }}</p>
  </div>
</template>

<script setup>
const device = useDevice()
</script>
