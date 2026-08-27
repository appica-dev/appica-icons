<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m16 7-4-4m0 0L8 7m4-4v5.394A6.74 6.74 0 0 0 15 14a6.74 6.74 0 0 1 3 5.606V21M6 21v.01m0-3v.01m1-3v.01m3-2v.01\"/>";
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
