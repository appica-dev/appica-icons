<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 20a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0H3v-6m6 6h6m0 0a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m0 0h2v-4a2 2 0 0 0-2-2h-1M3 14l2-5h9l4 5M3 14h15m-6 0V9M3 6l9-4 9 4\"/>";
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
