<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11.412 7.407a6.03 6.03 0 0 0-2.82-2.82M4 4H3v2a6 6 0 0 0 6 6h3v8m0-6c0-.588.085-1.173.255-1.736m1.51-2.514A5.98 5.98 0 0 1 18 8h3v1c0 2.158-1.14 4.05-2.85 5.107M15 15h-3M3 3l18 18\"/>";
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
