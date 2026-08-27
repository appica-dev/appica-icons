<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 7a2 2 0 1 1 2-2M5 7a2 2 0 0 0 2-2M5 7v10M7 5h10m2 12a2 2 0 1 1 0 4 2 2 0 0 1 0-4m0 0V7m-2-2a2 2 0 0 0 2 2m-2-2a2 2 0 1 1 2 2M5 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4\"/>";
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
