<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15 8h.01M4 15l4-4c.928-.893 2.072-.893 3 0l5 5m-2-2 1-1c.928-.893 2.072-.893 3 0l2 2M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0\"/>";
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
