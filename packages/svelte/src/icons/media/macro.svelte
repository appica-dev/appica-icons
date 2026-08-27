<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 21a6 6 0 0 1-6-6 6 6 0 0 1 6 6m0 0a6 6 0 0 0 6-6 6 6 0 0 0-6 6m0 0V11m0 0a5 5 0 0 1-5-5V3l3 2 2-2 2 2 3-2v3a5 5 0 0 1-5 5\"/>";
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
