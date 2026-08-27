<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 21v-2a4 4 0 0 1 4-4h4q.515.001.99.124M19 16v6m0 0 3-3m-3 3-3-3M8 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0\"/>";
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
