<template>
  <!-- table has no caption, no <th> headers, no scope attributes -->
  <table style="border-collapse: collapse; width: 100%;">
    <tr v-for="(row, i) in rows" :key="i"
        style="cursor: pointer;"
        @click="selectRow(row)"
    >
      <!-- entire row clickable via click on <tr> — not keyboard accessible -->
      <td style="padding: 8px; border: 1px solid #ddd;">{{ row.name }}</td>
      <td style="padding: 8px; border: 1px solid #ddd;">{{ row.role }}</td>

      <!-- action cell: icon-only button with no label -->
      <td style="padding: 8px; border: 1px solid #ddd;">
        <button style="border: none; background: none;">✎</button>
        <button style="border: none; background: none;">✕</button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    rows: { type: Array, default: () => [] },
  },
  methods: {
    selectRow(row) { console.log("selected", row); },
  },
};
</script>
