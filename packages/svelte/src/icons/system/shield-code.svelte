<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11.993 21a12.01 12.01 0 0 1-7.432-5.7A12 12 0 0 1 3.487 6a12.01 12.01 0 0 0 8.506-3A12.01 12.01 0 0 0 20.5 6a12 12 0 0 1-.078 7.024M19.999 21 22 19l-2.001-2m-3.002 0-2.002 2 2.002 2\"/>";
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
