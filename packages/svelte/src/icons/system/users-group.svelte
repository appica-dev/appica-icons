<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 21v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1m1-11h2a2 2 0 0 1 2 2v1M3 13v-1a2 2 0 0 1 2-2h2m3 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0m5-8a2 2 0 1 0 4 0 2 2 0 0 0-4 0M5 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
