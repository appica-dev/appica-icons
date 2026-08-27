<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m5 13 6 6m3.32-1.68L18 21l3-3-3.365-3.365M10 5.5 8 3H3v5l3 2.5M21 3v5l-11 9-4 4-3-3 4-4 9-11z\"/>";
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
