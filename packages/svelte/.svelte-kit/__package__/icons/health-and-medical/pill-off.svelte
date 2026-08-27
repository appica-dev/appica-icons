<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m10.495 6.505 2-2a4.95 4.95 0 0 1 7 7l-2 2m-2 2-4 4a4.95 4.95 0 0 1-7-7l4-4M8.5 8.5l7 7M3 3l18 18\"/>";
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
