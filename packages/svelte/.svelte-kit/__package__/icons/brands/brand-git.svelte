<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0 0v6m0 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2m3-4-2-2m-2-2L9.1 5.1M15 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0m-1.554-9.4 7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1-2.892 0l-7.955-7.955a2.045 2.045 0 0 1 0-2.892l7.955-7.955a2.045 2.045 0 0 1 2.892.001\"/>";
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
