<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 21h14m2-3.15H3c0-4.05 1.421-4.05 3.79-4.05C12 13.8 8 9.21 8 7a4 4 0 0 1 8 0c0 2.21-4 6.8 1.21 6.8 2.369 0 3.79 0 3.79 4.05\"/>";
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
