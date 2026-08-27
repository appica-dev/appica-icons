<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 9 4 6m0 0 3-3M4 6h11a6.002 6.002 0 0 1 .997 11.918M6 14v6m3-4.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 1 0-3 0\"/>";
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
