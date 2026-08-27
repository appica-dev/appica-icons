<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7.97 3.956A9 9 0 0 1 12.007 3v.008h.393c-.97.9-1.684 2.04-2.069 3.305m-.14 3.837a7.485 7.485 0 0 0 5.571 5.636m3.89-.11a8 8 0 0 0 .663-.232 9 9 0 0 1-.274.596m-1.694 2.335A8.996 8.996 0 0 1 3 11.993a9 9 0 0 1 2.644-6.355M3.012 3.008 21 20.993\"/>";
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
