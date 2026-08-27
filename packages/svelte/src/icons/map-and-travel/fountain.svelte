<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 16v-5a2 2 0 0 0-4 0m10 5v-5a2 2 0 1 1 4 0m-7 5V6m0 0a3 3 0 0 1 6 0m-6 0a3 3 0 0 0-6 0M3 16h18v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z\"/>";
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
