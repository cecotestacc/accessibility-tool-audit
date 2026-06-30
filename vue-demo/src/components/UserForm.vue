<template>
  <form @submit.prevent="submit">
    <!-- inputs have no <label> elements -->
    <input type="text"     v-model="name"     placeholder="Full name" />
    <input type="email"    v-model="email"    placeholder="Email" />
    <input type="tel"      v-model="phone"    placeholder="Phone" />

    <!-- required field, no aria-required or visual indicator beyond placeholder -->
    <input type="text" v-model="company" placeholder="Company (required)" required />

    <!-- error message not linked to field via aria-describedby -->
    <span v-if="error" style="color: red">{{ error }}</span>

    <!-- select with no associated label -->
    <select v-model="country">
      <option value="">Choose country</option>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
    </select>

    <!-- div acting as submit button -->
    <div
      class="fake-btn"
      style="background:#4a90e2;color:#fff;padding:8px 20px;cursor:pointer;display:inline-block;"
      @click="submit"
    >
      Submit
    </div>

    <a href="/terms">click here</a> to read our terms.
  </form>
</template>

<script>
export default {
  data() {
    return { name: "", email: "", phone: "", company: "", country: "", error: "" };
  },
  methods: {
    submit() {
      if (!this.name) this.error = "Name is required";
    },
  },
};
</script>
