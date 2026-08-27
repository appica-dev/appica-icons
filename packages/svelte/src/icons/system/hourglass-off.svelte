<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M18 18v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a6 6 0 0 1 6-6 6 6 0 0 1-6-6m9.13 5.12A6 6 0 0 0 18 6V4a1 1 0 0 0-1-1H7M3 3l18 18\"/>";
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
