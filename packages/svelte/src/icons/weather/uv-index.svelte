<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 12h1m16 0h1M5.6 5.6l.7.7m12.1-.7-.7.7M8 12a4 4 0 1 1 8 0m-4-8V3m1 13 2 5h1l2-5M6 16v3a2 2 0 0 0 4 0v-3\"/>";
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
