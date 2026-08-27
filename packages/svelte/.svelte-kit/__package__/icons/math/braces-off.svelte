<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.176 5.177C5.063 5.428 5 5.707 5 6v3c0 1.657-.895 3-2 3 1.105 0 2 1.343 2 3v3a2 2 0 0 0 2 2M17 4a2 2 0 0 1 2 2v3c0 1.657.895 3 2 3-1.105 0-2 1.343-2 3m-.176 3.821A2 2 0 0 1 17 20M3 3l18 18\"/>";
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
