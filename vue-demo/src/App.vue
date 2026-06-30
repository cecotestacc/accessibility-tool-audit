<template>
  <!-- page has no lang attribute set at the html level -->
  <div>
    <!-- skips h1 entirely -->
    <h2>Dashboard</h2>

    <!-- image with no alt -->
    <img src="/banner.jpg" />

    <!-- auto-playing audio with no controls -->
    <audio src="/background.mp3" autoplay loop />

    <NavBar />
    <UserForm />
    <DataTable :rows="rows" />

    <!-- low-contrast inline style -->
    <p :style="{ color: '#bbb', backgroundColor: '#fff' }">
      Last updated: {{ lastUpdated }}
    </p>

    <!-- non-descriptive link -->
    <a href="/help">click here</a> for support.

    <!-- positive tabIndex disrupts focus order -->
    <button tabindex="5" @click="save">Save</button>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import UserForm from "./components/UserForm.vue";
import DataTable from "./components/DataTable.vue";

export default {
  components: { NavBar, UserForm, DataTable },
  data() {
    return {
      lastUpdated: "2026-06-30",
      rows: [
        { name: "Alice", role: "Admin" },
        { name: "Bob",   role: "User"  },
      ],
    };
  },
  methods: {
    save() {},
  },
};
</script>
