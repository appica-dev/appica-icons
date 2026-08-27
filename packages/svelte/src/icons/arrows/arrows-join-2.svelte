<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 7h1.948c1.913 0 3.705.933 4.802 2.5a5.86 5.86 0 0 0 4.802 2.5H21m0 0-3 3m3-3-3-3M3 17h1.95a5.85 5.85 0 0 0 4.798-2.5 5.85 5.85 0 0 1 4.798-2.5H20\"/>";
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
