<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M16 17a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0H8m12 0h2v-5M10 5h7c2.761 0 5 3.134 5 7m0 0h-4.5L16 5m-6.5 5H17m-5-5v5M5 9v11M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z\"/>";
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
