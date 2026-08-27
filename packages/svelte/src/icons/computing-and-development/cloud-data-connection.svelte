<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 13v3m0 0a2 2 0 0 1 2 2m-2-2a2 2 0 0 0-2 2m0 0a2 2 0 0 0 4 0m-4 0H3m11 0h7M5 9.897c0-1.714 1.46-3.104 3.26-3.104.275-1.22 1.255-2.215 2.572-2.611s2.77-.134 3.811.69c1.042.822 1.514 2.08 1.239 3.3h.693A2.42 2.42 0 0 1 19 10.586 2.42 2.42 0 0 1 16.575 13H8.26C6.46 13 5 11.61 5 9.897\"/>";
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
