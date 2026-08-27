<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11 5v13.982a2 2 0 0 0 4 0V5a2 2 0 0 0-4 0M6.63 8.407a2.125 2.125 0 0 0-.074 2.944c.77.834 2.05.869 2.862.077l4.95-4.834c.812-.792.846-2.11.076-2.945a1.984 1.984 0 0 0-2.861-.077z\"/>";
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
