<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 14s.605-5.44 2.284-7.862m3.395.026c2.137 2.652 4.547 9.113 6.68 11.719m3.389.155Q19.801 16.718 21 10m-6 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0M5 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0\"/>";
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
