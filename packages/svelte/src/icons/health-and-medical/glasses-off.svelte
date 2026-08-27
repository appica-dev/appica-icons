<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5.536 5.546 3 14m0 0v2.5a3.5 3.5 0 1 0 7 0V14zM16 4h2l3 10m0 0h-3m3 0v2.5q0 .236-.03.463M10 16h4m5.426 3.423A3.5 3.5 0 0 1 14 16.5V14M3 3l18 18\"/>";
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
