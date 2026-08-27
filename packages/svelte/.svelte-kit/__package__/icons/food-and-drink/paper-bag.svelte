<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 21h12a2 2 0 0 0 2-2v-5.82a5 5 0 0 0-.528-2.236l-.944-1.888A5 5 0 0 1 18 6.82V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v3m0 13a2 2 0 0 1-2-2v-5.82a5 5 0 0 1 .528-2.236L6 8m0 13a2 2 0 0 0 2-2v-5.82a5 5 0 0 0-.528-2.236L6 8m5-1h2m-1 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
