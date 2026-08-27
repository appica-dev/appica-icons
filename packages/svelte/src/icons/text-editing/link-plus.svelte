<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m9 15 6-6m-4-3 .463-.536a5.001 5.001 0 1 1 7.071 7.072m-5.93 5.998a5.07 5.07 0 0 1-7.128 0 4.973 4.973 0 0 1 0-7.071L6 11m10 8h6m-3-3v6\"/>";
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
