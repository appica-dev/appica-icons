<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8.334 8.388A19 19 0 0 0 8 12c0 4.97 1.79 9 4 9 1.622 0 3.018-2.172 3.646-5.294M16 12c0-4.97-1.79-9-4-9-1.035 0-1.979.885-2.689 2.337m-3.66.286a9 9 0 1 0 12.71 12.745m1.683-2.328A9.001 9.001 0 0 0 7.95 3.96m.37 4.389C5.183 8.974 3 10.374 3 12c0 2.21 4.03 4 9 4 1.286 0 2.51-.12 3.616-.336m3.06-.98c1.444-.711 2.324-1.653 2.324-2.684 0-2.21-4.03-4-9-4M3 3l18 18\"/>";
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
