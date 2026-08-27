<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m3 3 18 18M11 11a1 1 0 0 1-1-1m0-3.968V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v10l-3-3h-3m-1 4v2a1 1 0 0 1-1 1H6l-3 3V11a1 1 0 0 1 1-1h2\"/>";
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
