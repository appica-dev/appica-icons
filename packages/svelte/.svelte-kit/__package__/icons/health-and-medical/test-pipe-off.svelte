<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M20 8.04A800 800 0 0 0 16 12m-2 2q-1.627 1.628-6.122 6.164a2.857 2.857 0 0 1-4.041-4.04C6.855 13.124 8.91 11.087 10 10m2-2q1.307-1.308 3.959-4M7 13h6m6 2 1.5 1.6m-.74 3.173a2 2 0 0 1-2.612-2.608M15 3l6 6M3 3l18 18\"/>";
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
