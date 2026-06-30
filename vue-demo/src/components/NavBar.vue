<template>
  <!-- nav has no aria-label — indistinguishable from other navs by screen readers -->
  <nav>
    <!-- logo image, no alt -->
    <img src="/logo.png" />

    <ul>
      <!-- anchors used as JS action triggers — should be buttons -->
      <li v-for="item in items" :key="item.label">
        <a href="#" @click.prevent="navigate(item.route)">{{ item.label }}</a>
      </li>
    </ul>

    <!-- icon-only button, no aria-label -->
    <button class="icon-btn" @click="toggleMenu">
      <img src="/hamburger.png" />
    </button>

    <!-- contrast ratio of #c8c8c8 on #fff is ~1.6:1 — fails WCAG AA -->
    <span style="color: #c8c8c8; background: #ffffff; font-size: 11px;">v2.1.0</span>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { label: "Home",     route: "/" },
        { label: "Projects", route: "/projects" },
        { label: "Settings", route: "/settings" },
      ],
    };
  },
  methods: {
    navigate(route) { window.location.href = route; },
    toggleMenu() {},
  },
};
</script>
