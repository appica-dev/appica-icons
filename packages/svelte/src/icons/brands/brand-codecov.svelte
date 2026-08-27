<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9.695 12.905a6 6 0 0 0-3.295-.976c-1.257 0-2.436.336-3.4.99a8.9 8.9 0 0 1 .685-3.413 8.9 8.9 0 0 1 1.951-2.893 9 9 0 0 1 2.92-1.934 9.07 9.07 0 0 1 6.888 0 9 9 0 0 1 2.92 1.934 8.9 8.9 0 0 1 1.95 2.893A8.9 8.9 0 0 1 21 12.92c-.966-.658-2.14-.991-3.4-.991-.973 0-1.931.234-2.793.682a6 6 0 0 0-2.15 1.893A5.897 5.897 0 0 0 11.995 20\"/>";
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
