<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M6 11h5.38a1 1 0 0 1 .9.55L13 13h5a1 1 0 0 1 1 1v2m0 0a2 2 0 0 0-2 2m2-2a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2M3 4h1.13a1 1 0 0 1 1 .86L6.72 16M17 18H9m0 0a2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2 2 2 0 0 1 2 2z\"/>";
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
