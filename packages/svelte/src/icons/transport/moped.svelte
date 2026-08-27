<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 16v1a2 2 0 0 0 4 0v-5H6a3 3 0 0 0-3 3v1h10a6 6 0 0 1 5-4V7a2 2 0 0 0-2-2h-1M6 9h3m7 8a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
